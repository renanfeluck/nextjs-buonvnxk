import {
  Box,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";

const useStyles = makeStyles({
  backgroundBox: {},
  container: {
    height: "204px",
    backgroundColor: "#00B14F",
    padding: "0 30px",
    background: "url(/product-bg.png)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    boxShadow: "inset 0 0 0 2000px rgba(0, 177, 79, 0.8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "16px",
    paddingBottom: "16px",
  },
  title: {
    fontSize: "24px",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    letterSpacing: "0.11px",
    color: "#FFFFFF",
    opacity: "1",
    fontSize: "14px",
  },
  divider: {
    borderBottom: "2px solid #FFFFFF",
    width: "66px",
    marginBottom: "16px",
  },
  warningIcon: {
    color: "#fff",
    width: "36px",
    height: "31px",
  },
});

const ProductNote = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <WarningIcon className={classes.warningIcon} />
      <Typography variant="h4" className={classes.title}>
        LƯU Ý KHI LIÊN HỆ
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.subtitle}>
        Khi liên hệ, nhớ nhắc "Mình là khách hàng thân thiết của BuonVNXK.com"
        hoặc "Thấy thông tin bạn trên BuonVNXK.com" để nhận Giá và Ưu Đãi Tốt
        Nhất
      </Typography>
    </Container>
  );
};

export default ProductNote;
