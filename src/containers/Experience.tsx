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