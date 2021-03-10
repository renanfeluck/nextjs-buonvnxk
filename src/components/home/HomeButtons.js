import { Box, Container, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import IconTextButton from "../application-specifc/IconTextButton";
import MailIcon from "@material-ui/icons/Mail";
import ShareIcon from "@material-ui/icons/Share";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles({
  backgroundBox: {
    backgroundColor: "#161616",
  },
  container: {
    backgroundColor: "#161616",
    padding: "36px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    color: "#000",
    width: "22px",
  },
});

const WriteIcon = () => {
  const classes = useStyles();

  return <SearchIcon className={classes.icon} />;
};

const Mail = () => {
  const classes = useStyles();

  return <MailIcon className={classes.icon} />;
};

const Crown = () => {
  const classes = useStyles();

  return <img src="/svg/crown.svg" />;
};

const Share = () => {
  const classes = useStyles();

  return <ShareIcon className={classes.icon} />;
};

const Add = () => {
  const classes = useStyles();

  return <PersonAddIcon className={classes.icon} />;
};

const HomeButtons = () => {
  const classes = useStyles();

  return (
    <Box className={classes.backgroundBox}>
      <Container className={classes.container}>
        <IconTextButton icon={<WriteIcon />} text="Đăng tin mua bán" />
        <IconTextButton icon={<Mail />} text="Theo dõi" />
        <IconTextButton icon={<Crown />} text="Kiếm thưởng" />
        <IconTextButton icon={<Share />} text="Giao lưu chia sẻ" />
        <IconTextButton icon={<Add />} text="Kết bạn" />
      </Container>
    </Box>
  );
};

export default HomeButtons;
