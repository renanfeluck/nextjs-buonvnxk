import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  profilePicture: {
    width: "40px",
    height: "auto",
    borderRadius: "100%",
  },
});

const ProfilePicture = ({ src, width, height }) => {
  const classes = useStyles();

  return (
    <img
      className={classes.profilePicture}
      src={src}
      style={{
        width: width ?? "",
        height: height ?? "",
        minHeight: height ?? "",
        minWidth: width ?? "",
      }}
    />
  );
};

export default ProfilePicture;
