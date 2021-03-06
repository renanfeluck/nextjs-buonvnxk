import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles({
  cardBox: {
    backgroundColor: "#fff",
    padding: "6px",
    width: "302px",
    height: "176px",
    maxWidth: "100%",
    margin: "auto",
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
  phone: {
    color: "#00B14F",
    display: "flex",
  },
  phoneIcon: {
    width: "20px",
    height: "20px",
  },
  phoneText: {
    fontSize: "12px",
  },
  reviewIcon: {
    color: "#FFCE00",
    width: "14px",
    height: "auto",
  },
  reviewText: {
    fontSize: "12px",
    color: "#d5d5d5",
    marginLeft: "6px",
  },
  reviewBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    height: "100%",
    alignItems: "center",
  },
});

const ProductCard = ({
  src,
  title,
  description,
  review,
  phone,
  background,
}) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.cardBox}
      style={{ background: background ? background : "" }}
    >
      <Grid container className={classes.gridContainer}>
        <Grid item xs={4}>
          <img className={classes.image} src={src} alt="" />
        </Grid>
        <Grid className={classes.textBox} item xs={8}>
          <Typography className={classes.cardTitle}> {title} </Typography>
          <Typography className={classes.cardDescription}>
            {description}
          </Typography>
        </Grid>
        {review && phone && (
          <>
            <Grid className={classes.phone} item xs={4}>
              <LocalPhoneIcon className={classes.phoneIcon} />
              <Typography className={classes.phoneText}> {phone} </Typography>
            </Grid>
            <Grid className={classes.reviewBox} item xs={8}>
              <StarIcon className={classes.reviewIcon} />
              <StarIcon className={classes.reviewIcon} />
              <StarIcon className={classes.reviewIcon} />
              <StarIcon className={classes.reviewIcon} />
              <StarIcon className={classes.reviewIcon} />
              <Typography className={classes.reviewText}>
                ({review} ????nh gi??)
              </Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default ProductCard;
