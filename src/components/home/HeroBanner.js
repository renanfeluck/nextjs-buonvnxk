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
    backgroundColor: "#00B14F",
  },
  container: {
    height: "466px",
    backgroundColor: "#00B14F",
  },
  title: {
    fontSize: "24px",
    color: "#fff",
    textAlign: "center",
    paddingTop: "35px",
  },
  subTitle: {
    fontSize: "16px",
    color: "#fff",
    textAlign: "center",
    paddingTop: "35px",
  },
  heroButton: {
    backgroundColor: "#FFD200",
    fontSize: 15,
    fontFamily: "Montserrat-Medium",
    margin: "35px auto",
    width: "302px",
    display: "block",
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
    color: "#161616",
    fontSize: "12px",
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
            image="/svg/buyer.svg"
            title="NGƯỜI BÁN"
            subtitle="Bạn là người bán đang có sẵn nguồn hàng?"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner;
