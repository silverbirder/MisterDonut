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
import { useState, MouseEvent, SyntheticEvent } from "react";
import { Profile } from "../../types";

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
  profile: Profile | null;
  logoutHandler: () => void;
};

export const Header = ({
  open,
  toggleOpen,
  profile,
  logoutHandler,
}: HeaderProps) => {
  const [popOverEl, setPopOverEl] = useState<HTMLButtonElement | null>(null);
  const openPopOver = (event: MouseEvent<HTMLButtonElement>) =>
    setPopOverEl(event.currentTarget);
  const closePopOver = () => setPopOverEl(null);
  const openAnchor = Boolean(popOverEl);

  const [openSnack, setOpenSnack] = useState(false);
  const popOverId = open ? "simple-popover" : undefined;
  const closeSnack = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const logoutClickHandler = () => {
    logoutHandler();
    setOpenSnack(true);
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
            aria-describedby={popOverId}
            color="inherit"
            onClick={openPopOver}
          >
            {profile ? (
              <Avatar alt={profile.username} src={profile.avatarUrl} />
            ) : (
              <AccountCircleIcon />
            )}
          </IconButton>
          <Popover
            id={popOverId}
            open={openAnchor}
            anchorEl={popOverEl}
            onClose={closePopOver}
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
        onClose={closeSnack}
        message="Logout"
      />
    </>
  );
};
