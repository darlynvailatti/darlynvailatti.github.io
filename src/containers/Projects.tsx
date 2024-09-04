import { Card, CardActionArea, CardContent, CardMedia, Divider, Grid2, Link, Stack, Typography } from "@mui/material";
import { PROJECTS } from "../common/data";
import { useMemo } from "react";
import { trackEvent } from "../analytics";

export default function Projects() {

    const trackOnClick = useMemo(() => (label: string) => {
        trackEvent({
            action: 'click',
            category: 'projects',
            label,
            value: 1
        })
    }, [])

    return (
        <Stack spacing={2} textAlign={"left"}>
            <Typography variant="h5" fontWeight="bold">Projects</Typography>

            <Grid2 container spacing={2} >
                {PROJECTS.map((project, index) => {

                    return <Grid2 key={index} size={{
                        xs: 12,
                        sm: 12,
                        md: 4,
                    }}>

                        <Link href={project.videoUrl} underline="none"  target="_blank" rel="noopener noreferrer" onClick={() => trackOnClick(`${project.title}`)}>
                            <Card variant="outlined" sx={{
                                minHeight: "100%",
                            }}>
                                <CardActionArea style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%",
                                }}>
                                    <CardMedia
                                        component="img"
                                        height="220"
                                        image={project.image}
                                        alt={project.title}
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "top",
                                        }}
                                    />
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Grid2 container spacing={2} justifyContent={"space-between"}>
                                                <Grid2>
                                                    <Typography variant="h6" fontWeight={"bold"}>{project.title}</Typography>
                                                </Grid2>
                                            </Grid2>
                                            <Typography variant="body2" dangerouslySetInnerHTML={{ __html: project.description }} />

                                            <Divider />
                                            <Grid2 container spacing={1}>
                                                {project.tags.map((tag, index) => (
                                                    <Grid2 key={index}>
                                                        {tag}
                                                    </Grid2>
                                                ))}

                                            </Grid2>
                                        </Stack>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid2>
                })}
            </Grid2>
        </Stack>
    );
}