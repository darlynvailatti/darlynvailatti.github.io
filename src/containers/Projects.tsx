import { Chip, Divider, Grid2, Link, Paper, Stack, Typography } from "@mui/material";
import { PROJECTS } from "../common/data";

export default function Projects() {
    return (
        <Stack spacing={2} textAlign={"left"}>
            <Typography variant="h5" fontWeight="bold">Projects</Typography>

            <Grid2 container spacing={2} >
                {PROJECTS.map((project, index) => {

                    return <Grid2 key={index} size={6}>

                        <Paper variant="outlined" sx={{
                            padding: 2,
                            display: 'flex',
                            height: '100%',
                        }}>
                            <Stack spacing={2}>
                                <Grid2 container spacing={2} justifyContent={"space-between"}>
                                    <Grid2>
                                        <Link href={project.videoUrl}>
                                            <Typography variant="h6" fontWeight={"bold"}>{project.title}</Typography>
                                        </Link>
                                    </Grid2>
                                </Grid2>
                                <Typography variant="body2" dangerouslySetInnerHTML={{ __html: project.description }} />

                                <Divider />
                                <Grid2 container spacing={1}>
                                    {project.tags.map((tag, index) => (
                                        <Grid2 key={index}>
                                            <Chip label={tag} />
                                        </Grid2>
                                    ))}

                                </Grid2>
                            </Stack>
                        </Paper>
                    </Grid2>
                })}
            </Grid2>
        </Stack>
    );
}