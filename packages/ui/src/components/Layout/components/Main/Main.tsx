/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { SideBar } from "../SideBar";
import { Header } from "../Header";

const Copyright = (props: any) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {"Copyright © "}
    <Link
      color="inherit"
      href="https://silverbirder-misterdonut-web.vercel.app"
    >
      love donuts
    </Link>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

export type MainProps = {
  children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <Box sx={{ display: "flex" }}>
      <Header open={open} toggleOpen={toggleOpen} />
      <SideBar open={open} toggleOpen={toggleOpen} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
};
