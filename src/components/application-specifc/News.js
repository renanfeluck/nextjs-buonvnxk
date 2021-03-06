import { makeStyles, Container, Button, Box, Grid } from "@material-ui/core";
import Title from "../design/Title";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

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
    padding: "6px 8px",
    margin: "18px auto",
    display: "block",
    boxShadow: "0px 3px 6px #00000029",
    maxHeight: "37px",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#FFFFFF",
    textTransform: "none",
  },
  sliderBox: {
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "350px",
    width: "90%",
  },
  margin: {
    marginBottom: "8px",
  },
  navigationIcon: {
    display: "flex",
  },
});

const News = ({ onlyChia }) => {
  const classes = useStyles();

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
    <Box className={classes.backgroundBox}>
      <Container className={classes.container}>
        <Grid container>
          {!onlyChia && (
            <>
              <Grid item className={classes.gridItemContainer} xs={12}>
                <Title title="TIN C???N MUA M???I" black />
                <Box className={classes.sliderBox}>
                  <Slider {...settings}>
                    <ProductCard
                      src="/shoes.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                    <ProductCard
                      src="/product1.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                    <ProductCard
                      src="/product2.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                  </Slider>
                  <Button className={classes.button}> Xem th??m </Button>
                </Box>
              </Grid>

              <Grid item className={classes.gridItemContainer} xs={12}>
                <Title title="TIN C???N MUA M???I" black />

                <Box className={classes.sliderBox}>
                  <Slider {...settings}>
                    <ProductCard
                      src="/product1.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                    <ProductCard
                      src="/product1.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                    <ProductCard
                      src="/product2.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                  </Slider>
                  <Button className={classes.button}> Xem th??m </Button>
                </Box>
              </Grid>
            </>
          )}

          <Grid item className={classes.gridItemContainer} xs={12}>
            <Title title="CHIA S??? KINH NGHI???M" black />

            <Box className={classes.sliderBox}>
              <Slider {...settings}>
                <Box>
                  <Box className={classes.margin}>
                    <ProductCard
                      src="/product2.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                  </Box>

                  <Box className={classes.margin}>
                    <ProductCard
                      src="/product1.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                  </Box>
                  <Box className={classes.margin}>
                    <ProductCard
                      src="/product2.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                  </Box>
                </Box>

                <Box>
                  <Box className={classes.margin}>
                    <ProductCard
                      src="/product2.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                  </Box>
                  <Box className={classes.margin}>
                    <ProductCard
                      src="/product1.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                  </Box>
                  <Box className={classes.margin}>
                    <ProductCard
                      src="/product2.jpg"
                      title="KHO S??? H??NG VNXK, CAMBODIA UY T??N, KHO H??NG CH???T L?????NG"
                      description="M??nh b??n l?? ??o s?? mi nam hi???u polo xu???t m??? x???n ????t, ch???t ?????p ch???t l?????ng kh???i b??n, m???i .."
                      phone="091 491 440"
                      review="102"
                    />
                  </Box>
                </Box>
              </Slider>
              <Button className={classes.button}> Xem th??m </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default News;
