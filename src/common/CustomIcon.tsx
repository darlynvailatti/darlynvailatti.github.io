import { Avatar } from '@mui/material';

export default function CustomIcon({ size = 50, src}: any) {
    return (
        <Avatar 
            src={src} 
            alt="Logo" 
            sx={{ 
                width: size, 
                height: size, 
                backgroundColor: "white",
            }} 
        />
    );
}