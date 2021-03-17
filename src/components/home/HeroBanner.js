import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backgroundBox: {
    background: "url(/shoes.jpg)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    boxShadow: "inset 0 0 0 2000px rgba(0, 177, 79, 0.8)",
  },
  container: {
    height: "466px",
  },
  title: {
    fontSize: "24px",
    color: "#fff",
    textAlign: "center",
    paddingTop: "35px",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: "16px",
    textAlign: "center",
    paddingTop: "35px",
    font: "normal normal medium 16px/24px Montserrat",
    letterSpacing: "0.12px",
    color: "#FFFFFF",
  },
  heroButton: {
    backgroundColor: "#FFD200",
    fontSize: "15px",
    fontFamily: "Montserrat-Medium",
    margin: "35px auto",
    width: "302px",
    display: "block",
    background: "#FFD200 0% 0% no-repeat padding-box",
    boxShadow: "0px 0px 6px #FFD200",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#fff",
    width: "70%",
    display: "block",
    margin: "auto",
    height: "2px",
  },
  cardBox: {
    display: "flex",
    paddingTop: "25px",
    paddingBottom: "25px",
    justifyContent: "space-around",
  },
  heroCard: {
    textAlign: "center",
    margin: "0 4px",
    height: "98px",
    maxHeight: "98px",
    width: "auto",
    maxWidth: "147px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
  },
  heroCardTitle: {
    fontSize: "12px",
    textAlign: "center",
    font: "normal normal bold 12px/21px Montserrat",
    letterSpacing: "0.09px",
    color: "#161616",
    textTransform: "uppercase",
    opacity: "1",
    fontWeight: "bold",
  },
  heroCardSubtitle: {
    color: "#545454",
    fontSize: "10px",
  },
  heroCardIcon: {
    width: "41px",
    height: "41px",
  },
}));

const HeroCard = ({ image, title, subtitle }) => {
  const classes = useStyles();

  return (
    <Card className={classes.heroCard}>
      <img className={classes.heroCardIcon} src={image} />
      <Typography className={classes.heroCardTitle}> {title} </Typography>
      <Typography className={classes.heroCardSubtitle}> {subtitle} </Typography>
    </Card>
  );
};

const HeroBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.backgroundBox}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          NGUỒN HÀNG VNXK TRONG TAY BẠN!
        </Typography>
        <Button className={classes.heroButton}>
          + 10.000 mối buôn toàn quốc
        </Button>
        <Divider className={classes.divider} />
        <Typography className={classes.subTitle}>Bạn là ai?</Typography>
        <Box className={classes.cardBox}>
          <HeroCard
            image="/svg/buyer.svg"
            title="NGƯỜI MUA"
            subtitle="Bạn đang cần tìm nguồn hàng VNXK tốt?"
          />
          <HeroCard
            image="/svg/MoneyHands.svg"
            title="NGƯỜI BÁN"
            subtitle="Bạn là người bán đang có sẵn nguồn hàng?"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner;
