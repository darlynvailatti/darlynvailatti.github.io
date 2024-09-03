import { Card, Chip, Grid2, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import { CalendarMonth, PinDrop } from "@mui/icons-material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { useTheme } from "@emotion/react";
import {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { EDUCATION_CHAPTERS } from "../common/data";

export function Education() {
    const theme: any = useTheme();
    const isMdOrLg = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Stack spacing={2} textAlign={"left"}>

            <Typography variant="h5" fontWeight="bold">Education</Typography>
            <Timeline
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
                                    <Typography variant={isMdOrLg ? "body2" : "caption"}
                                        fontWeight={"bold"}>
                                        <Chip label={chapter.endDate} size="small" icon={<CalendarMonth />} />
                                    </Typography>
                                    <Typography
                                        variant={isMdOrLg ? "body2" : "caption"}
                                        fontWeight={"bold"}>
                                        <Chip label={chapter.startDate} size="small" icon={<CalendarMonth />} />
                                    </Typography>
                                </Grid2>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {isMdOrLg ? <TimelineDot>
                                    {chapter.icon}
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
                                        <Link href={chapter.website}>
                                            <Typography variant="h5" fontWeight={"bold"}>{chapter.institution}</Typography>
                                        </Link>
                                        <Grid2 container spacing={1}>
                                            <Grid2>
                                                <PinDrop sx={{ height: 20, width: 20 }} />
                                            </Grid2>
                                            <Grid2>
                                                <Typography variant="body2" fontWeight={"bold"}>{chapter.location}</Typography>
                                            </Grid2>
                                        </Grid2>
                                        <Typography variant="body1" fontWeight={"bold"}>{chapter.title}</Typography>

                                        <Grid2 container spacing={1}>
                                            {chapter.tags.map((tag, index) => (
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