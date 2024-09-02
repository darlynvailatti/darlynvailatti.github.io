import { Avatar } from '@mui/material';

export default function CustomIcon({ size = 40, src}: any) {
    return (
        <Avatar 
            src={src} 
            alt="Logo" 
            sx={{ 
                width: size, 
                height: size, 
                backgroundColor: "white",
                border: 1,
            }} 
        />
    );
}