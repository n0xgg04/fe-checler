import React from "react";
import {
  Box,
  Button,
  FormGroup,
  Input,
  InputLabel,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Register() {
  const { classes, cx } = useStyles();
  return (
    <Box
      className={
        "bg-white h-[80%] max-w-[60%] min-w-[400px] px-10 rounded-lg flex flex-col items-center justify-center relative"
      }
    >
      <KeyboardBackspaceIcon
        className={"absolute top-5 left-5 cursor-pointer"}
        onClick={() => window.history.back()}
      />
      <Typography
        variant="h5"
        className={"animate__animated animate__fadeInRight"}
      >
        Đăng ký
      </Typography>
      <Box
        mt={5}
        className={cx("w-[90%]", "animate__animated animate__fadeInRight")}
      >
        <Typography variant="subtitle2" gutterBottom className={classes.warn}>
          Nếu bạn là thành viên của CLB IT PTIT nhưng chưa có tài khoản xin vui
          lòng gửi yêu cầu cung cấp tài khoản về email sau:
        </Typography>
        <Box mt={2} className={"flex flex-row justify-center"}>
          <Link className={classes.contact} href="mailto:clb.it.ptit@gmail.com">
            clb.it.ptit@gmail.com
          </Link>
        </Box>
        <Typography variant={"caption"}>Nội dung email bao gồm:</Typography>
        <ul className={classes.ul}>
          <li className={classes.li}>
            Tiêu đề: “CUNG CẤP TÀI KHOẢN IT PTIT MEMBER"
          </li>
          <li className={classes.li}>
            Trả lời những câu hỏi sau: Họ và tên của bạn là gì? Bạn học khóa bao
            nhiêu? Team của bạn là gì?
          </li>
        </ul>
      </Box>
    </Box>
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
  warn: {
    textAlign: "center",
    fontSize: "0.9rem",
    lineHeight: "normal",
  },
  contact: {
    backgroundColor: "#f5f5f5",
    padding: "10px 10px",
    width: "100%",
    borderRadius: "5px",
    color: "#000",
    textDecoration: "none",
    fontSize: "0.9rem",
    textAlign: "center",
  },
  li: {
    fontSize: "0.8rem",
    listStyle: "list-item",
  },
  ul: {
    marginTop: "10px",
    "li+li": {
      marginTop: "10px",
    },
  },
});
