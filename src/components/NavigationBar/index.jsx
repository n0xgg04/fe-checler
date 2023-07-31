import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Box,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
  useTheme,
} from "@mui/material";

import { makeStyles } from "tss-react/mui";
import { MENU_KEY } from "./constants/key";
import { Button } from "./components/styledComponents";
import MenuIcon from "@mui/icons-material/Menu";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import FeedIcon from "@mui/icons-material/Feed";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GavelIcon from "@mui/icons-material/Gavel";
import SearchBar from "./components/SearchBox";
import { useNavigate } from "react-router-dom";

export default function GlobalNavBar({ loggedIn }) {
  const [anchorEl, setAnchorEl] = React.useState({});
  const navigate = useNavigate();
  const handleClose = (key) => () => {
    setAnchorEl((prev) => ({ ...prev, [key]: null }));
  };

  const handleClick = (key) => (event) => {
    setAnchorEl((prev) => ({ ...prev, [key]: event.currentTarget }));
  };

  const theme = useTheme();

  const Logo = React.useMemo(function () {
    return (
      <Typography component="h1" variant="span" color="inherit">
        LOGO
      </Typography>
    );
  }, []);

  const linkList = React.useMemo(
    function () {
      return [
        {
          name: "Trang chủ",
          link: "/",
          icon: <SpaceDashboardIcon />,
          menu: <></>,
        },
        {
          name: "Tin tức",
          link: "/",
          icon: <FeedIcon />,
          menu: <></>,
        },
        {
          name: "Thành viên",
          link: "/",
          icon: <Diversity3Icon />,
          menu: <></>,
        },
        {
          key: "noiquy",
          name: "Nội quy",
          link: "/",
          icon: <GavelIcon />,
          menu: (
            <Menu
              id={MENU_KEY.noiquy}
              anchorEl={anchorEl[MENU_KEY.noiquy]}
              open={Boolean(anchorEl[MENU_KEY.noiquy])}
              onClose={handleClose(MENU_KEY.noiquy)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => {}}>Nội quy CLB</MenuItem>
              <MenuItem onClick={() => {}}>Nhiệm vụ của Leader</MenuItem>
            </Menu>
          ),
        },
      ];
    },
    [anchorEl]
  );

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { classes } = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const settings = ["Trang cá nhân", "Đăng xuất"];

  return (
    <>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        <Box sx={{ width: 250, bgcolor: "background.paper" }}>
          <List>
            {linkList.map((link) => (
              <ListItem key={link.name}>
                <ListItemButton onClick={toggleDrawer("left", false)}>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
      <AppBar color="primary" position="sticky" sx={{ height: "70px" }}>
        <Toolbar variant="regular" component="nav" sx={{ height: "100%" }}>
          <Box
            display={{ md: "none", xs: "block" }}
            flexGrow={0}
            marginRight={3}
          >
            <IconButton onClick={toggleDrawer("left", true)}>
              <MenuIcon color="secondary" />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent={{
              md: "flex-start",
              xs: "center",
              sm: "flex-start",
            }}
            flexGrow={3}
          >
            <Stack width="100%" flexGrow={2} spacing={4} direction="row">
              {Logo}
              <SearchBar placeholder="Tìm kiếm thành viên..." />
            </Stack>
          </Box>
          <Stack spacing={6} direction="row">
            <Stack
              display={{
                md: "flex",
                xs: "none",
              }}
              spacing={2}
              direction="row"
              sx={{ marginLeft: "auto" }}
            >
              {linkList.map((link) => (
                <>
                  <Button
                    key={link.key}
                    variant="text"
                    color="inherit"
                    className={classes.button}
                    onClick={handleClick(link.key)}
                  >
                    {link.name}
                  </Button>
                  {link.menu}
                </>
              ))}
            </Stack>
            {!loggedIn ? (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary.gray,
                  color: theme.palette.primary.black,
                }}
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Đăng nhập
              </Button>
            ) : (
              <React.Fragment>
                <Tooltip title="Tuỳ chọn cá nhân">
                  <IconButton onClick={handleClick("user_tool")} sx={{ p: 0 }}>
                    <Avatar alt="Avatar" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorEl[MENU_KEY.user]}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl[MENU_KEY.user])}
                  onClose={handleClose(MENU_KEY.user)}
                >
                  {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={handleClose(MENU_KEY.user)}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

const useStyles = makeStyles()((theme) => ({
  button: {
    backgroundColor: "transparent",
  },
}));
