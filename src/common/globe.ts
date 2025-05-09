import * as THREE from 'three';
import earthAtNight from '../assets/images/earth-at-night.jpg';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface IGlobe {
    radius: number;
    width: number;
    height: number;
    canvas: HTMLCanvasElement;
    options: {
        backgroundColor?: string;
        targetScale?: number;
        showGlobe: boolean;
        pulsePoint: {
            lat: number;
            lon: number;
        };
        pulseColor: string;
        rotationSpeed: number;
        mode: 'keepRotating' | 'rollToLocation';
    }
}

export class Globe {

    RADIUS: number = 2; // Radius of the globe
    WIDTH: number = 250; // Default width
    HEIGHT: number = 250; // Default height
    DEFAULT_ROTATION_SPEED: number = 0.01; // Default rotation speed

    canvas: HTMLCanvasElement;
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;

    private globeGeometry: THREE.SphereGeometry;
    private globeMaterial: THREE.MeshStandardMaterial;
    private globe: THREE.Mesh;
    private textureLoader: THREE.TextureLoader;

    private options: {
        backgroundColor: string;
        targetScale: number;
        showGlobe: boolean;
        pulsePoint: {
            lat: number;
            lon: number;
        };
        pulseColor: string;
        rotationSpeed: number;
        mode: 'keepRotating' | 'rollToLocation';
    }

    private pulseGeometry: THREE.SphereGeometry | undefined;
    private pulseMaterial: THREE.MeshBasicMaterial | undefined;
    private pulseMesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap> | undefined;
    private directionalLight: THREE.DirectionalLight | undefined
    private hemisphereLight: THREE.HemisphereLight | undefined
    private originalPulsePosition: THREE.Vector3 | undefined;

    private handleMouseMove: (event: MouseEvent) => void = () => { };

    private animationFrameId: number | null = null;
    private state: Map<string, any> = new Map(); // Mutable state storage
    handlePulseAnimation: () => void = () => { }; // Pulse animation logic

