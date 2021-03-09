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
  titleBox: {
    display: "block",
  },
  divider: {
    backgroundColor: "#fff",
    width: "80px",
    display: "block",
    margin: "15px auto",
    height: "2px",
  },
});

const Title = ({ title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.titleBox}>
      <Typography className={classes.title}>{title}</Typography>
      <Divider className={classes.divider} />
    </Box>
  );
};

export default Title;
