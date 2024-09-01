import { Container, Divider, Stack } from "@mui/material";
import { Header } from "../containers/Header";
import { Skills } from "../containers/Skills";
import { Experience } from "../containers/Experience";

export function Home() {
  return (
    <Container maxWidth="lg" sx={{ padding: "30px"}}>
      <Stack spacing={2}>
        <Header />

        <Divider/>

        <Skills />

        <Divider/>

        <Experience/>

        <Divider/>
      </Stack>
    </Container>
  );
}