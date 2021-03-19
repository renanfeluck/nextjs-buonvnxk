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
    height: "188px",
    backgroundColor: "#00B14F",
    padding: "0 56px",
    background: "url(/register-bg.png)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    boxShadow: "inset 0 0 0 2000px rgba(0, 177, 79, 0.8)",
  },
  title: {
    fontSize: "24px",
    color: "#fff",
    textAlign: "center",
    paddingTop: "35px",
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

const RegisterHero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.backgroundBox}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          ĐĂNG KÝ THÀNH VIÊN THÊM NHIỀU ƯU ĐÃI
        </Typography>
      </Container>
    </Box>
  );
};

export default RegisterHero;
