import { Container, Stack, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Header } from "../containers/Header";
import { Experience } from "../containers/Experience";
import Projects from "../containers/Projects";
import { Education } from "../containers/Education";
import { Navigation } from "../components/Navigation";
import { useEffect } from "react";
import { trackPageView } from "../analytics";
import { MY_NAME, JOB_TITLE, HEADER_TEXT} from "../common/data";

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

  const siteUrl = "https://darlynvailatti.github.io";
  const description = HEADER_TEXT;
  const imageUrl = `${siteUrl}/selfie.jpeg`;
  const cleanJobTitle = JOB_TITLE.replace(/[^\w\s&]/g, '').trim();
  const pageTitle = `${MY_NAME} - ${cleanJobTitle}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={MY_NAME} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        
        <link rel="canonical" href={siteUrl} />
      </Helmet>
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
    </>
  );
}