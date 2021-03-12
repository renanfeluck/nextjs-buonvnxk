import { makeStyles, Box, Typography } from "@material-ui/core";
import ProfilePicture from "../design/ProfilePicture";

const useStyles = makeStyles({
  commentBox: {
    // padding: "8px",
    display: "flex",
    alignItems: "center",
    minHeight: "56px",
    flexDirection: "column",
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
    alignItems: "center",
  },
  commentTitleBox: {
    display: "flex",
    alignItems: "center",
    height: "56px",
  },
  commentDescriptionBox: {
    display: "flex",
    flexDirection: "column",
  },
  descriptionText: {
    font:
      "italic normal var(--unnamed-font-weight-normal) 12px/20px var(--unnamed-font-family-montserrat)",
    color: "var(--unnamed-color-545454)",
    textAlign: "left",
    font: "italic normal normal 12px/20px Montserrat",
    fontSize: "12px",
    letterSpacing: "0.09px",
    color: "#545454",
    opacity: "1",
  },
  commentDate: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const CommentaryBox = ({ src, comment, count, description, date }) => {
  const classes = useStyles();

  return (
    <Box className={classes.commentBox}>
      <Box className={classes.commentTitleBox}>
        <ProfilePicture src={src} />
        <Typography className={classes.comment}> {comment} </Typography>
        {!description && (
          <Box className={classes.countBox}>
            <Typography> +({count}) </Typography>
          </Box>
        )}
      </Box>
      {description && date && (
        <Box className={classes.commentDescriptionBox}>
          <Box className={classes.commentDate}>
            <Typography className={classes.descriptionText}>Sơn hải</Typography>
            <Typography className={classes.descriptionText}>{date}</Typography>
          </Box>
          <Typography className={classes.descriptionText}>
            {description}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default CommentaryBox;
