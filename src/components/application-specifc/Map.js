import {
  Box,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Title from "../design/Title";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#00B14F",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "15px 0",
    height: "100%",
  },
  divider: {
    backgroundColor: "#fff",
    width: "80px",
    display: "block",
    margin: "15px auto",
    height: "2px",
  },
  title: {
    color: "#fff",
    fontSize: "20px",
  },
  image: {
    width: "302px",
    height: "auto",
  },
});

const Map = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Title title="MUA BÁN VNXK GẦN BẠN" />

      <img className={classes.image} src="/map.png" alt="" />
    </Box>
  );
};

export default Map;
