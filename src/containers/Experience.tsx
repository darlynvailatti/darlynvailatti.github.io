import { Box, CardContent, CardHeader, Chip, Divider, Grid2, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import { CalendarMonth, PinDrop } from "@mui/icons-material";
import { EXPERIENCES } from "../common/data";
import { TimelineContent } from "@mui/lab";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { useTheme } from "@emotion/react";
import { useMemo, useState } from "react";
import { CustomCard } from "../components/CustomCard";
import Globe from "./Globe";


function ExperienceCard(props: { experience: any }) {
    const [showGlobe, setShowGlobe] = useState<boolean>(false);
    const experience = useMemo(() => props.experience, [props.experience])

    return <CustomCard sx={{
        padding: 4,
        textAlign: 'left',
        margin: 1,
        marginRight: 0,
        position: 'relative',
    }}
        onMouseEnter={() => {
            setShowGlobe(true);
        }}
        onMouseLeave={() => {
            setShowGlobe(false);
        }}>

        {/* Globe */}

        <Box
            sx={{
                position: 'absolute',
                left: "-20%",
                zIndex: 999,
                borderRadius: 20,
            }}
        >
            <Globe
                mode={"rollToLocation"}
                pulsePoint={{
                    lat: experience.geoLocation.latitude,
                    lon: experience.geoLocation.longitude,
                }}
                width={250}
                height={250}
                showGlobe={showGlobe} />

        </Box>


        <Stack spacing={1}>
            <Link href={experience.website} target="_blank" rel="noopener noreferrer">
                <Typography variant="h5" fontWeight={"bold"}>{experience.company}</Typography>
            </Link>
            <Grid2 container spacing={1}>
                <Grid2>
                    <PinDrop sx={{ height: 20, width: 20 }} />
                </Grid2>
                <Grid2>
                    <Typography variant="body2" fontWeight={"bold"}>{experience.location}</Typography>
                </Grid2>
            </Grid2>
            <Typography variant="body1" fontWeight={"bold"}>{experience.title}</Typography>
            <Typography variant="body2">
                {experience.description}
            </Typography>

            <Grid2 container spacing={1}>
                {experience.tags.map((tag: any, index: number) => (
                    <Grid2 key={index}>
                        <Chip label={tag} />
                    </Grid2>
                ))}
            </Grid2>
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
                            <ExperienceCard key={index} experience={experience} />
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    }, []);

    const SmallTimelineView = useMemo(() => () => {
        return <Stack>
            {EXPERIENCES.map((experience, index) => {
                return (
                    <CustomCard
                        sx={{
                            margin: 1,
                        }}
                    >

                        <CardHeader avatar={experience.icon} title={experience.company} subheader={experience.title} />

                        <Divider />
                        <CardContent>
                            <Stack key={index} spacing={2}>
                                <Grid2 container spacing={1}>

                                    <Chip label={
                                        <Typography
                                            variant={"caption"}
                                            fontWeight={"bold"}>
                                            {experience.startDate}
                                        </Typography>}
                                        size="small" icon={<CalendarMonth />}
                                    />

                                    <Chip
                                        label={
                                            <Typography variant={"caption"}
                                                fontWeight={"bold"}>
                                                {experience.endDate}
                                            </Typography>}
                                        size="small" icon={<CalendarMonth />}
                                    />
                                </Grid2>
                                <Box display={"flex"} alignItems={"center"}>
                                    <PinDrop sx={{ height: 20, width: 20 }} />
                                    <Typography variant="body2">{experience.location}</Typography>
                                </Box>
                                <Divider />
                                <Typography variant="body2">{experience.description}</Typography>
                            </Stack>

                        </CardContent>
                    </CustomCard>
                )
            })}
        </Stack>
    }, []);

    return (
        <Stack spacing={1} textAlign={"left"}>
            <Typography variant="h5" fontWeight="bold">Experience</Typography>

            {isMobile ? <SmallTimelineView /> : <TimelineView />}

        </Stack>
    );
}