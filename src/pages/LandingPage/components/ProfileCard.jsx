import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";

export default function ProfileCard() {
  return (
    <Card
      sx={{
        width: "285px",
        minWidth: "285px",
        height: "191px",
        backgroundColor: "primary.main",
          color: 'primary.contrastText'
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Avatar
          variant="circular"
          sx={{
            width: "77px",
            height: "77px",
            marginBottom: "10px",
          }}
          alt="avatar"
          src=""
        />
        <Typography variant="subtitle1" component="span">
          John Doe
        </Typography>
        <Typography variant="subtitle2" component="span">
          Chức vụ
        </Typography>
        <Typography variant="subtitle2" component="span">
          Khoá 20xx - 20xx
        </Typography>
      </CardContent>
    </Card>
  );
}
