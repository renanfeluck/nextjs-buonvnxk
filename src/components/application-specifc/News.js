import { makeStyles, Container, Button, Box, Grid } from "@material-ui/core";
import Title from "../design/Title";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const useStyles = makeStyles({
  backgroundBox: {
    background: "#D5D5D5",
  },
  container: {
    background: "#D5D5D5",
    paddingTop: "15px",
  },
  gridItemContainer: {
    background: "#ebebeb",
    marginBottom: "8px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    background: "#00B14F",
    color: "#fff",
    padding: "12px",
    margin: "18px auto",
    display: "block",
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

const News = () => {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box className={classes.backgroundBox}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item className={classes.gridItemContainer} xs={12}>
            <Title title="TIN CẦN MUA MỚI" black />
            <Box className={classes.sliderBox}>
              <Slider {...settings}>
                <ProductCard
                  src="/shoes.png"
                  title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
                  description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
                  phone="091 491 440"
                  review="102"
                />
                <ProductCard
                  src="/product1.png"
                  title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
                  description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
                  phone="091 491 440"
                  review="102"
                />
                <ProductCard
                  src="/product2.png"
                  title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
                  description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
                  phone="091 491 440"
                  review="102"
                />
              </Slider>
              <Button className={classes.button}> Xem thêm </Button>
            </Box>
          </Grid>

          <Grid item className={classes.gridItemContainer} xs={12}>
            <Title title="TIN CẦN MUA MỚI" black />

            <Box className={classes.sliderBox}>
              <Slider {...settings}>
                <ProductCard
                  src="/product1.png"
                  title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
                  description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
                  phone="091 491 440"
                  review="102"
                />
                <ProductCard
                  src="/product1.png"
                  title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
                  description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
                  phone="091 491 440"
                  review="102"
                />
                <ProductCard
                  src="/product2.png"
                  title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
                  description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
                  phone="091 491 440"
                  review="102"
                />
              </Slider>
              <Button className={classes.button}> Xem thêm </Button>
            </Box>
          </Grid>

          <Grid item className={classes.gridItemContainer} xs={12}>
            <Title title="CHIA SẺ KINH NGHIỆM" black />

            <Box className={classes.sliderBox}>
              <Slider {...settings}>
                <ProductCard
                  src="/product2.png"
                  title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
                  description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
                  phone="091 491 440"
                  review="102"
                />
                <ProductCard
                  src="/product1.png"
                  title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
                  description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
                  phone="091 491 440"
                  review="102"
                />
                <ProductCard
                  src="/product2.png"
                  title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
                  description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
                  phone="091 491 440"
                  review="102"
                />
              </Slider>
              <Button className={classes.button}> Xem thêm </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default News;
