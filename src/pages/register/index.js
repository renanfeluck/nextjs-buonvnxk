import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import Title from "../../components/design/Title";
import Header from "../../components/Header";
import RegisterHero from "../../components/register/RegisterHero";
import VisibilityIcon from "@material-ui/icons/Visibility";

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
    width: "146px",
  },
  greenLink: {
    textAlign: "center",
    font: "normal normal normal 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#00B14F",
    opacity: "1",
    fontWeight: "bold",
    paddingTop: "12px",
    paddingBottom: "12px",
    width: "146px",
  },
  text: {
    textAlign: "left",
    font: "normal normal normal 14px/24px Montserrat",
    letterSpacing: "0.1px",
    color: "#161616",
    fontSize: "14px",
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    textAlign: "left",
    font: "normal normal normal 14px/24px Montserrat",
    letterSpacing: "0.1px",
    color: "#161616",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  select: {
    width: "100%",
    backgroundColor: "#fff",
    height: "40px",
  },
  selectBox: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "16px",
  },
  formControl: {
    padding: "8px",
  },
});

export default function Register() {
  const classes = useStyles();

  const [step, setStep] = useState(1);

  return (
    <>
      <Header />
      <RegisterHero />
      <Title title="????NG K?? NHANH" black />
      <Typography className={classes.subtitle}>
        Li??n k???t v???i c??c t??i kho???n
      </Typography>

      <Box className={classes.socialBox}>
        <img
          src="/svg/facebook-register.svg"
          className={classes.socialButton}
        />
        <img src="/svg/google-register.svg" className={classes.socialButton} />
      </Box>

      {step === 1 && (
        <Box className={classes.form}>
          <Typography className={classes.subtitle}> Ho???c </Typography>
          <Typography className={classes.title}> ????NG K?? TH??? C??NG </Typography>

          <Box className={classes.progress}>
            <img src="/svg/step1.svg" />
            <Typography> ------------- </Typography>
            <img src="/svg/step2.svg" />
          </Box>

          <Box pt={3} pl={3} pr={3}>
            <Box style={{ paddingBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                variant="filled"
                disableUnderline={true}
                placeholder="H??? v?? t??n"
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
                //   label="E-Vi???t ????nh gi??"
                placeholder="T??n ????ng nh???p"
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
                //   label="E-Vi???t ????nh gi??"
                placeholder="M???t kh???u"
                className={classes.input}
                inputProps={{
                  style: {
                    height: "40px",
                    padding: "0 14px",
                    backgroundColor: "#fff",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityIcon style={{ color: "#D5D5D5" }} />
                    </InputAdornment>
                  ),
                  style: {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                }}
              />
            </Box>

            <Box style={{ paddingBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                variant="filled"
                //   label="E-Vi???t ????nh gi??"
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

          <Box pr={3} pl={3} className={classes.formBottom}>
            <Typography className={classes.text}>B???n l?? ai?</Typography>
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
                label={<span className={classes.checkbox}>Ng?????i b??n bu??n</span>}
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
                label={<span className={classes.checkbox}>Ng?????i mua bu??n</span>}
              />
            </Box>

            <Box pt={2} pb={2}>
              <Typography className={classes.text}>
                B???ng vi???c ????ng k??, b???n ???? ?????ng ?? v???i ch??ng t??i v??? ??i???u kho???n
                d???ch v??? & Ch??nh s??ch b???o m???t.
              </Typography>
            </Box>

            <Box className={classes.buttonBox}>
              <Typography className={classes.greenLink}>HU???</Typography>
              <Button
                className={classes.greenButton}
                onClick={() => setStep(2)}
              >
                TI???P T???C
              </Button>
            </Box>

            <Box
              className={classes.flexBox}
              pt={3}
              style={{ justifyContent: "center" }}
            >
              <Typography className={classes.text}>???? c?? t??i kho???n?</Typography>
              <Typography className={classes.greenLink}>????ng nh???p</Typography>
            </Box>
          </Box>
        </Box>
      )}

      {step === 2 && (
        <Box className={classes.form}>
          <Typography className={classes.subtitle}> Ho???c </Typography>
          <Typography className={classes.title}> ????NG K?? TH??? C??NG </Typography>

          <Box className={classes.progress}>
            <img src="/svg/step1.svg" />
            <Typography> ------------- </Typography>
            <img src="/svg/step2.svg" />
          </Box>

          <Box className={classes.selectBox}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">
                Ch???n qu???c gia
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
                Ch???n t???nh th??nh
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
                Ch???n qu???n huy???n
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
          </Box>

          <Box className={classes.formControl}>
            <TextField
              id="outlined-basic"
              variant="filled"
              //   label="E-Vi???t ????nh gi??"
              label="S??? nh??, t??n ???????ng"
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

          <Box className={classes.formControl}>
            <TextField
              id="outlined-basic"
              variant="filled"
              //   label="E-Vi???t ????nh gi??"
              label="S??? ??i???n tho???i"
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

          <Box className={classes.buttonBox} p={3}>
            <Button onClick={() => setStep(1)} className={classes.greenButton}>
              ????NG NH???P
            </Button>

            <Typography className={classes.greenLink}>
              Qu??n m???t kh???u?
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
