import { Container, Stack, Box } from "@mui/material";
import { Header } from "../containers/Header";
import { Experience } from "../containers/Experience";
import Projects from "../containers/Projects";
import { Education } from "../containers/Education";
import { Navigation } from "../components/Navigation";
import { useEffect } from "react";
import { trackPageView } from "../analytics";

export function Home() {

  const location = window.location;

  useEffect(() => {
    trackPageView({
      page: location.pathname,
      title: "Home"
    });
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 


        paddingBottom: { xs: "40px", sm: "50px", md: "60px" },
      }}
    >
      <Navigation />
      <Stack spacing={{ xs: 4, sm: 5, md: 4 }}>
        <Box id="header" sx={{ scrollMarginTop: "80px" }}>
          <Header />
        </Box>

        <Box id="experience" sx={{ scrollMarginTop: "80px" }}>
          <Experience />
        </Box>

        <Box id="projects" sx={{ scrollMarginTop: "80px" }}>
          <Projects />
        </Box>

        <Box id="education" sx={{ scrollMarginTop: "80px" }}>
          <Education />
        </Box>
      </Stack>
    </Container>
  );
}