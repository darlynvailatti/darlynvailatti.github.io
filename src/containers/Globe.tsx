import { useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import earthAtNight from '../assets/images/earth-at-night.jpg';
// import earthAtDay from '../assets/images/earth-at-day.png';

type PulsePoint = {
    lat: number; // Latitude in degrees
    lon: number; // Longitude in degrees
};

export interface GlobeProps {
    mode: 'rollToLocation' | 'keepRotating'; // Mode of the globe
    pulsePoint?: PulsePoint; // Optional pulse point
    width?: number; // Optional width
    height?: number; // Optional height
    rotationSpeed?: number; // Optional rotation speed
    pulseColor?: string; // Optional pulse color
    showGlobe?: boolean; // Optional flag to show the globe
}

const RADIUS = 2; // Radius of the globe
const WIDTH = 250; // Default width
const HEIGHT = 250; // Default height
const DEFAULT_ROTATION_SPEED = 0.01; // Default rotation speed

const Globe = (props: GlobeProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const theme = useTheme();
    const [renderer, setRenederer] = useState<THREE.WebGLRenderer | null>(null)
    const [camera, setCamera] = useState<THREE.PerspectiveCamera | null>(null)
    const [scene, setScene] = useState<THREE.Scene | null>(null)

    useEffect(() => {
        // Initialize the canvas and renderer
        const canvas = canvasRef.current;
        if (!canvas) return;
        const width = props.width || WIDTH; // Default width
        const height = props.height || HEIGHT; // Default height
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); // Enable alpha for transparency
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio); // Handle high-DPI screens
        renderer.shadowMap.enabled = true; // Enable shadows
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Use soft shadows
        setRenederer(renderer); // Store the renderer in state


        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);

        setCamera(camera); // Store the camera in state
        setScene(scene); // Store the scene in state

    }, [props.width, props.height]);

    useEffect(() => {
        
    }, [props])

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !renderer || !scene || !camera) return;

        // Globe Geometry
        const globeGeometry = new THREE.SphereGeometry(RADIUS, 50, 50);
        const globeMaterial = new THREE.MeshStandardMaterial({
            transparent: true,
            opacity: 1, // Keep the globe semi-transparent if needed
            roughness: 0.4, // Add roughness for realistic shading
            metalness: 0.5, // Slight metallic effect for the globe
        });

        const textureLoader = new THREE.TextureLoader();

        const imageUrl = earthAtNight;
        textureLoader.load(
            imageUrl,
            (texture) => {
                globeMaterial.map = texture;
                globeMaterial.needsUpdate = true; // Update material after texture is loaded

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

        // Globe
        const globe = new THREE.Mesh(globeGeometry, globeMaterial);
        globe.castShadow = true; // Globe casts shadow
        globe.receiveShadow = true; // Globe receives shadow

        if (props.showGlobe) 
            globe.scale.set(0, 0, 0); // Set initial scale

        globe.visible = false
        scene.add(globe);

        const pulseGeometry = new THREE.SphereGeometry(0.05, 16, 16);
        const pulseMaterial = new THREE.MeshBasicMaterial({ color: props.pulseColor || theme.palette.secondary.main }); // Red color
        const pulseMesh = new THREE.Mesh(pulseGeometry, pulseMaterial);

        // Pulse Point
        let scaleDirection = 1; // 1 for growing, -1 for shrinking
        const pulseAnimate = () => {
            pulseMesh.scale.x += 0.09 * scaleDirection;
            pulseMesh.scale.y += 0.09 * scaleDirection;
            pulseMesh.scale.z += 0.09 * scaleDirection;

            if (pulseMesh.scale.x > 1.5 || pulseMesh.scale.x < 1) {
                scaleDirection *= -1; // Reverse direction
            }
        };

        let originalPulsePosition: THREE.Vector3 | null = null;

        if (props.pulsePoint) {
            const { lat, lon } = props.pulsePoint;
            const latRad = THREE.MathUtils.degToRad(lat);
            const lonRad = THREE.MathUtils.degToRad(lon);

            const x = RADIUS * Math.cos(latRad) * Math.cos(lonRad);
            const y = RADIUS * Math.sin(latRad);
            const z = RADIUS * Math.cos(latRad) * Math.sin(lonRad);

            originalPulsePosition = new THREE.Vector3(x, y, z);

            pulseMesh.position.copy(originalPulsePosition);
            scene.add(pulseMesh);

            // Focus the camera on the pulse point
            camera.position.set(x * 2, y * 2, z * 2); // Position the camera at a distance from the pulse point
            camera.lookAt(originalPulsePosition); // Orient the camera to look at the pulse point
        }

        // Lighting
        const hemisphereLight = new THREE.HemisphereLight(
            theme.palette.primary.main,
            0xffffff,
            10
        ); // Softer ambient light
        scene.add(hemisphereLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 6); // Stronger directional light
        directionalLight.position.set(5, 15, 15); // Position the light
        directionalLight.castShadow = true; // Enable shadows for the light
        directionalLight.shadow.mapSize.width = 2048; // Higher resolution for sharper shadows
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;

        // Configure shadow camera to cover the globe
        directionalLight.shadow.camera.left = -5;
        directionalLight.shadow.camera.right = 5;
        directionalLight.shadow.camera.top = 5;
        directionalLight.shadow.camera.bottom = -5;

        scene.add(directionalLight);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false; // Disable zoom functionality
        camera.position.z = 5;
        controls.update();

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        let targetScale = 1; // Default scale
        let rotationSpeed = props.rotationSpeed || DEFAULT_ROTATION_SPEED; // Default rotation speed

        // Event listener for mouse movement
        const handleMouseMove = (event: MouseEvent) => {
            if (!canvas) return;

            const rect = canvas.getBoundingClientRect(); // Get canvas position and size
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1; // Normalize mouse X relative to canvas
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1; // Normalize mouse Y relative to canvas

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(globe);

            if (intersects.length > 0) {
                rotationSpeed = 0.001; // Slow down rotation when hovering
                targetScale = 1.2; // Scale up the globe
            } else {
                targetScale = 1; // Reset the scale
                rotationSpeed = props.rotationSpeed || DEFAULT_ROTATION_SPEED; // Reset rotation speed
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation Loop
        const animate = () => {

            requestAnimationFrame(animate);

            if (props.mode === 'keepRotating' && props.pulsePoint) {
                // Rotate the globe
                globe.visible = true
                globe.rotation.y += rotationSpeed;
                // Smoothly interpolate the globe's scale
                globe.scale.x = THREE.MathUtils.lerp(globe.scale.x, targetScale, 0.1);
                globe.scale.y = THREE.MathUtils.lerp(globe.scale.y, targetScale, 0.1);
                globe.scale.z = THREE.MathUtils.lerp(globe.scale.z, targetScale, 0.1);
            } else if (props.mode === 'rollToLocation' && props.pulsePoint) {

                globe.visible = true
                globe.scale.x = THREE.MathUtils.lerp(globe.scale.x, 1, 0.1);
                globe.scale.y = THREE.MathUtils.lerp(globe.scale.y, 1, 0.1);
                globe.scale.z = THREE.MathUtils.lerp(globe.scale.z, 1, 0.1);

                // Rotate the globe to the pulse point
                if (originalPulsePosition) {
                    // Rotate the globe to the pulse point
                    const lonRad = THREE.MathUtils.degToRad(props.pulsePoint.lon) * 2.5;
                    globe.rotation.y = THREE.MathUtils.lerp(globe.rotation.y, lonRad, 0.09);

                    if (!props.showGlobe){

                        // Make all objects invisible, but smoothly
                        globe.scale.x = THREE.MathUtils.lerp(globe.scale.x, 0, 0.1);
                        globe.scale.y = THREE.MathUtils.lerp(globe.scale.y, 0, 0.1);
                        globe.scale.z = THREE.MathUtils.lerp(globe.scale.z, 0, 0.1);
                        globe.material.opacity = THREE.MathUtils.lerp(globe.material.opacity, 0, 0.1);
                        pulseMesh.scale.x = THREE.MathUtils.lerp(pulseMesh.scale.x, 0, 0.1);
                        pulseMesh.scale.y = THREE.MathUtils.lerp(pulseMesh.scale.y, 0, 0.1);
                        pulseMesh.scale.z = THREE.MathUtils.lerp(pulseMesh.scale.z, 0, 0.1);
                        pulseMesh.material.opacity = THREE.MathUtils.lerp(pulseMesh.material.opacity, 0, 0.1);
                        // globe.visible = false;
                        // pulseMesh.visible = false;
                    }   
                }
            }

            // Update the pulse point's position and scale to match the globe
            if (originalPulsePosition) {
                const scaledPosition = originalPulsePosition.clone().multiplyScalar(globe.scale.x); // Scale the position
                const rotationMatrix = new THREE.Matrix4().makeRotationY(globe.rotation.y);
                pulseMesh.position.copy(scaledPosition.applyMatrix4(rotationMatrix));
            }

            // Keep pulsing the pulse point
            pulseAnimate();

            renderer.render(scene, camera);
        };
        animate();



        // Cleanup
        return () => {
            // Dispose of geometries, materials, and textures
            globeGeometry.dispose();
            globeMaterial.dispose();
            pulseGeometry.dispose();
            pulseMaterial.dispose();

            // Remove objects from the scene
            scene.remove(globe);
            scene.remove(pulseMesh);
            scene.remove(hemisphereLight);
            scene.remove(directionalLight);

            // Dispose of the renderer
            // renderer.forceContextLoss(); // Explicitly lose the WebGL context
            renderer.dispose();

            // Remove event listeners
            window.removeEventListener('mousemove', handleMouseMove);


        };
    }, [renderer, camera, scene, props, theme]);


    return <canvas ref={canvasRef} style={{ display: 'block', width: WIDTH, height: HEIGHT }} />;
};

export default Globe;
