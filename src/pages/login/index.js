import {
  Box,
  Button,
  Divider,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Title from "../../components/design/Title";
import Header from "../../components/Header";

const useStyles = makeStyles({
  subtitle: {
    textAlign: "center",
    font: "normal normal medium 10px/16px Montserrat",
    letterSpacing: "0.06px",
    color: "#161616",
    fontSize: "10px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
  },
  greenButton: {
    backgroundColor: "#00b14f",
    textAlign: "center",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#FFFFFF",
    fontWeight: "bold",
    width: "100%",
  },
  greenLink: {
    textAlign: "right",
    font: "normal normal normal 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#00B14F",
    opacity: "1",
    fontWeight: "bold",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  socialLogin: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  socialImage: {
    paddingRight: "20px",
    paddignLeft: "20px",
  },
  text: {
    textAlign: "left",
    font: "normal normal normal 14px/24px Montserrat",
    letterSpacing: "0.1px",
    color: "#161616",
    fontWeight: "bold",
  },
  textBottom: {
    textAlign: "center",
    font: "normal normal normal 14px/24px Montserrat",
    letterSpacing: "0.1px",
    color: "#161616",
    fontWeight: "bold",
    padding: "13px",
  },
});

export default function Login() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Box pt={4}>
        <Title title="ĐĂNG NHẬP" black />
        <Typography className={classes.subtitle}>
          Hàng ngàn mối buôn đang chờ bạn!
        </Typography>
      </Box>

      <Box p={3}>
        <Box style={{ paddingBottom: "20px" }}>
          <TextField
            id="outlined-basic"
            variant="filled"
            //   label="E-Viết đánh giá"
            placeholder="ducnt.gaumedia@gmail.com"
            className={classes.input}
            inputProps={{
              style: {
                height: "40px",
                padding: "0 14px",
              },
            }}
          />
        </Box>

        <Box style={{ paddingBottom: "20px" }}>
          <TextField
            id="outlined-basic"
            variant="filled"
            //   label="E-Viết đánh giá"
            placeholder="*************"
            className={classes.input}
            type="password"
            inputProps={{
              style: {
                height: "40px",
                padding: "0 14px",
              },
            }}
          />
        </Box>

        <Button className={classes.greenButton}> ĐĂNG NHẬP </Button>

        <Typography className={classes.greenLink}> Quên mật khẩu? </Typography>

        <Box className={classes.socialLogin}>
          <Typography className={classes.text}>Hoặc đăng nhập bằng:</Typography>
          <Box>
            <img className={classes.socialImage} src="/svg/facebook.svg" />
            <img className={classes.socialImage} src="/svg/google.svg" />
          </Box>
        </Box>

        <Divider style={{ marginTop: "12px", marginBottom: "12px" }} />

        <Box>
          <Typography className={classes.textBottom}>
            Bạn chưa có tài khoản?
          </Typography>
          <Button className={classes.greenButton}> ĐĂNG KÝ NGAY </Button>
          <Typography className={classes.textBottom}>
            Kết nối với hàng ngàn mối buôn và nhận nhiều ưu đãi cực lớn
          </Typography>
        </Box>
      </Box>
    </>
  );
}
