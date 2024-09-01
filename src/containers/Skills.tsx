import { Chip, Divider, Grid2, Paper, Stack, Typography } from "@mui/material";
import { SKILLS } from "../common/data";

export function Skills() {
  return (
    <Stack spacing={2} textAlign={"left"}>
      <Typography variant="h5" fontWeight="bold">Skills</Typography>

      <Grid2 container spacing={2} >

        {SKILLS.map((skill, index) => (
          <Grid2 key={index} size={6}>
            <Paper variant="outlined" sx={{
              padding: 2,
              display: 'flex',
              height: '100%',
            }}>
              <Stack spacing={2}>
                <Typography variant="h6" fontWeight={"bold"}>{skill.title}</Typography>
                <Typography variant="body2">{skill.description}</Typography>

                <Grid2 container spacing={1}>
                  {skill.tools.map((tool, index) => (
                    <Grid2 key={index}>

                      {tool}

                    </Grid2>
                  ))}
                </Grid2>
                <Divider />
                <Grid2 container spacing={1}>
                  {skill.tags.map((tag, index) => (
                    <Grid2 key={index}>
                      <Chip label={tag} />
                    </Grid2>
                  ))}

                </Grid2>
              </Stack>
            </Paper>

          </Grid2>
        ))}
      </Grid2>

    </Stack>
  );
}