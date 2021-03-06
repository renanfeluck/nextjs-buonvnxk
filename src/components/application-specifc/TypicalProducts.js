import { Container, makeStyles, Grid, Box } from "@material-ui/core";
import Title from "../design/Title";
import ProductCard from "./ProductCard";

const useStyles = makeStyles({
  backgroundBox: {
    backgroundColor: "#00B14F",
  },
  container: {
    backgroundColor: "#00B14F",
    padding: "25px 34px",
  },
});

const TypicalProducts = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="MỐI HÀNG TIÊU BIỂU" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <ProductCard
            src="/product1.jpg"
            title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
            description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
            phone="091 491 440"
            review="102"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProductCard
            src="/product1.jpg"
            title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
            description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
            phone="091 491 440"
            review="102"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ProductCard
            src="/product1.jpg"
            title="KHO SỈ HÀNG VNXK, CAMBODIA UY TÍN, KHO HÀNG CHẤT LƯỢNG"
            description="Mình bán lô áo sơ mi nam hiệu polo xuất mỹ xịn đét, chất đẹp chất lượng khỏi bàn, mọi .."
            phone="091 491 440"
            review="102"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TypicalProducts;
