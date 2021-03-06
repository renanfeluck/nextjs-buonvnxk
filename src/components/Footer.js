import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import MailIcon from "@material-ui/icons/Mail";
import IconTextButton from "./application-specifc/IconTextButton";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const useStyles = makeStyles({
  backgroundBox: {
    // backgroundColor: "#000",
    // background: "url(/bgfooter.jpg)",
    // backgroundSize: "cover",
    // backgroundBlendMode: "multiply",
    // boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8)",
  },
  container: {
    // backgroundColor: "#000",
    color: "#fff",
    marginTop: "16px",
    background: "url(/bgfooter.jpg)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8)",
  },
  footerImage: {
    width: "322px",
    height: "auto",
  },
  letterBox: {
    backgroundColor: "#BB6E90",
    width: "32px",
    height: "32px",
    borderRadius: "100%",
    color: "#fff",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
  },
  flexName: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    paddingTop: "20px",
  },
  flexNameBox: {
    display: "flex",
    marginBottom: "12px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    textAlign: "left",
    font: "normal normal normal 12px/28px Montserrat",
    letterSpacing: "0.09px",
    color: "#FFFFFF",
    opacity: "1",
  },
  personIcon: {
    width: "20px",
    height: "20px",
    marginRight: "6px",
  },
  personText: {
    fontFamily: "Montserrat",
    letterSpacing: "0.09px",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  onlineText: {
    letterSpacing: "var(--unnamed-character-spacing-0-12)",
    color: "var(--unnamed-color-ffffff)",
    textAlign: "left",
    font: "normal normal medium 16px/24px Montserrat",
    letterSpacing: "0.12px",
    color: "#FFFFFF",
    opacity: "1",
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  name: {
    font:
      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/var(--unnamed-line-spacing-24) var(--unnamed-font-family-montserrat)",
    color: "var(--unnamed-color-ffffff)",
    textAlign: "left",
    font: "normal normal normal 12px/24px Montserrat",
    letterSpacing: "0.09px",
    color: "#FFFFFF",
    opacity: "1",
    fontFamily: "Montserrat",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={4}>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <Grid container>
            <Grid item xs={6}>
              <Typography className={classes.onlineText}>
                S??? ng?????i online:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.personText}>
                <PersonPinIcon className={classes.personIcon} />
                11.162 kh??ch h??ng
              </Typography>
              <Typography className={classes.personText}>
                <PersonPinIcon className={classes.personIcon} /> 3 th??nh vi??n
              </Typography>
            </Grid>
            <Grid className={classes.flexName} item xs={6}>
              <Box className={classes.flexNameBox}>
                <Typography className={classes.letterBox} variant="span">
                  T
                </Typography>
                <Typography className={classes.name} variant="span">
                  {" "}
                  t??m.nguy???n1{" "}
                </Typography>
              </Box>

              <Box className={classes.flexNameBox}>
                <Typography className={classes.letterBox} variant="span">
                  T
                </Typography>
                <Typography className={classes.name} variant="span">
                  {" "}
                  t??m.nguy???n1{" "}
                </Typography>
              </Box>

              <Box className={classes.flexNameBox}>
                <Typography className={classes.letterBox} variant="span">
                  T
                </Typography>
                <Typography className={classes.name} variant="span">
                  {" "}
                  t??m.nguy???n1{" "}
                </Typography>
              </Box>
            </Grid>

            <Grid className={classes.flexName} item xs={6}>
              <Box className={classes.flexNameBox}>
                <Typography className={classes.letterBox} variant="span">
                  T
                </Typography>
                <Typography className={classes.name} variant="span">
                  {" "}
                  t??m.nguy???n1{" "}
                </Typography>
              </Box>

              <Box className={classes.flexNameBox}>
                <Typography className={classes.letterBox} variant="span">
                  T
                </Typography>
                <Typography className={classes.name} variant="span">
                  {" "}
                  t??m.nguy???n1{" "}
                </Typography>
              </Box>

              <Box className={classes.flexNameBox}>
                <Typography className={classes.letterBox} variant="span">
                  T
                </Typography>
                <Typography className={classes.name} variant="span">
                  {" "}
                  t??m.nguy???n1{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <img className={classes.footerImage} src="/footerBanner.png" alt="" />
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <IconTextButton
            icon={<MobileScreenShareIcon />}
            text="Zalo: 0914 585 491"
            background="#0180C7"
            color="#fff"
            selected
          />
          <IconTextButton
            icon={<MobileScreenShareIcon />}
            text="??T / SMS: 0914 585 491"
            background="#F89F1A"
            color="#fff"
          />
          <IconTextButton
            icon={<MailIcon />}
            text="??T / SMS: 0914 585 491"
            background="#00B14F"
            color="#fff"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
