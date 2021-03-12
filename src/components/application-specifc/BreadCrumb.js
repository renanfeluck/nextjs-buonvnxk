import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "36px",
    background: "#F7F7F7",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  breadCrumb: {
    textAlign: "center",
    font: "normal normal normal 10px/16px Montserrat",
    letterSpacing: "0.06px",
    color: "#545454",
    opacity: "1",
    fontSize: "10px",
  },
});

const BreadCrumb = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.breadCrumb}>
        Bạn đang ở: Mua bán buôn / Bán / Thời trang nữ
      </Typography>
    </Container>
  );
};

export default BreadCrumb;
