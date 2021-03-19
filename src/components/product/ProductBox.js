import {
  Button,
  Grid,
  makeStyles,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import Product from "../../pages/product";
import StarIcon from "@material-ui/icons/Star";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MessageIcon from "@material-ui/icons/Message";

const useStyles = makeStyles({
  container: {},
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
  thumb: {
    width: "68px",
    height: "68px",
  },
  mainImage: {
    width: "100%",
    height: "auto",
  },
  title: {
    letterSpacing: "var(--unnamed-character-spacing-0-11)",
    color: "var(--unnamed-color-161616)",
    textAlign: "left",
    font: "normal normal medium 14px/22px Montserrat",
    letterSpacing: "0.11px",
    color: "#161616",
    opacity: "1",
  },
  views: {
    font:
      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/16px var(--unnamed-font-family-montserrat)",
    color: "var(--unnamed-color-545454)",
    textAlign: "left",
    font: "normal normal normal 12px/16px Montserrat",
    letterSpacing: "0.07px",
    color: "#545454",
    opacity: "1",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  socialButton: {
    background: "#0180C7",
    color: "#fff",
    fontSize: "10px",
    height: "16px",
  },
  socialBox: {
    display: "flex",
  },
  icon: {
    width: "16px",
    height: "16px",
    marginRight: "6px",
  },
  likeIcon: {
    width: "14px",
    height: "14px",
  },
});

const ProductBox = ({ hideThumb }) => {
  const classes = useStyles();

  const images = [
    "/product1.jpg",
    "/product2.jpg",
    "/shoes.jpg",
    "/product1.jpg",
    "/product2.jpg",
    "/shoes.jpg",
    "/product1.jpg",
    "/product2.jpg",
  ];

  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>
        MỌI MỐI BUÔN SỈ LẺ CAMBODIA - VNXK TRUNG - HÀN - NHẬT
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography className={classes.views}>
            <VisibilityIcon className={classes.icon} /> 588 lượt xem
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography className={classes.views}>
            <MessageIcon className={classes.icon} /> 1.280 bình luận
          </Typography>
        </Grid>

        <Grid item xs={7}>
          <Typography className={classes.reviewText}>
            <StarIcon className={classes.reviewIcon} />
            <StarIcon className={classes.reviewIcon} />
            <StarIcon className={classes.reviewIcon} />
            <StarIcon className={classes.reviewIcon} />
            <StarIcon className={classes.reviewIcon} /> (125 đánh giá)
          </Typography>
        </Grid>

        <Grid className={classes.socialBox} item xs={5}>
          <Box pr={1}>
            <Button className={classes.socialButton}>
              <ThumbUpIcon className={classes.likeIcon} /> Thích
            </Button>
          </Box>
          <Box>
            <Button className={classes.socialButton}> Chia sé </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <img className={classes.mainImage} src="/product1.jpg" />
        </Grid>

        {!hideThumb &&
          images.map((product) => (
            <Grid item xs={3}>
              <img className={classes.thumb} src={product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default ProductBox;
