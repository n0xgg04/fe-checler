import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import _ from "lodash";
import ProfileCard from "../components/ProfileCard";

export default function MemberSection() {
  const MUITheme = useTheme();
  const { classes } = useStyles({ theme: MUITheme });

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography
        textAlign="center"
        variant={{
          xs: "h5",
          sm: "h4",
          md: "h3",
          lg: "h2",
          xl: "h1",
        }}
        component="p"
      >
        Thành viên nổi bật
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={5}
        alignItems="center"
        mt={2}
        height="100vh"
      >
        <Box bgcolor="primary.main" width="794px" height="794px"></Box>
        <Box display="flex" flexDirection="column" p={2} width="100%">
          <Typography textAlign="center" variant="h5" component="h4">
            Các cá nhân hoạt động tốt quý 1 - 2 Năm 2023
          </Typography>
          <Box
            flexGrow={1}
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
          >
            <IconButton>
              <KeyboardArrowLeftIcon fontSize="large" />
            </IconButton>
            <BoxArea />
            <IconButton>
              <KeyboardArrowRightIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

const BoxArea = () => {
  return (
    <Box
      flexGrow={1}
      mt={3}
      display="flex"
      alignItems="center"
      gap={3}
      overflow="auto"
      overflowX="scroll"
    >
      {_.times(10).map((i) => (
        <ProfileCard key={i} />
      ))}
    </Box>
  );
};

const useStyles = makeStyles()((theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
}));
