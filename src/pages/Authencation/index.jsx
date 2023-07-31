import React from "react";
import { makeStyles } from "tss-react/mui";
import { Container, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { ToastContainer as OriginToast, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/system";
import { config } from "../../config/config";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import Helmet from "react-helmet";
import { Outlet } from "react-router-dom";

const ToastContainer = styled(OriginToast)`
  font-size: 14px;
`;

export default function AuthencationPage() {
  const { classes, cx } = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <ToastContainer />
      <Container
        maxWidth="xl"
        className={"bg-[#d9d9d9] flex flex-row justify-center items-center"}
      >
        <Grid direction="row" container spacing={1}>
          {!isSmallScreen && (
            <Grid
              item
              xs={6}
              className={"flex flex-row justify-center items-center"}
            >
              <Typography>Ảnh</Typography>
            </Grid>
          )}
          <Grid
            item
            xs={!isSmallScreen ? 6 : 12}
            className={cx(
              classes.form,
              "flex flex-row justify-center items-center"
            )}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const useStyles = makeStyles()({
  form: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
