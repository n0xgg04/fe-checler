import React from "react";
import { MagicSpinner } from "react-spinners-kit";
import styled from "styled-components";
import { useTheme } from "@mui/material";

const Loading = styled.div`
  display: grid;
  position: fixed;
  place-items: center;
  height: 100%;
  width: 100%;
  background-color: rgb(211, 206, 207);
  z-index: 9999999;
`;

export default function LoadingScreen() {
  const theme = useTheme();
  return (
    <Loading>
      <MagicSpinner
        size={50}
        color={theme.palette.primary.main}
        loading={true}
      />
    </Loading>
  );
}
