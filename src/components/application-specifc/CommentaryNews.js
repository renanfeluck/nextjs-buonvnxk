import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import ProfilePicture from "../design/ProfilePicture";
import Title from "../design/Title";
import CommentaryBox from "./CommentaryBox";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#161616",
    padding: "25px 34px",
    height: "100%",
  },
  commentBox: {
    backgroundColor: "#fff",
  },
});

const CommentaryNews = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="TIN BÌNH LUẬN NHIỀU" />

      <Box className={classes.commentBox}>
        <Grid container>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product1.jpg"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
            />
          </Grid>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product1.jpg"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
            />
          </Grid>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product2.jpg"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
            />
          </Grid>
          <Grid item xs={12}>
            <CommentaryBox
              src="/product1.jpg"
              comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
              count="159"
            />
          </Grid>

          <CommentaryBox
            src="/product2.jpg"
            comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
            count="159"
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default CommentaryNews;
