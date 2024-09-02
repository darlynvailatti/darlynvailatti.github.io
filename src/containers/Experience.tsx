import { Card, Chip, Grid2, Link, Stack, Typography } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { CalendarMonth, PinDrop } from "@mui/icons-material";
import { EXPERIENCES } from "../common/data";


export function Experience() {
    return (
        <Stack spacing={1} textAlign={"left"}>
            <Typography variant="h5" fontWeight="bold">Experience</Typography>

            <Timeline sx={{
                padding: 0,
            }}>
                {EXPERIENCES.map((experience, index) => {
                    return (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot>
                                    {experience.icon}
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineOppositeContent sx={{
                                paddingRight: 0,
                            }}>
                                <Card variant="outlined" sx={{
                                    padding: 2,
                                    textAlign: 'left',
                                    margin: 1,
                                    marginRight: 0,
                                }}>
                                    <Stack spacing={1}>
                                        <Link href={experience.website}>
                                            <Typography variant="h5" fontWeight={"bold"}>{experience.company}</Typography>
                                        </Link>
                                        <Typography variant="body1" fontWeight={"bold"}>{experience.title}</Typography>
                                        <Typography variant="body2">{experience.description}</Typography>

                                        <Grid2 container spacing={1}>
                                            <Grid2>
                                                <PinDrop sx={{ height: 20, width: 20 }} />
                                            </Grid2>
                                            <Grid2>
                                                <Typography variant="body2" fontWeight={"bold"}>{experience.location}</Typography>
                                            </Grid2>
                                        </Grid2>

                                        <Grid2 container sx={{ display: 'flex', flexWrap: 'wrap', alignItems: "center" }} spacing={1}>
                                            <Grid2>
                                                <CalendarMonth sx={{ height: 20, width: 20 }} />
                                            </Grid2>
                                            <Grid2>
                                                <Typography variant="body2">{experience.startDate} - {experience.endDate}</Typography>
                                            </Grid2>
                                        </Grid2>

                                        <Grid2 container spacing={1}>
                                            {experience.tags.map((tag, index) => (
                                                <Grid2 key={index}>
                                                    <Chip label={tag} />
                                                </Grid2>
                                            ))}
                                        </Grid2>
                                    </Stack>
                                </Card>
                            </TimelineOppositeContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>


        </Stack>
    );
}