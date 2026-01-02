// Create a custom card component from MUi
import { PaperProps, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

export interface CustomPaperProps extends PaperProps {
  hoverShadow?: string; // Add a prop for pre-calculated shadow
}

const HoverablePaper = styled(Paper)<{ hoverShadow?: string }>(({ theme, hoverShadow }) => ({
  willChange: 'box-shadow, transform',
  boxShadow: "none",
  transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
  '&:hover': {
    boxShadow: hoverShadow,
    transform: 'translateY(-2px)',
  },
}));

export function CustomPaper({ hoverShadow, ...props }: CustomPaperProps) {

  const theme = useTheme();
  // Calculate the shadow with a gradient color based on the theme
  const calculatedShadow = `0px 0px 10px 5px ${theme.palette.secondary.main}, 0px 0px 10px 0px ${theme.palette.secondary.main}`;
  return (
    <HoverablePaper
      hoverShadow={hoverShadow || calculatedShadow} // Pass the pre-calculated shadow
      {...props}>
      {props.children}
    </HoverablePaper>
  );
}