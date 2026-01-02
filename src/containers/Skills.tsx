import { Button, Chip, Divider, Grid2, Stack, Typography, useMediaQuery } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { SKILLS } from "../common/data";
import { CustomPaper } from "../components/CustomPaper";
import { useState } from "react";
import { useTheme } from "@emotion/react";

function SkillCard({ skill, index }: { skill: any; index: number }) {
    const theme: any = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [expanded, setExpanded] = useState<boolean>(false);
    const MAX_LENGTH = 120;
    const descriptionText = skill.description.replace(/<[^>]*>/g, '');
    const shouldTruncate = isMobile && descriptionText.length > MAX_LENGTH;

    return (
        <Grid2 key={index} size={{ xs: 12, md: 6, sm: 6 }}>
            <CustomPaper sx={{
                padding: { xs: 2, sm: 2.5, md: 3 },
                display: 'flex',
                alignItems: "stretch",
                minHeight: { xs: 'auto', sm: 240 },
                height: '100%',
            }}>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Typography 
                        variant="h6" 
                        fontWeight={"bold"}
                        sx={{
                            color: 'primary.main',
                        }}
                    >
                        {skill.title}
                    </Typography>
                    {shouldTruncate && !expanded ? (
                        <>
                            <Typography 
                                variant="body2" 
                                dangerouslySetInnerHTML={{ __html: skill.description }}
                                sx={{
                                    lineHeight: 1.7,
                                    color: 'text.secondary',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 4,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            />
                            <Button
                                onClick={() => setExpanded(!expanded)}
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
                                dangerouslySetInnerHTML={{ __html: skill.description }}
                                sx={{
                                    lineHeight: 1.7,
                                    color: 'text.secondary',
                                }}
                            />
                            {shouldTruncate && (
                                <Button
                                    onClick={() => setExpanded(!expanded)}
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

                    <Grid2 container spacing={1.5}>
                        {skill.tools.map((tool: any, index: number) => (
                            <Grid2 key={index}>
                                {tool}
                            </Grid2>
                        ))}
                    </Grid2>
                    <Divider sx={{ opacity: 0.3, marginY: 1 }} />
                    <Grid2 container spacing={1}>
                        {skill.tags.map((tag: any, index: number) => (
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
            </CustomPaper>
        </Grid2>
    );
}

export function Skills() {
  return (
    <Stack spacing={{ xs: 3, sm: 4 }} textAlign={"left"}>
      <Typography 
        variant="h4" 
        fontWeight="bold"
        sx={{
          marginBottom: { xs: 1, sm: 2 },
        }}
      >
        Skills
      </Typography>

      <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }}>
        {SKILLS.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </Grid2>

    </Stack>
  );
}