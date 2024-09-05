import { Card, Chip, Grid2, Link, Stack, Typography, useMediaQuery } from "@mui/material";
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


export function Experience() {

    const theme: any = useTheme();
    const isMdOrLg = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack spacing={1} textAlign={"left"}>
            <Typography variant="h5" fontWeight="bold">Experience</Typography>
            <Timeline
                position="right"
                sx={{
                    padding: 0,
                    [`& .${timelineOppositeContentClasses.root}`]: {
                        flex: 0,
                    },
                }}>
                {EXPERIENCES.map((experience, index) => {
                    const description = isMdOrLg ? experience.description : experience.description.substring(0, 100) + "...";
                    return (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent sx={{
                                textAlign: 'right',
                                paddingLeft: 0,
                            }}>
                                <Grid2 container spacing={1}>

                                    <Chip
                                        label={
                                            <Typography variant={isMdOrLg ? "body2" : "caption"}
                                                fontWeight={"bold"}>
                                                {experience.endDate}
                                            </Typography>}
                                        size="small" icon={<CalendarMonth />}
                                    />


                                    <Chip label={
                                        <Typography
                                            variant={isMdOrLg ? "body2" : "caption"}
                                            fontWeight={"bold"}>
                                            {experience.startDate}
                                        </Typography>}
                                        size="small" icon={<CalendarMonth />}
                                    />

                                </Grid2>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {isMdOrLg ? <TimelineDot>
                                    {experience.icon}
                                </TimelineDot> : <TimelineDot />}

                                <TimelineConnector />

                            </TimelineSeparator>

                            <TimelineContent sx={{
                                paddingRight: 0,
                            }}>
                                <Card variant="outlined" sx={{
                                    padding: 2,
                                    textAlign: 'left',
                                    margin: 1,
                                    marginRight: 0,
                                }}>
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
                                            {description}
                                        </Typography>

                                        <Grid2 container spacing={1}>
                                            {experience.tags.map((tag, index) => (
                                                <Grid2 key={index}>
                                                    <Chip label={tag} />
                                                </Grid2>
                                            ))}
                                        </Grid2>
                                    </Stack>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>


        </Stack>
    );
}