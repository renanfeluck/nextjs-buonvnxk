import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  cardBox: {
    width: "53px",
    height: "110px",
    padding: "6px 20px",
    margin: "auto",
    background: "#fff",
    boxShadow: "0px 3px 6px #00000029",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    height: "58px",
    width: "auto",
    margin: "auto",
  },
  imageBox: {
    background: "var(--unnamed-color-ebebeb) 0% 0% no-repeat padding-box",
    background: "#EBEBEB 0% 0% no-repeat padding-box",
    opacity: "1",
    width: "68px",
    height: "68px",
    borderRadius: "50%",
    margin: "auto",
    marginBottom: "8px",
    position: "absolute",
    left: 0,
    right: 0,
    top: "6px",
    // display: "flex",
  },
  title: {
    textAlign: "center",
    font: "normal normal medium 10px/13px Montserrat",
    letterSpacing: "0.08px",
    color: "#161616",
    opacity: "1",
    fontSize: "10px",
    position: "absolute",
    bottom: "6px",
  },
});

const SmallCard = ({ src, title }) => {
  const classes = useStyles();

  return (
    <Box className={classes.cardBox}>
      <Box className={classes.imageBox}>
        <img className={classes.image} src={src} alt="" />
      </Box>
      <Typography className={classes.title}> {title} </Typography>
    </Box>
  );
};

export default SmallCard;
