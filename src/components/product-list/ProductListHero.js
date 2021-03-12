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
    height: "188px",
    backgroundColor: "#00B14F",
    padding: "0 56px",
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

const ProductHeroBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.backgroundBox}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          MỌI MỐI BUÔN SỈ LẺ CAMBODIA - VNXK TRUNG - HÀN - NHẬT
        </Typography>
      </Container>
    </Box>
  );
};

export default ProductHeroBanner;
