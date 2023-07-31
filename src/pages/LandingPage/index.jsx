import React from "react";
import { Container } from "@mui/material";
import GlobalNavBar from "../../components/NavigationBar";
import MainSection from "./layouts/MainSection";
import MemberSection from "./layouts/MemberSection";
import Helmet from "react-helmet";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>ITPTIT - Mãi là anh em</title>
      </Helmet>
      <Container maxWidth="xl" disableGutters>
        <GlobalNavBar loggedIn={false} />
        <MainSection />
        <MemberSection />
      </Container>
    </>
  );
}
