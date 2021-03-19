import { Box, Container, makeStyles } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ProductCard from "../application-specifc/ProductCard";
import Title from "../design/Title";
import FeatureProductCard from "../application-specifc/FeatureProductCard";

const useStyles = makeStyles({
  container: {
    paddingTop: "16px",
    paddingBottom: "16px",
  },
  navigationIcon: {
    display: "flex",
    color: "#000",
  },
  sliderBox: {
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "350px",
    width: "90%",
  },
});

const ProductFeature = () => {
  const classes = useStyles();

  const product = {
    image1: "/product1.jpg",
    image2: "product2.jpg",
    title: "KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG",
    code: "0961535247",
    description:
      "Bên mình chuyên bỏ sỉ mặt hàng thời trang cho các shop lớn nhỏ trong cả nước, nguồn hàng xuất dư xịn, mặt hàng đa dạng: Quần áo, B ...",
  };

  function NextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          display: "block",
          position: "absolute",
          right: "-25px",
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
          left: "-25px",
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
    <Container className={classes.container}>
      <Title title="HÀNG VNXK NỔI BẬT" black />
      <Box>
        <Box className={classes.sliderBox}>
          <Slider {...settings}>
            <FeatureProductCard
              image1={product.image1}
              image2={product.image2}
              title={product.title}
              code={product.code}
              description={product.description}
              image2Featured
            />
            <FeatureProductCard
              image1={product.image1}
              image2={product.image2}
              title={product.title}
              code={product.code}
              description={product.description}
              image2Featured
            />
            <FeatureProductCard
              image1={product.image1}
              image2={product.image2}
              title={product.title}
              code={product.code}
              description={product.description}
              image2Featured
            />
          </Slider>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductFeature;
