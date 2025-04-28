import { Chip, Divider, Grid2, Paper, Stack, Typography } from "@mui/material";
import { SKILLS } from "../common/data";
import { motion } from "framer-motion";
import { CustomPaper } from "../components/CustomPaper";

export function Skills() {
  return (
    <Stack spacing={2} textAlign={"left"}>
      <Typography variant="h5" fontWeight="bold">Skills</Typography>

      <Grid2 container spacing={3}>


        {SKILLS.map((skill, index) => (

          <Grid2 key={index} size={{ xs: 12, md: 6, sm: 6 }}>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0 },
              }}
            >
              <CustomPaper sx={{
                padding: 2,
                display: 'flex',
                alignItems: "stretch",
                minHeight: 200,
              }}>
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={"bold"}>{skill.title}</Typography>
                  <Typography variant="body2" dangerouslySetInnerHTML={{ __html: skill.description }} />

                  <Grid2 container spacing={2}>
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
              </CustomPaper>
            </motion.div>

          </Grid2>
        ))}
      </Grid2>

    </Stack>
  );
}