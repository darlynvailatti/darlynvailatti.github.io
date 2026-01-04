import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "header", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export function Navigation() {
  const theme: any = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeSection, setActiveSection] = useState<string>("header");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1001,
        backgroundColor: theme.palette.background.default,
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${theme.palette.mode === "dark" ? "rgba(200, 107, 203, 0.2)" : "rgba(0, 0, 0, 0.1)"}`,
        paddingY: { xs: 1, md: 1.25 },
        marginBottom: { xs: 1.5, md: 2 },
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          overflowX: isMobile ? "auto" : "visible",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          paddingX: { xs: 1, md: 0 },
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Button
              key={item.id}
              onClick={() => handleClick(item.id)}
              sx={{
                textTransform: "none",
                fontWeight: isActive ? "bold" : "medium",
                fontSize: { xs: "0.875rem", md: "1rem" },
                color: isActive
                  ? theme.palette.secondary.main
                  : theme.palette.text.secondary,
                paddingX: { xs: 1.5, md: 2.5 },
                paddingY: { xs: 0.75, md: 1 },
                borderRadius: 2,
                position: "relative",
                transition: "all 0.3s ease-in-out",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: theme.palette.secondary.main,
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(200, 107, 203, 0.1)"
                      : "rgba(200, 107, 203, 0.05)",
                  transform: "translateY(-2px)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: isActive ? "translateX(-50%)" : "translateX(-50%) scaleX(0)",
                  width: "80%",
                  height: 2,
                  backgroundColor: theme.palette.secondary.main,
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              {item.label}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
}

