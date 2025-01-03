import { Box, Card, CardContent, CardHeader, Chip, Divider, Grid2, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import { CalendarMonth, PinDrop } from "@mui/icons-material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { useTheme } from "@emotion/react";
import {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { EDUCATION_CHAPTERS } from "../common/data";
import { useMemo } from "react";

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
                            <Card variant="outlined" sx={{
                                padding: 2,
                                textAlign: 'left',
                                margin: 1,
                                marginRight: 0,
                            }}>
                                <Stack spacing={1}>
                                    <Link href={chapter.website} target="_blank" rel="noopener noreferrer">
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
    }, []);

    const TimelineViewMobile = useMemo(() => () => {
        return (<Stack>
            {EDUCATION_CHAPTERS.map((chapter, index) => {
                return (
                    <Card key={index} variant="outlined" sx={{ margin: 1 }}>
                        <CardHeader
                            avatar={chapter.icon}
                            title={<Link href={chapter.website} target="_blank" rel="noopener noreferrer">
                                <Typography variant="body1" fontWeight={"bold"}>{chapter.institution}</Typography>
                            </Link>} subheader={chapter.title} />

                        <Divider sx={{ marginLeft: -2, marginRight: -2 }} />

                        <CardContent>
                            <Stack spacing={2}>

                                <Grid2 container spacing={1}>

                                    <Chip label={
                                        <Typography
                                            variant={"caption"}
                                            fontWeight={"bold"}>
                                            {chapter.startDate}
                                        </Typography>}
                                        size="small" icon={<CalendarMonth />}
                                    />

                                    <Chip
                                        label={
                                            <Typography variant={"caption"}
                                                fontWeight={"bold"}>
                                                {chapter.endDate}
                                            </Typography>}
                                        size="small" icon={<CalendarMonth />}
                                    />
                                </Grid2>
                                <Box display={"flex"} alignItems={"center"}>
                                    <PinDrop sx={{ height: 20, width: 20 }} />
                                    <Typography variant="body2">{chapter.location}</Typography>
                                </Box>

                                <Grid2 container spacing={1}>
                                    {chapter.tags.map((tag, index) => (
                                        <Grid2 key={index}>
                                            <Chip label={tag} />
                                        </Grid2>
                                    ))}
                                </Grid2>
                            </Stack>
                        </CardContent>
                    </Card>
                )
            })}
        </Stack>)
    }, []);

    return (
        <Stack spacing={2} textAlign={"left"}>

            <Typography variant="h5" fontWeight="bold">Education</Typography>

            {isMobile ? <TimelineViewMobile /> : <TimelineView />}

        </Stack>
    );
}