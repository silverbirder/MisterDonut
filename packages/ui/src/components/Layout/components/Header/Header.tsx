import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Popover from "@mui/material/Popover";
import { Link } from "@ui/lib";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useState, MouseEvent, Dispatch, useContext, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { SupabaseContext } from "@ui/providers";
import { useLayout } from "../../hooks";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export type HeaderProps = {
  open: boolean;
  toggleOpen: () => void;
};

export const Header = ({ open, toggleOpen }: HeaderProps) => {
  const supabase = useContext(SupabaseContext);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(supabase?.auth.user() || null);
  }, [supabase?.auth]);

  const { profile } = useLayout({
    uid: (user && user.id) || "",
  });

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openSnack, setOpenSnack] = useState(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutClickHandler = () => {
    supabase?.auth.signOut().catch(() => {});
    setUser(null);
    setOpenSnack(true);
  };

  const openAnchor = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleSnackClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  return (
    <>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleOpen}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Love Donuts
          </Typography>
          <IconButton
            aria-describedby={id}
            color="inherit"
            onClick={handleClick}
          >
            {profile ? (
              <Avatar alt={profile.username} src={profile.avatarUrl} />
            ) : (
              <AccountCircleIcon />
            )}
          </IconButton>
          <Popover
            id={id}
            open={openAnchor}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {profile && (
              <Typography sx={{ p: 2 }}>
                <Button color="inherit" onClick={logoutClickHandler}>
                  Logout
                </Button>
              </Typography>
            )}
            {profile && <Typography sx={{ p: 2 }}>Settings</Typography>}
            {!profile && (
              <Typography sx={{ p: 2 }}>
                <Link href="/signIn">Login</Link>
              </Typography>
            )}
            {!profile && (
              <Typography sx={{ p: 2 }}>
                <Link href="/signUp">SignUp</Link>
              </Typography>
            )}
          </Popover>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleSnackClose}
        message="Logout"
      />
    </>
  );
};
