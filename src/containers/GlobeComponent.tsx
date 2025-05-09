import { useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Globe } from '../common/globe';
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

const WIDTH = 250; // Default width
const HEIGHT = 250; // Default height

const GlobeComponent = (props: GlobeProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [globe, setGlobe] = useState<Globe>();
    const theme = useTheme();

    useEffect(() => {
        // Initialize the canvas and renderer
        const canvas = canvasRef.current;
        if (!canvas) return;

        if (!globe) {
            const globe = new Globe({
                canvas: canvas,
                height: props.height || HEIGHT,
                width: props.width || WIDTH,
                radius: 2,
                options: {
                    mode: props.mode,
                    pulsePoint: props.pulsePoint || { lat: 0, lon: 0 },
                    rotationSpeed: props.rotationSpeed || 0.001,
                    pulseColor: props.pulseColor || theme.palette.secondary.main,
                    showGlobe: props.showGlobe || true,
                    backgroundColor: theme.palette.background.default,
                }
            })
            setGlobe(globe)
        } else {
            globe.updateOptions({
                mode: props.mode,
                pulsePoint: props.pulsePoint || { lat: 0, lon: 0 },
                rotationSpeed: props.rotationSpeed || 0.001,
                pulseColor: props.pulseColor || theme.palette.secondary.main,
                showGlobe: props.showGlobe || false,
                backgroundColor: theme.palette.background.default,
            })
        }

    }, [props, theme, globe]);

    useEffect(() => {
        if (!globe) return;
        globe.setup()
        globe.render()
    }, [globe])


    return <canvas ref={canvasRef} style={{ display: 'block', width: WIDTH, height: HEIGHT }} />;
};

export default GlobeComponent;
