import { useCallback, useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { TweenMax, Power2, Power3, Elastic } from 'gsap';
import { createNoise3D } from 'simplex-noise';


const width = 200;
const height = 170;
const noise3D = createNoise3D()

export default function BubbleAnimation() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mouse = useRef(new THREE.Vector2(0, 0));
    const spring = useRef({ scale: 1 });
    const rendererRef = useRef<THREE.WebGLRenderer>();
    const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
    const cameraRef = useRef<THREE.PerspectiveCamera>();
    const bubbleRef = useRef<THREE.Mesh>();
    const bubbleGeometryRef = useRef<THREE.SphereGeometry>();


    const setupLights = (scene: THREE.Scene) => {
        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, .5);

        const light2 = new THREE.DirectionalLight(0xfff150, 0.3);
        light2.position.set(-6, 3, 3);

        const light3 = new THREE.DirectionalLight(0xfff150, 1.4);
        light3.position.set(2, 1, 1);

        const shadowLight = new THREE.DirectionalLight(0xffffff, -0.4);
        // shadowLight.position.set(1, 1, 50);

        scene.add(hemisphereLight);
        scene.add(shadowLight);
        scene.add(light2);
        scene.add(light3);
    };

    const createBubble = (scene: THREE.Scene) => {
        // const width = canvasRef.current?.offsetWidth || 800;
        const vertex = width > 575 ? 80 : 40;
        const bubbleGeometry: any = new THREE.SphereGeometry(120, vertex, vertex);
        bubbleGeometryRef.current = bubbleGeometry;

        const bubbleMaterial = new THREE.MeshStandardMaterial({
            emissive: 0xbd4be3,
            emissiveIntensity: 0.8,
            roughness: 0.81,
            metalness: 0.11,
            side: THREE.FrontSide
        });

        const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
        bubble.castShadow = true;
        bubble.receiveShadow = true;
        scene.add(bubble);
        bubbleRef.current = bubble;
    }

    

    const map = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    };

    

    const updateVertices = useMemo(() => (time: number) => {
        const bubbleGeometry = bubbleGeometryRef.current;
        if (!bubbleGeometry) return;

        const positions = bubbleGeometry.attributes.position.array as Float32Array;
        const normals = bubbleGeometry.attributes.normal.array as Float32Array;

        const bubbleCenter = new THREE.Vector2(bubbleGeometry.boundingSphere?.center.x, bubbleGeometry.boundingSphere?.center.y);
        let dist = mouse.current.distanceTo(bubbleCenter)
        dist /= 100;

        if(dist > 1) dist = 1;

        for (let i = 0; i < positions.length; i += 3) {
            const vector = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
            const normal = new THREE.Vector3(normals[i], normals[i + 1], normals[i + 2]);
            
            vector.copy(normal as THREE.Vector3);

            const noise = noise3D(
                (vector.x * 0.7) + (time * 0.0005),
                (vector.y * 0.7) + (time * 0.0005),
                (vector.z * 0.7)
            );
            
            const ratio = (noise) * 0.3 * (dist + 0.1) + 0.9;
            vector.multiplyScalar(ratio);
            positions[i] = vector.x;
            positions[i + 1] = vector.y;
            positions[i + 2] = vector.z;
        }

        bubbleGeometry.attributes.position.needsUpdate = true;
    }, []);

    const render = useCallback((time: number) => {
        requestAnimationFrame(render);
        if (!rendererRef.current || !cameraRef.current || !bubbleRef.current) return;

        const width = canvasRef.current?.offsetWidth || 800;
        const height = canvasRef.current?.offsetHeight || 600;

        bubbleRef.current.rotation.y = -4 + map(mouse.current.x, 0, width, 0, 4);
        bubbleRef.current.rotation.z = 4 + map(mouse.current.y, 0, height, 0, -4);
        bubbleRef.current.scale.set(spring.current.scale, spring.current.scale, spring.current.scale);
        updateVertices(time);

        rendererRef.current.clear();
        rendererRef.current.render(sceneRef.current, cameraRef.current);
    }, [updateVertices]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });

        const scene = new THREE.Scene();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.setClearColor(0xebebeb, 0);
        renderer.shadowMap.enabled = true;

        // const aspectRatio = width / height;
        // const fieldOfView = 1500;
        // const nearPlane = 0.7;
        // const farPlane = 100;

        const camera = new THREE.PerspectiveCamera(
            // fieldOfView,
            // aspectRatio,
            // nearPlane,
            // farPlane
        );
        camera.position.set(0, 0, 3);
        scene.fog = new THREE.Fog(0x000000, 0.6, 20);

        rendererRef.current = renderer;
        sceneRef.current = scene;
        cameraRef.current = camera;

        setupLights(scene);
        createBubble(scene);

        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            canvas.style.width = '';
            canvas.style.height = '';
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
            const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
            const clientY = 'clientY' in e ? e.clientY : e.touches[0].clientY;

            TweenMax.to(mouse.current, 0.8, {
                x: clientX * 0.1 || 0,
                y: clientY * 0.1 || 0,
                ease: Power2.easeOut,
            });
        };

        const handleMouseDown = () => {
            TweenMax.to(spring.current, 0.7, {
                scale: 0.7,
                ease: Power3.easeOut,
            });
        };

        const handleMouseUp = () => {
            TweenMax.to(spring.current, 0.9, {
                scale: 1,
                ease: Elastic.easeOut,
            });
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchstart', handleMouseDown);
        window.addEventListener('touchend', handleMouseUp);

        requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchstart', handleMouseDown);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [render]);

    return <canvas id="bubble" ref={canvasRef}></canvas>
};
