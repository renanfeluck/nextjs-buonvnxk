import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  backgroundBox: {
    backgroundColor: "#D5D5D5",
  },
  container: {
    padding: "24px",
    backgroundColor: "#D5D5D5",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  cardBox: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    margin: "8px",
    width: "fit-content",
    padding: "4px 8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

const HomeTags = () => {
  const classes = useStyles();

  const tags = [
    "hàng cần mua",
    "dịch vụ",
    "dịch vụ",
    "hàng cần mua",
    "dịch vụ",
    "dịch vụ",
    "hàng cần mua",
    "dịch vụ",
    "dịch vụ",
  ];

  return (
    <Container className={classes.container}>
      {tags.map((tag, index) => {
        return <Box className={classes.cardBox}>{tag}</Box>;
      })}
    </Container>
  );
};

export default HomeTags;
