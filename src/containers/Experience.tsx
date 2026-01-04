import { Box, Button, CardContent, CardHeader, Chip, Divider, Grid2, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import { CalendarMonth, PinDrop, ExpandMore, ExpandLess } from "@mui/icons-material";
import { EXPERIENCES } from "../common/data";
import { TimelineContent } from "@mui/lab";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { useTheme } from "@emotion/react";
import { useMemo, useState } from "react";
import { CustomCard } from "../components/CustomCard";
import GlobeComponent from "./GlobeComponent";
import ReactMarkdown from 'react-markdown';

function calculateDuration(startDate: string, endDate: string): { value: number; unit: string } {
    const parseDate = (dateStr: string): Date => {
        if (dateStr === "Present") {
            return new Date();
        }
        const [month, year] = dateStr.split('/');
        return new Date(parseInt(year), parseInt(month) - 1, 1);
    };

    const start = parseDate(startDate);
    const end = parseDate(endDate);
    
    const monthsDiff = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    
    if (monthsDiff < 12) {
        return { value: monthsDiff, unit: 'months' };
    } else {
        const years = monthsDiff / 12;
        return { value: Math.round(years * 10) / 10, unit: 'years' };
    }
}

function ExperienceDuration(props: { startDate: string; endDate: string; variant?: 'mobile' | 'desktop' }) {
    const { startDate, endDate, variant = 'desktop' } = props;
    const duration = calculateDuration(startDate, endDate);

    const isMobile = variant === 'mobile';

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: isMobile ? 'center' : 'flex-start',
                position: 'absolute',
                top: 0,
                right: 0,
                pointerEvents: 'none',
            }}
        >
            <Typography
                component="span"
                sx={{
                    fontSize: isMobile 
                        ? { xs: '2rem', sm: '2.5rem', md: '3rem' }
                        : { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'secondary.main',
                    letterSpacing: '-0.02em',
                }}
            >
                {duration.value}
            </Typography>
            <Typography
                variant="caption"
                sx={{
                    fontSize: isMobile 
                        ? { xs: '0.65rem', sm: '0.75rem' }
                        : { xs: '0.7rem', sm: '0.8rem' },
                    fontWeight: 600,
                    color: isMobile ? 'text.primary' : 'text.secondary',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    mt: 0.25,
                }}
            >
                {duration.unit}
            </Typography>
        </Box>
    );
}


