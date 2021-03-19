import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MessageIcon from "@material-ui/icons/Message";
import StarIcon from "@material-ui/icons/Star";
import IconTextButton from "../application-specifc/IconTextButton";
import EmailIcon from "@material-ui/icons/Email";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#d5d5d5",
    paddingTop: "23px",
    paddingBottom: "23px",
  },
  productBox: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 1px 4px #00000029",
    borderRadius: "4px",
    opacity: "1",
    padding: "9px 12px",
  },
  boxTitle: {
    textAlign: "left",
    font: "normal normal normal 10px/24px Montserrat",
    letterSpacing: "0.08px",
    color: "#ABABAB",
    opacity: "1",
    fontSize: "10px",
  },
  starIcon: {
    width: "12px",
    height: "12px",
    color: "#FFCE00",
  },
  contentText: {
    textAlign: "left",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#161616",
    opacity: "1",
    fontWeight: "bold",
  },
  comments: {
    textAlign: "left",
    font: "italic normal normal 10px/16px Montserrat",
    letterSpacing: "0.08px",
    color: "#ABABAB",
    fontSize: "10px",
  },
  idSub: {
    font: "italic normal normal 10px/24px Montserrat",
    letterSpacing: "0.08px",
    color: "#545454",
    opacity: "1",
  },
  buttonBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});

const ProductStats = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box className={classes.productBox}>
            <Typography className={classes.boxTitle}>
              Thông tin liên hệ
            </Typography>

            <Typography className={classes.contentText}>
              <PhoneIcon /> 0903 080 138
            </Typography>
            <Typography className={classes.contentText}>
              <MessageIcon /> 0903 080 138
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box className={classes.productBox}>
            <Typography className={classes.boxTitle}> Đăng bởi </Typography>
            <Typography className={classes.contentText}>Tony Nguyen</Typography>
            <Typography>
              <StarIcon className={classes.starIcon} />{" "}
              <StarIcon className={classes.starIcon} />{" "}
              <StarIcon className={classes.starIcon} />{" "}
              <StarIcon className={classes.starIcon} />{" "}
              <StarIcon className={classes.starIcon} /> 5.0{" "}
            </Typography>
            <Typography className={classes.comments}>
              {" "}
              (102 đánh giá){" "}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box className={classes.productBox}>
            <Typography className={classes.boxTitle}> Lượt xem </Typography>
            <Typography className={classes.contentText}>25793</Typography>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box className={classes.productBox}>
            <Typography className={classes.boxTitle}> ID Tin đăng </Typography>
            <Typography className={classes.contentText}>3612-VNXK</Typography>
            <Typography className={classes.idSub}>
              {" "}
              Thuê vị trí tin này{" "}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} className={classes.buttonBox}>
          <IconTextButton
            background="#000"
            color="#fff"
            text="Liên hệ qua mail"
            selected
            icon={<EmailIcon />}
          />
          <IconTextButton
            icon={<SystemUpdateAltIcon />}
            background="#000"
            color="#fff"
            text="Lưu dùng sau"
          />
          <IconTextButton
            background="#000"
            color="#fff"
            text="Báo cáo tin xấu"
            icon={<ErrorOutlineIcon />}
          />
          <IconTextButton
            icon={<SearchIcon />}
            background="#000"
            color="#fff"
            text="Chưa đúng ý?"
          />
        </Grid>

        <Grid item xs={12}>
          <Box className={classes.productBox}>
            <Typography className={classes.boxTitle}>Địa điểm</Typography>
            <Typography className={classes.contentText}>
              TP. Hồ Chí Minh, Việt Nam Ho Chi Minh City, Vietnam
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductStats;
