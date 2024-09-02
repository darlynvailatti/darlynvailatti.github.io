import { Card, Chip, Grid2, Link, Stack, Typography } from "@mui/material";
import { EDUCATION_CHAPTERS } from "../common/data";
import { CalendarMonth, PinDrop } from "@mui/icons-material";
import {Timeline, TimelineConnector, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

export function Education() {
    return (
        <Stack spacing={2} textAlign={"left"}>
            
            <Typography variant="h5" fontWeight="bold">Education</Typography>
            <Timeline sx={{
                padding: 0,
            }}>
                {EDUCATION_CHAPTERS.map((chapter, index) => {
                    return (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot>
                                    {chapter.icon}
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
                                        <Link href={chapter.website}>
                                            <Typography variant="h5" fontWeight={"bold"}>{chapter.institution}</Typography>
                                        </Link>
                                        <Typography variant="body1" fontWeight={"bold"}>{chapter.title}</Typography>
                                        {/* <Typography variant="body2">{chapter.}</Typography> */}

                                        <Grid2 container spacing={1}>
                                            <Grid2>
                                                <PinDrop sx={{ height: 20, width: 20 }} />
                                            </Grid2>
                                            <Grid2>
                                                <Typography variant="body2" fontWeight={"bold"}>{chapter.location}</Typography>
                                            </Grid2>
                                        </Grid2>

                                        <Grid2 container sx={{ display: 'flex', flexWrap: 'wrap', alignItems: "center" }} spacing={1}>
                                            <Grid2>
                                                <CalendarMonth sx={{ height: 20, width: 20 }} />
                                            </Grid2>
                                            <Grid2>
                                                <Typography variant="body2">{chapter.startDate} - {chapter.endDate}</Typography>
                                            </Grid2>
                                        </Grid2>

                                        <Grid2 container spacing={1}>
                                            {chapter.tags.map((tag, index) => (
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