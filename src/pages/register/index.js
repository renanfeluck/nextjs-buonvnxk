import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import Title from "../../components/design/Title";
import Header from "../../components/Header";
import RegisterHero from "../../components/register/RegisterHero";

const useStyles = makeStyles({
  subtitle: {
    textAlign: "center",
    font: "normal normal medium 10px/16px Montserrat",
    letterSpacing: "0.06px",
    color: "#161616",
    opacity: "1",
    fontWeight: "bold",
    fontSize: "10px",
  },
  socialBox: {
    display: "flex",
    justifyContent: "center",
  },
  socialButton: {
    padding: "10px",
  },
  subtitle: {
    textAlign: "center",
    font: "normal normal normal 14px/24px Montserrat",
    letterSpacing: "0.1px",
    color: "#161616",
  },
  title: {
    textAlign: "center",
    font: "normal normal medium 20px/28px Montserrat",
    letterSpacing: "0.15px",
    color: "#161616",
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "#F7F7F7",
  },
  progress: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingTop: "16px",
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
  text: {
    textAlign: "left",
    font: "normal normal normal 14px/24px Montserrat",
    letterSpacing: "0.1px",
    color: "#161616",
  },
  flexBox: {
    display: "flex",
  },
});

export default function Register() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <RegisterHero />
      <Title title="ĐĂNG KÝ NHANH" black />
      <Typography className={classes.subtitle}>
        Liên kết với các tài khoản
      </Typography>

      <Box className={classes.socialBox}>
        <img
          src="/svg/facebook-register.svg"
          className={classes.socialButton}
        />
        <img src="/svg/google-register.svg" className={classes.socialButton} />
      </Box>

      <Box className={classes.form}>
        <Typography className={classes.subtitle}> Hoặc </Typography>
        <Typography className={classes.title}> ĐĂNG KÝ THỦ CÔNG </Typography>

        <Box className={classes.progress}>
          <img src="/svg/step1.svg" />
          <Typography> ------------- </Typography>
          <img src="/svg/step2.svg" />
        </Box>

        <Box p={3}>
          <Box style={{ paddingBottom: "20px" }}>
            <TextField
              id="outlined-basic"
              variant="filled"
              //   label="E-Viết đánh giá"
              placeholder="Họ và tên"
              className={classes.input}
              inputProps={{
                style: {
                  height: "40px",
                  padding: "0 14px",
                  backgroundColor: "#fff",
                },
              }}
            />
          </Box>

          <Box style={{ paddingBottom: "20px" }}>
            <TextField
              id="outlined-basic"
              variant="filled"
              //   label="E-Viết đánh giá"
              placeholder="Tên đăng nhập"
              className={classes.input}
              inputProps={{
                style: {
                  height: "40px",
                  padding: "0 14px",
                  backgroundColor: "#fff",
                },
              }}
            />
          </Box>

          <Box style={{ paddingBottom: "20px" }}>
            <TextField
              id="outlined-basic"
              variant="filled"
              //   label="E-Viết đánh giá"
              placeholder="Mật khẩu"
              className={classes.input}
              inputProps={{
                style: {
                  height: "40px",
                  padding: "0 14px",
                  backgroundColor: "#fff",
                },
              }}
            />
          </Box>

          <Box style={{ paddingBottom: "20px" }}>
            <TextField
              id="outlined-basic"
              variant="filled"
              //   label="E-Viết đánh giá"
              placeholder="Email"
              className={classes.input}
              inputProps={{
                style: {
                  height: "40px",
                  padding: "0 14px",
                  backgroundColor: "#fff",
                },
              }}
            />
          </Box>
        </Box>

        <Typography className={classes.text}>Bạn là ai?</Typography>

        <Box className={classes.formBottom}>
          <Box className={classes.flexBox}>
            <FormControlLabel
              control={
                <Checkbox
                  //   checked={state.checkedB}
                  //   onChange={handleChange}
                  name="checkedB"
                  color="primary"
                  className={classes.checkbox}
                />
              }
              label={<span className={classes.checkbox}>Người bán buôn</span>}
            />

            <FormControlLabel
              control={
                <Checkbox
                  //   checked={state.checkedB}
                  //   onChange={handleChange}
                  name="checkedB"
                  color="primary"
                  className={classes.checkbox}
                />
              }
              label={<span className={classes.checkbox}>Người mua buôn</span>}
            />
          </Box>

          <Typography>
            Bằng việc đăng ký, bạn đã đồng ý với chúng tôi về Điều khoản dịch vụ
            & Chính sách bảo mật.
          </Typography>

          <Box className={classes.flexBox}>
            <Typography className={classes.greenLink}>HUỶ</Typography>
            <Button className={classes.greenButton}> TIẾP TỤC </Button>
          </Box>

          <Typography>Đã có tài khoản?</Typography>
          <Typography>Đăng nhập</Typography>
        </Box>
      </Box>

      <Box className={classes.form}>
        <Typography className={classes.subtitle}> Hoặc </Typography>
        <Typography className={classes.title}> ĐĂNG KÝ THỦ CÔNG </Typography>

        <Box className={classes.progress}>
          <img src="/svg/step1.svg" />
          <Typography> ------------- </Typography>
          <img src="/svg/step2.svg" />
        </Box>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">
            Chọn quốc gia
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            // value={age}
            // onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">
            Chọn tỉnh thành
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            // value={age}
            // onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">
            Chọn quận huyện
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            // value={age}
            // onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          variant="filled"
          //   label="E-Viết đánh giá"
          label="Số nhà, tên đường"
          className={classes.input}
          inputProps={{
            style: {
              height: "40px",
              padding: "0 14px",
              backgroundColor: "#fff",
            },
          }}
        />
        <TextField
          id="outlined-basic"
          variant="filled"
          //   label="E-Viết đánh giá"
          label="Số điện thoại"
          className={classes.input}
          inputProps={{
            style: {
              height: "40px",
              padding: "0 14px",
              backgroundColor: "#fff",
            },
          }}
        />

        <Button className={classes.greenButton}> ĐĂNG NHẬP </Button>

        <Typography className={classes.greenLink}>Quên mật khẩu?</Typography>
      </Box>
    </>
  );
}
