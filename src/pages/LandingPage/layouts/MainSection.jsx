import React from "react";
import { Box, Typography, useTheme, Stack } from "@mui/material";
import { makeStyles, withStyles } from "tss-react/mui";

export default function MainSection() {
  const theme = useTheme();
  const { classes } = useStyles({ theme });
  return (
    <>
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        className={classes.mainContainer}
        justifyContent="center"
        alignItems="center"
        bgcolor="primary.gray"
      >
        <Box
          width="1203px"
          height="412px"
          display="flex"
          px={10}
          py={2}
          gap={5}
          flexWrap="nowrap"
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          alignItems="center"
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "center",
            lg: "space-between",
            xl: "space-between",
          }}
        >
          <Stack
            spacing={2}
            direction="column"
            alignItems={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
              xl: "flex-start",
            }}
          >
            <Typography variant="h3" component="span">
              ITPTIT
            </Typography>
            <Typography
              textAlign={{
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
                xl: "left",
              }}
              varient="subtitle"
              component="p"
              width="80%"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </Typography>
          </Stack>
          <Slider />
        </Box>
      </Box>
    </>
  );
}

const useStyles = makeStyles()((theme) => ({
  mainContainer: {
    width: "100%",
    minHeight: "85vh",
    [theme.breakpoints.down("xs")]: {
      minHeight: "95vh",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "95vh",
    },
    [theme.breakpoints.down("md")]: {
      minHeight: "95vh",
    },
  },
}));

const Slider = () => {
  return (
    <>
      <Box
        bgcolor="primary.main"
        minWidth={{
          xs: "354px",
          sm: "472px",
          md: "472px",
          lg: "590px",
          xl: "590px",
        }}
        minHeight={{
          xs: "226.2px",
          sm: "301.6px",
          md: "301.6px",
          lg: "377px",
          xl: "377px",
        }}
        borderRadius="10px"
      ></Box>
    </>
  );
};
