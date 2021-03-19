import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Slider from "react-slick";
import Title from "../design/Title";
import SmallCard from "./SmallCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#EBEBEB",
    padding: "20px",
  },
  sliderBox: {
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "350px",
    width: "90%",
  },
  productBox: {
    marginTop: "28px",
    background: "#fff",
    padding: "10px 0",
  },
  product: {
    marginBottom: "10px",
  },
  linkBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  button: {
    background: "#00B14F 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    opacity: "1",
    color: "#fff",
  },
  link: {
    textAlign: "center",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#00B14F",
    opacity: "1",
    fontSize: "14px",
  },
});

const CategoryDetails = () => {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Container className={classes.container}>
      <Title black title="THỜI TRANG NỮ" />

      <Box className={classes.sliderBox}>
        <Slider {...settings}>
          <SmallCard src="/bag.png" title="TÚI XÁCH PHỤ KIỆN" />
          <SmallCard src="/tshirt.png" title="ÁO THUN MÀU ĐỎ" />
          <SmallCard src="/dress.png" title="VÁY ĐẦM DẠ HỘI" />
          <SmallCard src="/tshirt.png" title="VÁY" />
        </Slider>
      </Box>

      <Box className={classes.productBox}>
        <Box className={classes.product}>
          <ProductCard
            src="/shoes.jpg"
            title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
            description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
            phone="091 491 440"
            review="102"
            background="#ebebeb"
          />
        </Box>
        <Box className={classes.product}>
          <ProductCard
            src="/product1.jpg"
            title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
            description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
            phone="091 491 440"
            review="102"
            background="#ebebeb"
          />
        </Box>
        <Box className={classes.product}>
          <ProductCard
            src="/product2.jpg"
            title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
            description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
            phone="091 491 440"
            review="102"
            background="#ebebeb"
          />
        </Box>
      </Box>

      <Box className={classes.linkBox}>
        <Typography className={classes.link}>Tìm kiếm nâng cao</Typography>
        <Button className={classes.button}>
          {" "}
          <MailIcon /> Theo dõi tin mới
        </Button>
      </Box>
    </Container>
  );
};

export default CategoryDetails;
