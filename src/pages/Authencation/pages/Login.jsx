import React from "react";
import { Link as Goto } from "react-router-dom";
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
import { useForm } from "react-hook-form";
import useMediaQuery from "@mui/material/useMediaQuery";
import { toast } from "react-toastify";
import axios from "axios";
import { config } from "../../../config/config";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "animate.css";

const AuthContext = React.createContext({});
export default function Login() {
  const { classes, cx } = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passwordId = React.useId();
  const usernameId = React.useId();

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = async (data) => {
    if (data.username === "" || data.password === "") {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    } else {
      try {
        const result = await axios.post(`${config}/api/login`);
        if (result.status === "success") {
          toast.success("Đăng nhập thành công");
          localStorage.setItem("user_data", {
            token: result.data.token,
            refreshToken: result.data.refreshToken,
            payload: result.data.payload,
          });
          return;
        }
        return new Error();
      } catch (err) {
        toast.error("Tên đăng nhập hoặc mật khẩu không chính xác");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        showPassword,
        setShowPassword,
      }}
    >
      <Box
        className={cx(
          "bg-white h-[80%] px-16 min-w-[400px] max-w-[60%] rounded-lg flex flex-col items-center justify-center"
        )}
      >
        <Typography
          className={"animate__animated animate__fadeInLeft"}
          variant="h5"
        >
          Đăng nhập
        </Typography>
        <Box mt={5} className={"animate__animated animate__fadeInLeft"}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Stack spacing={2}>
                <FormGroup>
                  <InputLabel htmlFor={usernameId}>Tài khoản</InputLabel>
                  <Input
                    id={usernameId}
                    aria-describedby="username"
                    className={classes.input}
                    {...register("username", { required: true })}
                  />
                </FormGroup>
                <FormGroup className={"relative"}>
                  <InputLabel htmlFor={passwordId}>Mật khẩu</InputLabel>
                  <Box>
                    <Input
                      id={passwordId}
                      type={!showPassword ? "password" : "text"}
                      aria-describedby="password"
                      className={classes.input}
                      {...register("password", { required: true })}
                    />
                    <ShowHidePassword />
                  </Box>
                </FormGroup>
              </Stack>
              <Link className={classes.forgot}>
                <Typography variant="caption">Quên mật khẩu?</Typography>
              </Link>
              <Stack spacing={2}>
                <Button
                  className={classes.submitButton}
                  variant="contained"
                  type={"submit"}
                >
                  Đăng nhập
                </Button>
                <Goto
                  to={"/auth/register"}
                  className={"flex flex-row justify-center"}
                  style={{
                    textDecoration: "none",
                    fontSize: "14px",
                    color: "#000",
                    cursor: "pointer",
                  }}
                >
                  Bạn chưa có tài khoản? Đăng ký
                </Goto>
              </Stack>
            </FormGroup>
          </form>
        </Box>
      </Box>
    </AuthContext.Provider>
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
  input: {
    width: "300px",
    height: "40px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "10px",
    marginTop: "10px",
  },
  showPassword: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(20%)",
    cursor: "pointer",
  },
  forgot: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  },
  submitButton: {
    width: "100%",
    marginTop: "10px",
    padding: "10px 20px",
    background: "#d9d9d9",
    color: "#000",
  },
});

const ShowHidePassword = () => {
  const { showPassword, setShowPassword } = React.useContext(AuthContext);
  const { classes, cx } = useStyles();

  const click = () => setShowPassword(!showPassword);
  return (
    <>
      {showPassword ? (
        <RemoveRedEyeIcon className={classes.showPassword} onClick={click} />
      ) : (
        <VisibilityOffIcon className={classes.showPassword} onClick={click} />
      )}
    </>
  );
};
