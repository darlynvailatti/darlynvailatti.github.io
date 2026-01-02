import { Box, CardContent, CardHeader, Chip, Divider, Grid2, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import { CalendarMonth, PinDrop } from "@mui/icons-material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { useTheme } from "@emotion/react";
import {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { EDUCATION_CHAPTERS } from "../common/data";
import { useMemo, useState } from "react";
import { CustomCard } from "../components/CustomCard";
import GlobeComponent from "./GlobeComponent";


function EducationCard(props: { chapter: any }) {

    const [showGlobe, setShowGlobe] = useState<boolean>(false);
    const chapter = props.chapter;

    return <CustomCard
        sx={{
            padding: { xs: 2, sm: 2.5, md: 3 },
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
        }}
    >
        <Box
            sx={{
                position: 'absolute',
                top: -15,
                left: "80%",
                zIndex: 999,
                borderRadius: 20,
                transition: 'opacity 0.3s ease-in-out',
                opacity: showGlobe ? 1 : 0,
            }}
        >

            <GlobeComponent
                mode={"rollToLocation"}
                pulsePoint={{
                    lat: chapter.geoLocation.latitude,
                    lon: chapter.geoLocation.longitude,
                }}
                width={200}
                height={200}
                showGlobe={showGlobe} />

        </Box>
        <Stack spacing={2}>
            <Link 
                href={chapter.website} 
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
                    {chapter.institution}
                </Typography>
            </Link>
            <Grid2 container spacing={1} alignItems="center">
                <Grid2>
                    <PinDrop sx={{ height: 20, width: 20, color: 'text.secondary' }} />
                </Grid2>
                <Grid2>
                    <Typography variant="body2" fontWeight={"bold"} color="text.secondary">
                        {chapter.location}
                    </Typography>
                </Grid2>
            </Grid2>
            <Typography variant="body1" fontWeight={"bold"}>
                {chapter.title}
            </Typography>

            <Grid2 container spacing={1}>
                {chapter.tags.map((tag: any, index: number) => (
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
        </Stack>
    </CustomCard>
}

export function Education() {
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
            {EDUCATION_CHAPTERS.map((chapter, index) => {
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
                                            {chapter.endDate}
                                        </Typography>
                                    }
                                    size="small"
                                    icon={<CalendarMonth />}
                                />


                                <Chip
                                    label={
                                        <Typography
                                            variant={"caption"}
                                            fontWeight={"bold"}>
                                            {chapter.startDate}
                                        </Typography>
                                    }
                                    size="small" icon={<CalendarMonth />}
                                />

                            </Grid2>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                                {chapter.icon}
                            </TimelineDot>

                            <TimelineConnector />

                        </TimelineSeparator>

                        <TimelineContent sx={{
                            paddingRight: 0,
                        }}>
                            <EducationCard chapter={chapter} />

                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    }, []);

    const TimelineViewMobile = useMemo(() => () => {
        return (<Stack spacing={2}>
            {EDUCATION_CHAPTERS.map((chapter, index) => {
                return (
                    <CustomCard key={index} sx={{ margin: 0 }}>
                        <CardHeader
                            avatar={chapter.icon}
                            title={
                                <Link 
                                    href={chapter.website} 
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
                                    <Typography variant="body1" fontWeight={"bold"}>
                                        {chapter.institution}
                                    </Typography>
                                </Link>
                            } 
                            subheader={chapter.title} 
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
                                                {chapter.startDate}
                                            </Typography>}
                                        size="small" 
                                        icon={<CalendarMonth />}
                                    />

                                    <Chip
                                        label={
                                            <Typography variant={"caption"}
                                                fontWeight={"bold"}>
                                                {chapter.endDate}
                                            </Typography>}
                                        size="small" 
                                        icon={<CalendarMonth />}
                                    />
                                </Grid2>
                                <Box display={"flex"} alignItems={"center"}>
                                    <PinDrop sx={{ height: 20, width: 20, color: 'text.secondary', mr: 1 }} />
                                    <Typography variant="body2" color="text.secondary">
                                        {chapter.location}
                                    </Typography>
                                </Box>

                                <Grid2 container spacing={1}>
                                    {chapter.tags.map((tag, index) => (
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
                            </Stack>
                        </CardContent>
                    </CustomCard>
                )
            })}
        </Stack>)
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
                Education
            </Typography>

            {isMobile ? <TimelineViewMobile /> : <TimelineView />}

        </Stack>
    );
}