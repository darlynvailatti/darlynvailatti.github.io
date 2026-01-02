import { Button, CardContent, CardMedia, Divider, Grid2, Link, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { PROJECTS } from "../common/data";
import { useMemo, useState } from "react";
import { trackEvent } from "../analytics";
import { CustomCard } from "../components/CustomCard";

function ProjectCard({ project, index, trackOnClick }: { project: any; index: number; trackOnClick: (label: string) => void }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [expanded, setExpanded] = useState<boolean>(false);
    const MAX_LENGTH = 100;
    const descriptionText = project.description.replace(/<[^>]*>/g, '');
    const shouldTruncate = isMobile && descriptionText.length > MAX_LENGTH;

    return (
        <Grid2 key={index} size={{
            xs: 12,
            sm: 12,
            md: PROJECTS.length > 1 ? 4 : 3,
        }}>
            <Link 
                href={project.videoUrl} 
                underline="none" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => trackOnClick(`${project.title}`)}
                sx={{
                    display: 'block',
                    height: '100%',
                    textDecoration: 'none',
                }}
            >
                <CustomCard sx={{
                    minHeight: "100%",
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image={project.image}
                        alt={project.title}
                        sx={{
                            borderTopLeftRadius: theme.shape.borderRadius,
                            borderTopRightRadius: theme.shape.borderRadius,
                            objectFit: "cover",
                            objectPosition: "top",
                            transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    />
                    <CardContent sx={{ 
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        padding: { xs: 2, sm: 2.5 },
                    }}>
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                            <Grid2 container spacing={2} justifyContent={"space-between"}>
                                <Grid2>
                                    <Typography 
                                        variant="h6" 
                                        fontWeight={"bold"}
                                        sx={{
                                            color: 'primary.main',
                                        }}
                                    >
                                        {project.title}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                            {shouldTruncate && !expanded ? (
                                <>
                                    <Typography 
                                        variant="body2" 
                                        dangerouslySetInnerHTML={{ __html: project.description }}
                                        sx={{
                                            lineHeight: 1.7,
                                            color: 'text.secondary',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                        }}
                                    />
                                    <Button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setExpanded(!expanded);
                                        }}
                                        endIcon={<ExpandMore />}
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
                                        Read more
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Typography 
                                        variant="body2" 
                                        dangerouslySetInnerHTML={{ __html: project.description }}
                                        sx={{
                                            lineHeight: 1.7,
                                            color: 'text.secondary',
                                            flexGrow: 1,
                                        }}
                                    />
                                    {shouldTruncate && (
                                        <Button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setExpanded(!expanded);
                                            }}
                                            endIcon={<ExpandLess />}
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
                                            Show less
                                        </Button>
                                    )}
                                </>
                            )}

                            <Divider sx={{ opacity: 0.3 }} />
                            <Grid2 container spacing={1}>
                                {project.tags.map((tag: any, index: number) => (
                                    <Grid2 key={index}>
                                        {tag}
                                    </Grid2>
                                ))}
                            </Grid2>
                        </Stack>
                    </CardContent>
                </CustomCard>
            </Link>
        </Grid2>
    );
}

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
        <Stack spacing={{ xs: 3, sm: 4 }} textAlign={"left"}>
            <Typography 
                variant="h4" 
                fontWeight="bold"
                sx={{
                    marginBottom: { xs: 1, sm: 2 },
                }}
            >
                Projects
            </Typography>

            <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }} >
                {PROJECTS.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        index={index} 
                        trackOnClick={trackOnClick}
                    />
                ))}
            </Grid2>
        </Stack>
    );
}