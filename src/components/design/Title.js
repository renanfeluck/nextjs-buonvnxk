import { Box, Divider, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#00B14F",
    display: "flex",
    justifyContent: "center",
    padding: "15px 0",
    height: "100%",
  },
  title: {
    color: "#fff",
    fontSize: "20px",
    textAlign: "center",
  },
  titleBlack: {
    color: "#161616",
    fontSize: "20px",
    textAlign: "center",
  },
  titleBox: {
    display: "block",
  },
  divider: {
    backgroundColor: "#fff",
    width: "80px",
    display: "block",
    margin: "5px auto 18px",
    height: "2px",
  },
  dividerBlack: {
    backgroundColor: "#00b14f",
    width: "80px",
    display: "block",
    margin: "5px auto 18px",
    height: "2px",
  },
});

const Title = ({ title, black = false }) => {
  const classes = useStyles();
  return (
    <Box className={classes.titleBox}>
      <Typography className={black ? classes.titleBlack : classes.title}>
        {title}
      </Typography>
      <Divider className={black ? classes.dividerBlack : classes.divider} />
    </Box>
  );
};

export default Title;
