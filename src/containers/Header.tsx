import { Avatar, Box, Typography, Link, Stack, Grid2, useMediaQuery } from "@mui/material";
import { House, Email, HouseRounded } from "@mui/icons-material";
import selfie from '../assets/images/selfie.jpeg';
import { CURRENT_LOCATION, EMAIL, GITHUB_URL, HEADER_TAGS, HEADER_TEXT, JOB_TITLE, LINKEDIN_URL, MY_NAME } from "../common/data";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useMemo } from "react";
import { FaPaperclip } from "react-icons/fa";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useTheme } from "@emotion/react";
import { trackEvent } from "../analytics";
import ReactMarkdown from 'react-markdown';
import { CustomPaper } from "../components/CustomPaper";
import Globe from "./Globe";

const resume = require('../assets/documents/resume.pdf');

export function Header() {

    const theme: any = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('lg'));

    const trackOnClick = useMemo(() => (label: string) => {
        trackEvent({
            action: 'click',
            category: 'header',
            label,
            value: 1
        })
    }, [])

    const SmallHeader = useMemo(() => () => {
        return (
            <Stack
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                spacing={3}>

                <Avatar
                    src={selfie}
                    sx={{
                        width: { xs: 150, md: 150 },
                        height: { xs: 150, md: 150 },

                    }}
                />

                <Grid2 container alignItems={"center"} spacing={2} textAlign={"center"}>
                    <Grid2>
                        <Typography variant="h2" component="h2" fontWeight="bold">
                            {MY_NAME}
                        </Typography>
                    </Grid2>

                </Grid2>

                <Grid2 container alignItems={"end"} spacing={2}
                    textAlign={"center"}
                    justifyContent="center"
                    alignContent="center"
                >
                    <Grid2>
                        <Typography variant="h5">{JOB_TITLE}</Typography>
                    </Grid2>
                    <Grid2 spacing={2} container>
                        <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackOnClick("linkedin_link")}>
                            <SiLinkedin size={20} />
                        </Link>
                        <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackOnClick("github_link")}>
                            <SiGithub size={20} />
                        </Link>
                    </Grid2>
                </Grid2>

                <Grid2 size={{
                    xs: 12,
                    md: 3,
                }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    {/* <HeaderBackground /> */}
                    <Globe 
                        mode="keepRotating"
                        rotationSpeed={0.003}
                        pulsePoint={
                            {
                                lat: -35.000767,
                                lon: 112.6111598
                            }   
                        }
                        />
                </Grid2>

                <Grid2 container spacing={2} alignItems={"center"}>
                    <Grid2>
                        <Box display="flex" alignItems="center">
                            <House sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                {CURRENT_LOCATION}
                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2>
                        <Link href={`mailto:${EMAIL}`} underline="hover" display="flex" alignItems="center" target="_blank" rel="noopener noreferrer"
                            onClick={() => trackOnClick("email_link")}>
                            <Email sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                {EMAIL}
                            </Typography>
                        </Link>
                    </Grid2>
                    <Grid2 container>
                        <FaPaperclip size={20} />
                        <Link href={resume} onClick={() => trackOnClick("resume_link")}>
                            <Typography variant="body2">
                                Resume
                            </Typography>
                        </Link>
                    </Grid2>

                </Grid2>

            </Stack>
        )
    }, [trackOnClick])

    const MediumAndLargeHeader = useMemo(() => () => {
        return (
            <Grid2 container spacing={3} size={{
                md: 12,
                lg: 12,
                xs: 12,
                xl: 12
            }}
                alignItems={"center"}
                alignContent={"center"}
                justifyContent={"space-between"}>

                <Grid2 container>
                    <Grid2 sx={{
                        alignItems: 'center',
                        alignContent: 'center',
                        display: 'flex',
                    }}>
                        <Avatar
                            src={selfie}
                            sx={{
                                width: { xs: 150, md: 150 },
                                height: { xs: 150, md: 150 },
                                // border: 5
                            }}
                        />
                    </Grid2>

                    <Grid2 container spacing={2} direction={"column"} alignItems={"start"} justifyContent={"end"}>

                        <Grid2 container alignItems={"center"} spacing={2} >
                            <Grid2>
                                <Typography variant="h2" component="h2" fontWeight="bold">
                                    {MY_NAME}
                                </Typography>
                            </Grid2>
                        </Grid2>

                        <Grid2 container alignItems={"end"} spacing={2} >
                            <Grid2>
                                <Typography variant="h5">{JOB_TITLE}</Typography>
                            </Grid2>
                            <Grid2>
                                <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackOnClick("linkedin_link")}>
                                    <SiLinkedin size={20} />
                                </Link>
                            </Grid2>
                            <Grid2>
                                <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackOnClick("github_link")}>
                                    <SiGithub size={20} />
                                </Link>
                            </Grid2>
                        </Grid2>

                        <Grid2 container spacing={2} alignItems={"center"}>
                            <Grid2>
                                <Box display="flex" alignItems="center">
                                    <HouseRounded sx={{ mr: 1 }} />
                                    <Typography variant="body2">
                                        {CURRENT_LOCATION}
                                    </Typography>
                                </Box>
                            </Grid2>
                            <Grid2>
                                <Link href={`mailto:${EMAIL}`} underline="hover" display="flex" alignItems="center" target="_blank" rel="noopener noreferrer"
                                    onClick={() => trackOnClick("email_link")}>
                                    <Email sx={{ mr: 1 }} />
                                    <Typography variant="body2">
                                        {EMAIL}
                                    </Typography>
                                </Link>
                            </Grid2>
                            <Grid2 container>
                                <FaPaperclip size={20} />
                                <Link href={resume} onClick={() => trackOnClick("resume_link")}>
                                    <Typography variant="body2">
                                        Resume
                                    </Typography>
                                </Link>
                            </Grid2>

                        </Grid2>

                    </Grid2>
                </Grid2>

                <Grid2 size={{
                    xs: 12,
                    md: 3,
                }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    {/* <HeaderBackground /> */}
                    <Globe
                        mode="keepRotating"
                        rotationSpeed={0.003}
                        pulsePoint={
                            {
                                lat: -35.000767,
                                lon: 112.6111598
                            }   
                        }
                        />
                </Grid2>

            </Grid2>
        )
    }, [trackOnClick])

    return (

        <Stack spacing={2}>
            <motion.div
                className="box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <Stack sx={{}} spacing={2}>
                    {isSmall ? <SmallHeader /> : <MediumAndLargeHeader />}

                    <Grid2 size={{
                        md: 12,
                        xs: 12,
                        xl: 12
                    }}>
                        <Marquee gradient gradientColor={theme.palette.background.default} speed={40}>
                            <Grid2 container spacing={1} alignItems={"center"} sx={{
                                marginRight: 1
                            }}>
                                {HEADER_TAGS.map((tag, index) => {
                                    return <div key={index}>{tag}</div>
                                })}
                            </Grid2>
                        </Marquee>
                    </Grid2>

                    <CustomPaper sx={{ paddingRight: 2, paddingLeft: 2 }}>
                        <ReactMarkdown>
                            {HEADER_TEXT}
                        </ReactMarkdown>

                        <Box sx={{ paddingTop: 2, paddingBottom: 2 }} >
                            👉 Let's <a href={LINKEDIN_URL} style={{
                                color: theme.palette.primary.main,
                                fontWeight: 'bold'
                            }}>connect</a> to discuss how my skills can drive innovation for your team or business!
                        </Box>
                    </CustomPaper>

                </Stack>

            </motion.div>
        </Stack>
    );
}