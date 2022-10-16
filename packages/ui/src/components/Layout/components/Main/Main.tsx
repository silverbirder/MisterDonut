/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { User } from "@supabase/supabase-js";
import { SupabaseContext } from "@ui/providers";
import { SideBar } from "../SideBar";
import { Header } from "../Header";
import { useLayout } from "../../hooks";

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
  const supabase = useContext(SupabaseContext);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setUser(supabase?.auth.user() || null);
  }, [supabase?.auth]);
  const { profile } = useLayout({
    uid: (user && user.id) || "",
  });
  const logoutHandler = () => {
    supabase?.auth.signOut().catch(() => {});
    setUser(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header
        open={open}
        toggleOpen={toggleOpen}
        profile={profile}
        logoutHandler={logoutHandler}
      />
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
