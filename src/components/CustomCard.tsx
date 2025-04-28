// Create a custom card component from MUi
import { CardProps, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomPaper } from './CustomPaper';

export interface CustomCardProps extends CardProps {

}

export const HoverableCard = styled(Card)(({ theme }) => ({
}));

export function CustomCard({ ...props }: CustomCardProps) {
    return (
        <HoverableCard
            as={CustomPaper}
            {...props}>
            {props.children}
        </HoverableCard>
    );
}