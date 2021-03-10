import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import ProfilePicture from "../design/ProfilePicture";
import Title from "../design/Title";
import CommentaryBox from "./CommentaryBox";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#161616",
    padding: "25px 34px",
  },
  commentBox: {
    backgroundColor: "#fff",
  },
});

const LastComments = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="BÌNH LUẬN MỚI NHẤT" />

      <Box className={classes.commentBox}>
        <Grid container>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product1.png"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
              description="gửi mình bảng giá mua buôn & hình ảnh qua mail nhé"
              date="28/02/2021 15:57"
            />
          </Grid>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product1.png"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
              description="gửi mình bảng giá mua buôn & hình ảnh qua mail nhé"
              date="28/02/2021 15:57"
            />
          </Grid>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product2.png"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
              description="gửi mình bảng giá mua buôn & hình ảnh qua mail nhé"
              date="28/02/2021 15:57"
            />
          </Grid>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product1.png"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
              description="gửi mình bảng giá mua buôn & hình ảnh qua mail nhé"
              date="28/02/2021 15:57"
            />
          </Grid>

          <CommentaryBox
            src="/product2.png"
            comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
            count="159"
            description="gửi mình bảng giá mua buôn & hình ảnh qua mail nhé"
            date="28/02/2021 15:57"
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default LastComments;
