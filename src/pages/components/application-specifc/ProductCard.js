import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  cardBox: {
    backgroundColor: "#fff",
    padding: "6px",
    margin: "4px",
  },
  cardTitle: {
    fontSize: "12px",
    color: "#161616",
    marginBottom: "8px",
  },
  cardDescription: {
    fontSize: "12px",
    color: "#545454",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  textBox: {
    padding: "4px",
  },
});

const ProductCard = ({ src, title, description }) => {
  const classes = useStyles();

  return (
    <Box className={classes.cardBox}>
      <Grid container>
        <Grid item xs={4}>
          <img className={classes.image} src={src} alt="" />
        </Grid>
        <Grid className={classes.textBox} item xs={8}>
          <Typography className={classes.cardTitle}> {title} </Typography>
          <Typography className={classes.cardDescription}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCard;
