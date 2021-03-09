import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  profilePicture: {
    width: "40px",
    height: "auto",
    borderRadius: "100%",
  },
});

const ProfilePicture = ({ src }) => {
  const classes = useStyles();

  return <img className={classes.profilePicture} src={src} />;
};

export default ProfilePicture;
