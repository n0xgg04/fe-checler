import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <>
      <Container
        maxWidth="xl"
        style={{
          marginTop: "100px",
          backgroundColor: "#f3dfd2",
          padding: "100px 0",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <Box className={"px-32 flex flex-col gap-y-5 justify-center"}>
              <Typography variant={"span"} className={"text-[40px]"}>
                LOGO
              </Typography>
              <Typography className={"align-center font-bold"}>
                "ITPTIT mãi là anh em"
              </Typography>
              <Typography>Copyright © Team Web 2023</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Box className={"mr-[20%]"}>
              <Typography>Cộng đồng</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
