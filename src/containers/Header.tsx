import { Avatar, Box, Typography, Link, Stack, Grid2 } from "@mui/material";
import { House, Email } from "@mui/icons-material";
import selfie from '../assets/images/selfie.png';
import { CURRENT_LOCATION, EMAIL, GITHUB_URL, HEADER_TEXT, JOB_TITLE, LINKEDIN_URL } from "../common/data";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useContext } from "react";
import { ColorModeContext } from "../App";
import ColorModeSwitcher from "../components/ColorModeSwitcher";
import { FaPaperclip } from "react-icons/fa";

const resume = require('../assets/documents/resume.pdf');

export function Header() {

    const colorMode = useContext(ColorModeContext);

    return (

        <Stack spacing={2}>
            <Grid2 container alignItems="center">

                <Grid2 sx={{
                    textAlign: 'left',
                }}>
                    <Grid2 container alignItems={"center"} spacing={3}>
                        <Grid2>
                            <Avatar
                                src={selfie}
                                sx={{
                                    width: { xs: 150, md: 200 },
                                    height: { xs: 150, md: 200 },
                                    border: 5
                                }}
                            />
                        </Grid2>

                        <Stack spacing={2}>

                            <Grid2 container alignItems={"center"} spacing={2}>

                                <Grid2>
                                    <Typography variant="h2" component="h2" fontWeight="bold">
                                        Darlyn Anderson Vailatti
                                    </Typography>
                                </Grid2>
                                <Grid2>
                                    <ColorModeSwitcher onChange={() => colorMode.toggleColorMode()} />
                                </Grid2>

                            </Grid2>

                            <Grid2 container alignItems={"center"} spacing={2}>
                                <Grid2>
                                    <Typography variant="h5">{JOB_TITLE}</Typography>
                                </Grid2>
                                <Grid2>
                                    <Link href={LINKEDIN_URL}>
                                        <SiLinkedin size={20} />
                                    </Link>
                                </Grid2>
                                <Grid2>
                                    <Link href={GITHUB_URL}>
                                        <SiGithub size={20} />
                                    </Link>
                                </Grid2>
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
                                    <Link href={`mailto:${EMAIL}`} underline="hover" display="flex" alignItems="center">
                                        <Email sx={{ mr: 1 }} />
                                        <Typography variant="body2">
                                            {EMAIL}
                                        </Typography>
                                    </Link>
                                </Grid2>
                                <Grid2 container>
                                    <FaPaperclip size={20}/>
                                    <Link href={resume}>
                                        <Typography variant="body2">
                                            Resume
                                        </Typography>
                                    </Link>
                                </Grid2>

                            </Grid2>

                        </Stack>


                    </Grid2>

                    <Typography variant="body1" mt={2} dangerouslySetInnerHTML={{ __html: HEADER_TEXT }} />

                </Grid2>
            </Grid2>
        </Stack>
    );
}