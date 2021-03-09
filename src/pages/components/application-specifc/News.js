import { makeStyles, Container, Button } from "@material-ui/core";
import Title from "../design/Title";
import ProductCard from "./ProductCard";

const useStyles = makeStyles({
  container: {
    background: "#ebebeb",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  button: {
    background: "#00B14F",
    color: "#fff",
    padding: "12px",
    margin: "18px auto",
    display: "block",
  },
});

const News = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="TIN CẦN MUA MỚI" black />

      <ProductCard
        src="/shoes.png"
        title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
        description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
        phone="091 491 440"
        review="102"
      />

      <Button className={classes.button}> Xem thêm </Button>
    </Container>
  );
};

export default News;
