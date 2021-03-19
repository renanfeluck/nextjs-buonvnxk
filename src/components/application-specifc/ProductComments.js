import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ProfilePicture from "../design/ProfilePicture";
import Title from "../design/Title";
import CommentaryBox from "./CommentaryBox";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#161616",
    padding: "25px 34px",
  },
  commentBox: {
    backgroundColor: "#fff",
  },
  reviewText: {
    fontSize: "12px",
    color: "#d5d5d5",
    marginLeft: "6px",
  },
  reviewIcon: {
    color: "#FFCE00",
    width: "14px",
    height: "auto",
  },
  reviewBox: {
    display: "flex",
    flexDirection: "row",
  },
  productImage: {
    width: "100%",
    height: "auto",
  },
  productImageBox: {
    height: "123px",
    overflow: "hidden",
  },
  commentTitle: {
    textAlign: "left",
    font: "normal normal medium 12px/20px Montserrat",
    letterSpacing: "0.09px",
    color: "#161616",
    fontSize: "12px",
    fontWeight: "bold",
  },
});

const ProductComments = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="BÌNH LUẬN MỚI NHẤT" />

      <Box className={classes.commentBox}>
        <Grid container>
          <Grid item xs={12}>
            <Box style={{ backgroundColor: "#fff" }}>
              <Box className={classes.productImageBox}>
                <img className={classes.productImage} src="/product1.jpg" />
              </Box>
              <Box style={{ padding: "10px" }}>
                <Typography className={classes.commentTitle}>
                  Kho sỉ hàng VNXK, Cambodia uy tín kho hàng chất lượng...
                </Typography>
                <Box className={classes.reviewBox}>
                  <StarIcon className={classes.reviewIcon} />
                  <StarIcon className={classes.reviewIcon} />
                  <StarIcon className={classes.reviewIcon} />
                  <StarIcon className={classes.reviewIcon} />
                  <StarIcon className={classes.reviewIcon} />
                  <Typography className={classes.reviewText}>
                    (102 đánh giá)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product1.jpg"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
              description="gửi mình bảng giá mua buôn & hình ảnh qua mail nhé"
              date="28/02/2021 15:57"
            />
          </Grid>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product1.jpg"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
              description="gửi mình bảng giá mua buôn & hình ảnh qua mail nhé"
              date="28/02/2021 15:57"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductComments;
