import { makeStyles, Box, Typography } from "@material-ui/core";
import ProfilePicture from "../design/ProfilePicture";

const useStyles = makeStyles({
  commentBox: {
    // padding: "8px",
    display: "flex",
    alignItems: "center",
    height: "56px",
  },
  comment: {
    color: "#161616",
    fontSize: "12px",
    padding: "8px",
  },
  countBox: {
    backgroundColor: "#EBEBEB",
    color: "#545454",
    fontSize: "12px",
    minWidth: "50px",
    height: "100%",
    display: "flex",
    verticalAlign: "center",
  },
});

const CommentaryBox = ({ src, comment, count }) => {
  const classes = useStyles();

  return (
    <Box className={classes.commentBox}>
      <ProfilePicture src={src} />
      <Typography className={classes.comment}> {comment} </Typography>
      <Box className={classes.countBox}>
        <Typography> +({count}) </Typography>
      </Box>
    </Box>
  );
};

export default CommentaryBox;