    constructor(props: IGlobe) {
        this.canvas = props.canvas;
        this.options = {
            backgroundColor: '#000000',
            targetScale: 1,
            ...props.options,
        };
        this.WIDTH = props.width || this.WIDTH;
        this.HEIGHT = props.height || this.HEIGHT;
        this.RADIUS = props.radius || this.RADIUS;

        // Initialize state with options
        this.state.set('options', {
            backgroundColor: '#000000',
            targetScale: 1,
            ...props.options,
        });

        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            canvas: props.canvas,
        });

        this.camera = new THREE.PerspectiveCamera(65, props.width / props.height, 0.1, 1000);
        this.scene = new THREE.Scene();


        // Globe Geometry
        this.globeGeometry = new THREE.SphereGeometry(props.radius || this.RADIUS, 50, 50);
        this.globeMaterial = new THREE.MeshStandardMaterial({
            transparent: true,
            opacity: 1, // Keep the globe semi-transparent if needed
            roughness: 0.4, // Add roughness for realistic shading
            metalness: 0.5, // Slight metallic effect for the globe
        });

        this.globe = new THREE.Mesh(this.globeGeometry, this.globeMaterial);
        this.textureLoader = new THREE.TextureLoader();
    }

    public setup() {
        this.setUpRenderer();
        this.setUpTexture();
        this.setUpGlobe();
        this.setUpPulse();
        this.setUpLight();
        this.setUpControls();
    }

    private setUpRenderer() {
        // Set up rendering context
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        this.renderer.setPixelRatio(window.devicePixelRatio); // Handle high-DPI screens
        this.renderer.shadowMap.enabled = true; // Enable shadows
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Use soft shadows
    }

    private setUpTexture() {
        const imageUrl = earthAtNight;
        this.textureLoader.load(
            imageUrl,
            (texture) => {
                this.globeMaterial.map = texture;
                this.globeMaterial.needsUpdate = true; // Update material after texture is loaded

                // Adjust the texture's alignment
                texture.offset.set(0.7, 0); // Shift the texture horizontally to align with the coordinate system
                texture.repeat.set(1, 1); // Ensure the texture covers the entire globe
                texture.wrapS = THREE.RepeatWrapping; // Allow horizontal wrapping

                texture.wrapT = THREE.ClampToEdgeWrapping; // Prevent vertical wrapping
            },
            (progress) => {
                // Optional: Handle progress
                console.log(`Loading texture: ${Math.round((progress.loaded / progress.total) * 100)}%`);
            },
            (error) => {
                console.error('Error loading texture:', error);
            }
        );
    }

    private setUpGlobe() {
        // Globe
        this.globe.castShadow = true; // Globe casts shadow
        this.globe.receiveShadow = true; // Globe receives shadow

        if (this.options.showGlobe)
            this.globe.scale.set(0, 0, 0); // Set initial scale

        this.globe.visible = false
        this.scene.add(this.globe);
    }

    private setUpPulse() {
        this.pulseGeometry = new THREE.SphereGeometry(0.05, 16, 16);
        this.pulseMaterial = new THREE.MeshBasicMaterial({ color: this.options.pulseColor }); // Red color
        this.pulseMesh = new THREE.Mesh(this.pulseGeometry, this.pulseMaterial);

        // Initialize scaleDirection as a persistent variable
        let scaleDirection = 1; // 1 for growing, -1 for shrinking

        // Define the pulse animation logic
        this.handlePulseAnimation = () => {
            if (!this.pulseMesh) return;

            // Update the scale of the pulseMesh
            this.pulseMesh.scale.x += 0.01 * scaleDirection;
            this.pulseMesh.scale.y += 0.01 * scaleDirection;
            this.pulseMesh.scale.z += 0.01 * scaleDirection;

            // Reverse direction if the scale exceeds bounds
            if (this.pulseMesh.scale.x > 1.5 || this.pulseMesh.scale.x < 1) {
                scaleDirection *= -1; // Reverse direction
            }
        };

        this.originalPulsePosition = undefined;

        if (this.options.pulsePoint) {
            const { lat, lon } = this.options.pulsePoint;
            const latRad = THREE.MathUtils.degToRad(lat);
            const lonRad = THREE.MathUtils.degToRad(lon);

            const x = this.RADIUS * Math.cos(latRad) * Math.cos(lonRad);
            const y = this.RADIUS * Math.sin(latRad);
            const z = this.RADIUS * Math.cos(latRad) * Math.sin(lonRad);

            this.originalPulsePosition = new THREE.Vector3(x, y, z);

            this.pulseMesh.position.copy(this.originalPulsePosition);
            this.scene.add(this.pulseMesh);

            // Focus the camera on the pulse point
            this.camera.position.set(x * 2, y * 2, z * 2); // Position the camera at a distance from the pulse point
            this.camera.lookAt(this.originalPulsePosition); // Orient the camera to look at the pulse point
        }
    }

    private setUpLight() {
        // Lighting
        this.hemisphereLight = new THREE.HemisphereLight(
            this.options.backgroundColor || 0x000000, // Sky color
            0xffffff,
            10
        ); // Softer ambient light
        this.scene.add(this.hemisphereLight);

        this.directionalLight = new THREE.DirectionalLight(0xffffff, 6); // Stronger directional light
        this.directionalLight.position.set(5, 15, 15); // Position the light
        this.directionalLight.castShadow = true; // Enable shadows for the light
        this.directionalLight.shadow.mapSize.width = 2048; // Higher resolution for sharper shadows
        this.directionalLight.shadow.mapSize.height = 2048;
        this.directionalLight.shadow.camera.near = 0.5;
        this.directionalLight.shadow.camera.far = 50;

        // Configure shadow camera to cover the globe
        this.directionalLight.shadow.camera.left = -5;
        this.directionalLight.shadow.camera.right = 5;
        this.directionalLight.shadow.camera.top = 5;
        this.directionalLight.shadow.camera.bottom = -5;

        this.scene.add(this.directionalLight);
    }

    private setUpControls() {
        // Controls
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.enableZoom = false; // Disable zoom functionality
        this.camera.position.z = 5;
        controls.update();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        let rotationSpeed = this.options.rotationSpeed || this.DEFAULT_ROTATION_SPEED; // Default rotation speed

        // Event listener for mouse movement
        this.handleMouseMove = (event: MouseEvent) => {

            let targetScale = this.options.targetScale || 1; // Default target scale
            if (!this.canvas) return;

            const rect = this.canvas.getBoundingClientRect(); // Get canvas position and size
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; // Normalize mouse X relative to canvas
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1; // Normalize mouse Y relative to canvas

            raycaster.setFromCamera(mouse, this.camera);
            const intersects = raycaster.intersectObject(this.globe);

            if (intersects.length > 0) {
                this.updateOptions({
                    rotationSpeed: 0.001, // Slow down rotation when hovering
                    targetScale: 1.2, // Scale up the globe
                })
            } else {
                this.updateOptions({
                    rotationSpeed: rotationSpeed, // Slow down rotation when hovering
                    targetScale: targetScale, // Scale up the globe
                })
            }
        };

        window.addEventListener('mousemove', this.handleMouseMove);
    }

    private animate() {

        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));

        // Use the latest state in the animation loop
        this.updateState();

        // Render the scene
        this.renderer.render(this.scene, this.camera);
    }

    private updateState() {
        const options = this.state.get('options'); // Access the latest options

        const { mode, pulsePoint, rotationSpeed, showGlobe, targetScale } = options;

        this.globe.visible = true;
        if (mode === 'keepRotating') {
            this.globe.rotation.y += rotationSpeed;
            this.globe.scale.x = THREE.MathUtils.lerp(this.globe.scale.x, targetScale, 0.1);
            this.globe.scale.y = THREE.MathUtils.lerp(this.globe.scale.y, targetScale, 0.1);
            this.globe.scale.z = THREE.MathUtils.lerp(this.globe.scale.z, targetScale, 0.1);
        } else if (mode === 'rollToLocation') {
            if (!showGlobe) {

                if (this.pulseMesh) {
                    this.pulseMesh.visible = false
                }

                this.globe.scale.set(
                    THREE.MathUtils.lerp(this.globe.scale.x, 0, 0.1),
                    THREE.MathUtils.lerp(this.globe.scale.y, 0, 0.1),
                    THREE.MathUtils.lerp(this.globe.scale.z, 0, 0.1)
                );

                this.globe.rotation.y = THREE.MathUtils.lerp(this.globe.rotation.y, 0, 0.1);

                // Set opacity to 0
                this.globeMaterial.opacity = THREE.MathUtils.lerp(this.globeMaterial.opacity, 0, 0.1);
                this.globeMaterial.transparent = true; // Enable transparency for the material
                this.globeMaterial.needsUpdate = true; // Update material after opacity change
                // if (this.pulseMesh) this.pulseMesh.scale.set(0, 0, 0);
            } else {

                if (this.pulseMesh) {
                    this.pulseMesh.visible = true
                }

                this.globeMaterial.opacity = THREE.MathUtils.lerp(this.globeMaterial.opacity, 1, 0.1);
                this.globeMaterial.transparent = false; // Enable transparency for the material
                this.globeMaterial.needsUpdate = true; // Update material after opacity change

                const lonRad = THREE.MathUtils.degToRad(pulsePoint.lon) * 2.5;
                this.globe.rotation.y = THREE.MathUtils.lerp(this.globe.rotation.y, lonRad, 0.1);
                this.globe.scale.set(
                    THREE.MathUtils.lerp(this.globe.scale.x, targetScale, 0.1),
                    THREE.MathUtils.lerp(this.globe.scale.y, targetScale, 0.1),
                    THREE.MathUtils.lerp(this.globe.scale.z, targetScale, 0.1)
                );

            }
        }

        if (this.originalPulsePosition) {
            const scaledPosition = this.originalPulsePosition.clone().multiplyScalar(this.globe.scale.x);
            const rotationMatrix = new THREE.Matrix4().makeRotationY(this.globe.rotation.y);
            if (this.pulseMesh) this.pulseMesh.position.copy(scaledPosition.applyMatrix4(rotationMatrix));
        }

        // Call the pulse animation logic
        if (this.pulseMesh) {
            this.handlePulseAnimation();
        }
    }

    public updateOptions(newOptions: Partial<IGlobe['options']>) {
        // Merge new options into the existing state

        const currentOptions = this.state.get('options');
        this.state.set('options', { ...currentOptions, ...newOptions });
    }

    public render() {
        if (!this.animationFrameId) {
            this.animate();
        }
    }

    public destroy() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }

        // Dispose of geometries, materials, and textures
        this.globeGeometry.dispose();
        this.globeMaterial.dispose();

        if (this.pulseGeometry && this.pulseMaterial && this.pulseMesh) {
            this.pulseGeometry.dispose();
            this.pulseMaterial.dispose();
            this.scene.remove(this.pulseMesh);
        }


        // Remove objects from the scene
        this.scene.remove(this.globe);

        if (this.hemisphereLight)
            this.scene.remove(this.hemisphereLight);

        if (this.directionalLight)
            this.scene.remove(this.directionalLight);

        // Dispose of the renderer
        this.renderer.forceContextLoss(); // Explicitly lose the WebGL context
        this.renderer.dispose();

        // Remove event listeners
        window.removeEventListener('mousemove', this.handleMouseMove);
    }

}