function ExpandableExperienceCard(props: { experience: any }) {
    const [expanded, setExpanded] = useState<boolean>(false);
    const experience = props.experience;
    const MAX_LENGTH = 150;
    const shouldTruncate = experience.description.length > MAX_LENGTH;
    const displayText = shouldTruncate && !expanded 
        ? experience.description.substring(0, MAX_LENGTH) + '...'
        : experience.description;

    return (
        <CustomCard
            sx={{
                margin: 0,
                transition: 'all 0.3s ease-in-out',
            }}
        >
            <CardHeader 
                avatar={experience.icon} 
                title={
                    <Box sx={{ position: 'relative', pr: { xs: 8, sm: 10 } }}>
                        <Link 
                            href={experience.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            sx={{
                                textDecoration: 'none',
                                color: 'primary.main',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }}
                        >
                            {experience.company}
                        </Link>
                        <ExperienceDuration 
                            startDate={experience.startDate} 
                            endDate={experience.endDate} 
                            variant="mobile"
                        />
                    </Box>
                } 
                subheader={experience.title}
            />

            <Divider sx={{ opacity: 0.3 }} />
            <CardContent>
                <Stack spacing={2}>
                    <Grid2 container spacing={1}>
                        <Chip 
                            label={
                                <Typography
                                    variant={"caption"}
                                    fontWeight={"bold"}>
                                    {experience.startDate}
                                </Typography>}
                            size="small" 
                            icon={<CalendarMonth />}
                        />
                        <Chip
                            label={
                                <Typography variant={"caption"}
                                    fontWeight={"bold"}>
                                    {experience.endDate}
                                </Typography>}
                            size="small" 
                            icon={<CalendarMonth />}
                        />
                    </Grid2>
                    <Box display={"flex"} alignItems={"center"}>
                        <PinDrop sx={{ height: 20, width: 20, color: 'text.secondary', mr: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                            {experience.location}
                        </Typography>
                    </Box>
                    <Divider sx={{ opacity: 0.3 }} />
                    <Typography 
                        variant="body2"
                        component="div"
                        sx={{
                            lineHeight: 1.7,
                            color: 'text.secondary',
                        }}
                    >
                        <ReactMarkdown>{displayText}</ReactMarkdown>
                    </Typography>
            {shouldTruncate && (
                <Button
                    onClick={() => setExpanded(!expanded)}
                    endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
                    sx={{
                        textTransform: 'none',
                        color: 'secondary.main',
                        padding: 0,
                        minWidth: 'auto',
                        alignSelf: 'flex-start',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {expanded ? 'Show less' : 'Read more'}
                </Button>
            )}
            {experience.skills && experience.skills.length > 0 && (
                <>
                    <Divider sx={{ opacity: 0.3 }} />
                    <Grid2 container spacing={1.5}>
                        {experience.skills.map((skill: any, index: number) => {
                            const IconComponent = skill.component;
                            return (
                                <Grid2 key={index}>
                                    <Chip 
                                        label={skill.name}
                                        icon={<IconComponent size={20} />}
                                        size="small"
                                    />
                                </Grid2>
                            );
                        })}
                    </Grid2>
                </>
            )}
        </Stack>
    </CardContent>
</CustomCard>
    );
}

function ExperienceCard(props: { experience: any; isMobile?: boolean }) {
    const [showGlobe, setShowGlobe] = useState<boolean>(false);
    const [expanded, setExpanded] = useState<boolean>(false);
    const experience = useMemo(() => props.experience, [props.experience]);
    const isMobile = props.isMobile || false;
    const MAX_LENGTH = 150;
    const shouldTruncate = isMobile && experience.description.length > MAX_LENGTH;
    const displayText = shouldTruncate && !expanded 
        ? experience.description.substring(0, MAX_LENGTH) + '...'
        : experience.description;

    return <CustomCard sx={{
        padding: { xs: 2, sm: 3, md: 4 },
        textAlign: 'left',
        margin: 1,
        marginRight: 0,
        position: 'relative',
        transition: 'all 0.3s ease-in-out',
    }}
        onMouseEnter={() => {
            setShowGlobe(true);
        }}
        onMouseLeave={() => {
            setShowGlobe(false);
        }}>

        <Box
            sx={{
                position: 'absolute',
                left: "-200px",
                zIndex: 999,
                borderRadius: 20,
                transition: 'opacity 0.3s ease-in-out',
                opacity: showGlobe ? 1 : 0,
            }}
        >
            <GlobeComponent
                mode={"rollToLocation"}
                pulsePoint={{
                    lat: experience.geoLocation.latitude,
                    lon: experience.geoLocation.longitude,
                }}
                width={250}
                height={250}
                showGlobe={showGlobe} />

        </Box>


        <Stack spacing={2}>
            <Box sx={{ position: 'relative', pr: { xs: 12, sm: 14, md: 16 } }}>
                <Link 
                    href={experience.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    <Typography 
                        variant="h5" 
                        fontWeight={"bold"}
                        sx={{
                            color: 'primary.main',
                            transition: 'color 0.3s ease-in-out',
                            '&:hover': {
                                color: 'secondary.main',
                            },
                        }}
                    >
                        {experience.company}
                    </Typography>
                </Link>
                <ExperienceDuration 
                    startDate={experience.startDate} 
                    endDate={experience.endDate} 
                    variant="desktop"
                />
            </Box>
            <Grid2 container spacing={1} alignItems="center">
                <Grid2>
                    <PinDrop sx={{ height: 20, width: 20, color: 'text.secondary' }} />
                </Grid2>
                <Grid2>
                    <Typography variant="body2" fontWeight={"bold"} color="text.secondary">
                        {experience.location}
                    </Typography>
                </Grid2>
            </Grid2>
            <Typography variant="body1" fontWeight={"bold"}>
                {experience.title}
            </Typography>
            <Typography 
                variant="body2"
                component="div"
                sx={{
                    lineHeight: 1.7,
                    color: 'text.secondary',
                }}
            >
                <ReactMarkdown>{displayText}</ReactMarkdown>
            </Typography>
            {shouldTruncate && (
                <Button
                    onClick={() => setExpanded(!expanded)}
                    endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
                    sx={{
                        textTransform: 'none',
                        color: 'secondary.main',
                        padding: 0,
                        minWidth: 'auto',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    {expanded ? 'Show less' : 'Read more'}
                </Button>
            )}

            {experience.skills && experience.skills.length > 0 && (
                <>
                    <Divider sx={{ opacity: 0.3 }} />
                    <Grid2 container spacing={1.5}>
                        {experience.skills.map((skill: any, index: number) => {
                            const IconComponent = skill.component;
                            return (
                                <Grid2 key={index}>
                                    <Chip 
                                        label={skill.name}
                                        icon={<IconComponent size={20} />}
                                        size="small"
                                    />
                                </Grid2>
                            );
                        })}
                    </Grid2>
                </>
            )}

            {experience.tags.length > 0 && (
                <Grid2 container spacing={1}>
                    {experience.tags.map((tag: any, index: number) => (
                        <Grid2 key={index}>
                            <Chip 
                                label={tag} 
                                size="small"
                                sx={{
                                    transition: 'transform 0.2s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            />
                        </Grid2>
                    ))}
                </Grid2>
            )}
        </Stack>
    </CustomCard>
}

export function Experience() {

    const theme: any = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    const TimelineView = useMemo(() => () => {
        return <Timeline
            position="right"
            sx={{
                padding: 0,
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0,
                },
            }}>
            {EXPERIENCES.map((experience, index) => {
                return (
                    <TimelineItem key={index}>

                        <TimelineOppositeContent sx={{
                            textAlign: 'right',
                            paddingLeft: 0,
                        }}>
                            <Grid2 container spacing={1}>

                                <Chip
                                    label={
                                        <Typography variant={"caption"}
                                            fontWeight={"bold"}>
                                            {experience.endDate}
                                        </Typography>}
                                    size="small" icon={<CalendarMonth />}
                                />


                                <Chip label={
                                    <Typography
                                        variant={"caption"}
                                        fontWeight={"bold"}>
                                        {experience.startDate}
                                    </Typography>}
                                    size="small" icon={<CalendarMonth />}
                                />

                            </Grid2>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                {experience.icon}
                            </TimelineDot>

                            <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent sx={{
                            paddingRight: 0,
                        }}>
                            <ExperienceCard key={index} experience={experience} isMobile={false} />
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    }, []);

    const SmallTimelineView = useMemo(() => () => {
        return <Stack spacing={2}>
            {EXPERIENCES.map((experience, index) => {
                return (
                    <ExpandableExperienceCard 
                        key={index} 
                        experience={experience} 
                    />
                )
            })}
        </Stack>
    }, []);

    return (
        <Stack spacing={{ xs: 3, sm: 4 }} textAlign={"left"}>
            <Typography 
                variant="h4" 
                fontWeight="bold"
                sx={{
                    marginBottom: { xs: 1, sm: 2 },
                }}
            >
                Experience
            </Typography>

            {isMobile ? <SmallTimelineView /> : <TimelineView />}

        </Stack>
    );
}