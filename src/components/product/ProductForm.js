import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
  Divider,
} from "@material-ui/core";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import CommentaryBox from "../application-specifc/CommentaryBox";
import StarIcon from "@material-ui/icons/Star";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#d5d5d5",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "29px",
  },
  bold: {
    textAlign: "left",
    font: "normal normal medium 12px/20px Montserrat",
    letterSpacing: "0.09px",
    color: "#161616",
    opacity: "1",
    fontWeight: "bold",
  },
  light: {
    textAlign: "right",
    font: "normal normal normal 10px/24px Montserrat",
    letterSpacing: "0.08px",
    color: "#ABABAB",
    opacity: "1",
  },
  input: {
    width: "100%",
  },
  tip: {
    textAlign: "left",
    font: "normal normal normal 10px/24px Montserrat",
    letterSpacing: "0.08px",
    color: "#ABABAB",
    opacity: "1",
  },
  leftBox: {
    backgroundColor: "#ABABAB",
  },
  leftText: {
    textAlign: "right",
    font: "normal normal normal 10px/24px Montserrat",
    letterSpacing: "0.08px",
    color: "#FFFFFF",
    opacity: "1",
  },
  grayButton: {
    backgroundColor: "#EBEBEB",
    textAlign: "center",
    font: "normal normal normal 12px/24px Montserrat",
    letterSpacing: "0.09px",
    color: "#161616",
    textTransform: "none",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonOutline: {
    textAlign: "left",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#00B14F",
    opacity: "1",
    marginRight: "12px",
    height: "37px",
  },
  buttonFill: {
    background: "#00B14F 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    opacity: "1",
    textAlign: "center",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#FFFFFF",
    opacity: "1",
    fontWeight: "bold",
    height: "37px",
  },
  formButtons: {
    display: "flex",
    paddingTop: "16px",
  },
  checkbox: {
    textAlign: "left",
    font: "normal normal normal 10px/14px Montserrat",
    letterSpacing: "0.08px",
    color: "#161616",
    opacity: "1",
    fontSize: "10px",
    lineHeight: "12px",
  },
  reviewBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewIcon: {
    color: "#FFCE00",
    width: "12px",
    height: "12px",
  },
  reviewGrayBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "6px",
  },
});

const ProductForm = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

  return (
    <Container className={classes.container}>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          TabIndicatorProps={{ style: { background: "#00B14F" } }}
        >
          <Tab label="B??NH LU???N" />
          <Tab label="????NH GI??" />
        </Tabs>

        <SwipeableViews
          //   axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography className={classes.bold}> Th??m b??nh lu???n </Typography>
              <Typography
                className={classes.light}
                style={{ display: "flex", alignItems: "center" }}
              >
                <MailIcon /> Theo d??i
              </Typography>
            </Box>

            <Box p={1}>
              <TextField
                id="outlined-basic"
                label="T??m h??ng VNXK"
                variant="filled"
                label="T??n"
                className={classes.input}
                inputProps={{
                  style: {
                    height: "40px",
                    width: "100%",
                    padding: "0 14px",
                  },
                }}
              />
              <Typography className={classes.tip}>B???t bu???c cung c???p</Typography>
            </Box>

            <Box p={1}>
              <TextField
                id="outlined-basic"
                label="T??m h??ng VNXK"
                variant="filled"
                label="E-mail"
                className={classes.input}
                inputProps={{
                  style: {
                    height: "40px",
                    padding: "0 14px",
                  },
                }}
              />
              <Typography className={classes.tip}>
                B???t bu???c cung c???p, nh??ng kh??ng hi???n th???
              </Typography>
            </Box>

            <Box p={1}>
              <TextField
                id="outlined-basic"
                label="T??m h??ng VNXK"
                variant="filled"
                label="T??n"
                className={classes.input}
                inputProps={{
                  style: {
                    height: "83px",
                    padding: "0 14px",
                  },
                }}
              />
              <Box className={classes.leftBox}>
                <Typography className={classes.leftText}>
                  1000 symbols left
                </Typography>
              </Box>

              <Box className={classes.buttonBox}>
                <Button className={classes.grayButton}> Captcha </Button>
                <Button className={classes.grayButton}> Enter Captcha</Button>
              </Box>

              <Box className={classes.formButtons}>
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
                  label={
                    <span className={classes.checkbox}>
                      Nh???c cho t??i khi c?? b??nh lu???n
                    </span>
                  }
                />

                <Button className={classes.buttonOutline}> Cancel </Button>

                <Button className={classes.buttonFill}> G???i </Button>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box className={classes.reviewBox}>
              <Box style={{ display: "flex" }}>
                <StarIcon className={classes.reviewIcon} />
                <StarIcon className={classes.reviewIcon} />
                <StarIcon className={classes.reviewIcon} />
                <StarIcon className={classes.reviewIcon} />
                <StarIcon className={classes.reviewIcon} />
                <Box ml={2}>
                  <Typography className={classes.bold}> 5.0 </Typography>
                </Box>
              </Box>
              <Typography className={classes.light}>(132 ????nh gi??)</Typography>
            </Box>

            <Typography className={classes.bold}> Th??m ????nh gi?? </Typography>

            <Box p={1}>
              <TextField
                id="outlined-basic"
                variant="filled"
                label="Vi???t ????nh gi??"
                className={classes.input}
                inputProps={{
                  style: {
                    height: "40px",
                    width: "100%",
                    padding: "0 14px",
                  },
                }}
              />
            </Box>

            <Box p={1}>
              <TextField
                id="outlined-basic"
                variant="filled"
                label="E-Vi???t ????nh gi??"
                className={classes.input}
                inputProps={{
                  style: {
                    height: "83px",
                    padding: "0 14px",
                  },
                }}
              />
            </Box>

            <Box className={classes.reviewGrayBox}>
              <StarIcon className={classes.reviewIconGray} />
              <StarIcon className={classes.reviewIconGray} />
              <StarIcon className={classes.reviewIconGray} />
              <StarIcon className={classes.reviewIconGray} />
              <StarIcon className={classes.reviewIconGray} />
            </Box>

            <Box className={classes.reviewGrayBox}>
              <Button className={classes.buttonOutline}> Cancel </Button>
              <Button className={classes.buttonFill}> G???i </Button>
            </Box>
          </TabPanel>
        </SwipeableViews>
      </Paper>

      <Box style={{ padding: "8px", backgroundColor: "#fff" }}>
        <Divider />
      </Box>

      <Box
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
          backgroundColor: "#fff",
        }}
      >
        <CommentaryBox
          src="/product2.jpg"
          comment="Kho s??? h??ng VNXK, Cambodia uy t??n, kho h??ng ch???t l?????ng..."
          count="159"
          description="g???i m??nh b???ng gi?? mua bu??n & h??nh ???nh qua mail nh??"
          date="28/02/2021 15:57"
          background="#fff"
        />
        <CommentaryBox
          src="/product2.jpg"
          comment="Kho s??? h??ng VNXK, Cambodia uy t??n, kho h??ng ch???t l?????ng..."
          count="159"
          description="g???i m??nh b???ng gi?? mua bu??n & h??nh ???nh qua mail nh??"
          date="28/02/2021 15:57"
          background="#fff"
        />
      </Box>
    </Container>
  );
};

export default ProductForm;
