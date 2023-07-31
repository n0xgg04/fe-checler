import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import notfoundimage from "../../assets/images/notfound.png";
import "animate.css";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src={notfoundimage}
          alt={"notfound"}
          style={{
            aspectRatio: "1.6/1.2",
            objectFit: "cover",
            width: "30%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Typography
            varient={"h1"}
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
            className={"animate__animated animate__bounce"}
          >
            Oops, trang không tồn tại !
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#6b6b6b",
              width: "70%",
              textAlign: "center",
            }}
          >
            Bạn đang cố gắng truy cập vào một trang không tồn tại hoặc bạn không
            đủ thẩm quyền để truy cập vào trang này...
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "1rem",
            width: "200px",
            height: "3rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            textTransform: "none",
            boxShadow: "rbga(0,0,0,0.24) 0px 3px 8px",
          }}
          onClick={() =>
            navigate("/", {
              skipLoad: true,
            })
          }
        >
          Trở về trang chủ
        </Button>
      </Container>
    </>
  );
}
