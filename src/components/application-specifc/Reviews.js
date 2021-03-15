import {
  Container,
  Divider,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Title from "../design/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const useStyles = makeStyles({
  reviewBox: {
    background: "#fff",
    width: "300px",
    height: "270px",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    position: "relative",
  },
  container: {
    background: "#00B14F",
    padding: "32px 16px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "Center",
  },
  reviewIcon: {
    color: "#FFCE00",
    width: "20px",
    height: "auto",
    padding: "8px",
  },
  formatQuote: {
    color: "#FFCE00",
    width: "85px",
    height: "85px",
    transform: "rotate(180deg)",
    position: "absolute",
    top: "-40px",
  },
  icons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    fontSize: "14px",
    color: "#161616",
  },
  name: {
    color: "#161616",
    fontSize: "14px",
    textAlign: "right",
  },
  link: {
    fontSize: "12px",
    color: "#545454",
    textAlign: "right",
  },
  divider: {
    height: "2px",
  },
  starBox: {
    position: "absolute",
    right: "16px",
  },
  navigationIcon: {
    color: "#fff",
  },
});

const ReviewBox = () => {
  const classes = useStyles();

  function NextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: "-35px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={onClick}
      >
        <NavigateNextIcon className={classes.navigationIcon} />
      </div>
    );
  }

  function PrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        // className={className
        style={{
          ...style,
          display: "block",
          position: "absolute",
          left: "-35px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
        onClick={onClick}
      >
        <NavigateBeforeIcon className={classes.navigationIcon} />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box className={classes.reviewBox}>
      <Box className={classes.icons}>
        <FormatQuoteIcon className={classes.formatQuote} />
        <Box className={classes.starBox}>
          <StarIcon className={classes.reviewIcon} />
          <StarIcon className={classes.reviewIcon} />
          <StarIcon className={classes.reviewIcon} />
          <StarIcon className={classes.reviewIcon} />
          <StarIcon className={classes.reviewIcon} />
        </Box>
      </Box>
      <Slider {...settings}>
        <Box>
          <Typography className={classes.description}>
            Buonvnxk.com là hệ thống giúp tự động kết nối khách hàng và các mối
            buôn hàng VNXK, được thiết kế dành riêng cho các nhà buôn sỉ đồ Xuất
            Khẩu và khách hàng có thể tìm thấy nhau.
          </Typography>
          <Box>
            <Divider className={classes.divider} />
            <Typography className={classes.name}>VÕ ĐÌNH THỊNH</Typography>
            <Typography className={classes.link}>dovnxk.com</Typography>
          </Box>
        </Box>

        <Box>
          <Typography className={classes.description}>
            Buonvnxk.com là hệ thống giúp tự động kết nối khách hàng và các mối
            buôn hàng VNXK, được thiết kế dành riêng cho các nhà buôn sỉ đồ Xuất
            Khẩu và khách hàng có thể tìm thấy nhau.
          </Typography>
          <Box>
            <Divider className={classes.divider} />
            <Typography className={classes.name}>VÕ ĐÌNH THỊNH</Typography>
            <Typography className={classes.link}>dovnxk.com</Typography>
          </Box>
        </Box>
      </Slider>
    </Box>
  );
};

const Review = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="cảm nhận của NGƯỜI DÙNG" />
      <ReviewBox />
    </Container>
  );
};

export default Review;
