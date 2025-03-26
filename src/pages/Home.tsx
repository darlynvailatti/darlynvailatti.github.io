import { Container, Stack } from "@mui/material";
import { Header } from "../containers/Header";
import { Skills } from "../containers/Skills";
import { Experience } from "../containers/Experience";
import Projects from "../containers/Projects";
import { Education } from "../containers/Education";
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

  return (
    <Container maxWidth="lg" sx={{ padding: "30px" }}>
      <Stack spacing={2}>

        <Header />

        <Skills />

        <Projects />

        <Experience />

        <Education />
      </Stack>
    </Container>
  );
}