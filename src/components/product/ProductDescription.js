import {
  Box,
  Button,
  makeStyles,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  true: {
    height: "138px",
  },
  trueButton: {
    color: "#fff",
    backgroundColor: "transparent",
    border: "1px solid #fff",
  },
});

const ProductDescription = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Box className={classes.true}>
        <Typography> CHƯA ĐÚNG Ý? </Typography>
        <Button className={classes.trueButton}> Tìm kiếm nâng cao </Button>
        <Button> Bạn gửi nhu cầu </Button>
      </Box>
    </Container>
  );
};

export default ProductDescription;
