import { Box, Container, makeStyles } from "@material-ui/core";
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

const CommentaryNews = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="TIN BÌNH LUẬN NHIỀU" />

      <Box className={classes.commentBox}>
        <Box>
          <CommentaryBox
            src="/product1.png"
            comment="Kho sỉ hàng VNXK, Cambodia uy tín, kho hàng chất lượng..."
            count="159"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default CommentaryNews;
