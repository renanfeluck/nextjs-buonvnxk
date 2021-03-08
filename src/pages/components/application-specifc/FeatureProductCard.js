import { Grid, makeStyles, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles({
  featureProductImageBox: {
    display: "flex",
    maxWidth: "100%",
    marginBottom: "24px",
  },
  featureProductImage: {
    maxWidth: "50%",
    height: "auto",
  },
  featureProductTitle: {
    fontSize: "14px",
    color: "#161616",
    fontFamily: "Montserrat-Medium",
    fontWeight: "bold",
    margin: "6px 0",
  },
  codeReview: {
    display: "flex",
    alignItems: "center",
  },
  codeBox: {
    background: "#ffd200",
    width: "45px",
    height: "26px",
    display: "flex",
  },
  codeIcon: {
    display: "block",
    margin: "auto",
  },
  codeTextBox: {
    background: "#00B14F",
    height: "10px",
    maxHeight: "10px",
    padding: "8px 20px",
  },
  codeText: {
    fontSize: "14px",
    fontFamily: "Montserrat-Medium",
    color: "#fff",
    lineHeight: 1,
  },
  reviewCount: {
    fontSize: "12px",
    color: "#ababab",
    lineHeight: 1,
  },
  reviewIcon: {
    color: "#FFCE00",
    width: "14px",
    height: "auto",
  },
  description: {
    color: "#545454",
    fontSize: "12px",
    marginTop: "6px",
  },
  container: {
    maxWidth: "375px",
    backgroundColor: "#fff",
  },
});

const FeatureProductCard = ({
  image1,
  image2,
  title,
  code,
  review,
  description,
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.featureProductImageBox} xs={12}>
        <img className={classes.featureProductImage} src={image1} />
        <img className={classes.featureProductImage} src={image2} />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.featureProductTitle}>{title}</Typography>
      </Grid>
      <Grid className={classes.codeReview} item xs={9}>
        <div className={classes.codeBox}>
          <img className={classes.codeIcon} src="/svg/crown.svg" alt="" />
        </div>
        <div className={classes.codeTextBox}>
          <Typography className={classes.codeText}> Zalo: {code}</Typography>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div>
          <StarIcon className={classes.reviewIcon} />
          <StarIcon className={classes.reviewIcon} />
          <StarIcon className={classes.reviewIcon} />
          <StarIcon className={classes.reviewIcon} />
          <StarIcon className={classes.reviewIcon} />
        </div>
        <div className={classes.reviewCount}>(102 đánh giá)</div>
      </Grid>
      <Typography className={classes.description}> {description} </Typography>
    </Grid>
  );
};

export default FeatureProductCard;
