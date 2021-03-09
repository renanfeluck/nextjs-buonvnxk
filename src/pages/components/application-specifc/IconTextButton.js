import { makeStyles, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  buttonBox: {
    width: "202px",
    // height: "56px",
    color: "#000",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    fontSize: "17px",
    color: "#161616",
    fontFamily: "Montserrat-Medium",
    fontWeight: "600",
    margin: "8px 0",
    padding: "20px 60px",
  },
  iconSpan: {
    marginRight: "8px",
  },
});

const IconTextButton = ({ icon, text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.buttonBox}>
      <Typography className={classes.iconSpan} variant="span">
        {icon}
      </Typography>
      {text}
    </Box>
  );
};

export default IconTextButton;