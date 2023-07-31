import { styled } from "@mui/system";
import {
  alpha,
  InputBase,
  Autocomplete,
  TextField,
  useTheme,
  Box,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  flexGrow: 1,
  display: "flex",
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    flexGrow: 0,
    display: "flex",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function SearchBar({ icon, placeholder }) {
  const theme = useTheme();
  const [searchValue, setSearchValue] = React.useState("");
  const [hasText, setHasText] = React.useState(false);

  const searchId = React.useId();

  return (
    <Search>
      <SearchIconWrapper>{!hasText && <></>}</SearchIconWrapper>
      <Autocomplete
        disablePortal
        id={searchId}
        options={top100Films}
        size="small"
        blurOnSelect={true}
        freeSolo
        sx={{
          color: "white",
          outline: "none",
          fontSize: "0.96rem",
          minWidth: {
            md: 300,
            sm: "100%",
            xs: "100%",
          },
        }}
        value={searchValue}
        onChange={(event, value) => {
          setHasText(value !== null);
        }}
        renderInput={(params) => (
          <TextField
            onChange={(e) => {
              console.log("e.target.value", e.target.value);
              setHasText(e.target.value.length > 0);
            }}
            placeholder="Tìm kiếm thành viên"
            size="small"
            {...params}
          />
        )}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <Stack alignItems="center" spacing={2} direction="row">
              <Avatar src={option.profilePic} />
              <Stack spacing={5} justifyContent="space-between" direction="row">
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  noWrap
                >
                  {option.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  noWrap
                >
                  {option.khoa}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        )}
      />
    </Search>
  );
}

const top100Films = [
  {
    label: "Lương Tuấn Anh 1",
    profilePic:
      "https://image.game.actozsg.com/INDIA/HI/CDNHeroHeadPath/301111.jpg",
    khoa: "D20",
  },
  {
    label: "Lương Tuấn Anh 2",
    profilePic:
      "https://image.game.actozsg.com/INDIA/HI/CDNHeroHeadPath/301111.jpg",
    khoa: "D20",
  },
  {
    label: "Lương Tuấn Anh 3",
    profilePic:
      "https://image.game.actozsg.com/INDIA/HI/CDNHeroHeadPath/301111.jpg",
    khoa: "D20",
  },
  {
    label: "Lương Tuấn Anh 4",
    profilePic:
      "https://image.game.actozsg.com/INDIA/HI/CDNHeroHeadPath/301111.jpg",
    khoa: "D20",
  },
];
