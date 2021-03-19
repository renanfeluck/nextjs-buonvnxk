import {
  Box,
  Button,
  makeStyles,
  Typography,
  Container,
  Divider,
} from "@material-ui/core";
import IconTextButton from "../application-specifc/IconTextButton";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import Title from "../design/Title";

const useStyles = makeStyles({
  container: {
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  true: {
    height: "138px",
    width: "100%",
    background: "url(/product-bg.png)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  trueButton: {
    color: "#fff",
    backgroundColor: "transparent",
    border: "1px solid #fff",
    width: "160px",
    height: "37px",
    textAlign: "center",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#FFFFFF",
    opacity: "1",
    textTransform: "none",
    marginRight: "10px",
  },
  trueButtonBox: {
    display: "flex",
    alignItems: "center",
  },
  atentionText: {
    textAlign: "center",
    font: "normal normal normal 12px/20px Montserrat",
    letterSpacing: "0.09px",
    color: "#161616",
  },
  description: {
    background: "#EBEBEB 0% 0% no-repeat padding-box",
    opacity: "0.85",
    padding: "22px 38px",
  },
  descriptionTitle: {
    textAlign: "left",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#161616",
    opacity: "1",
    fontWeight: "bold",
  },
  descriptionText: {
    textAlign: "left",
    font: "normal normal normal 12px/20px Montserrat",
    letterSpacing: "0.09px",
    color: "#161616",
  },
  divider: {
    borderBottom: "1px solid #ABABAB",
    marginBottom: "12px",
  },
  atention: {
    paddingTop: "18px",
    paddingBottom: "18px",
  },
});

const ProductDescription = ({ short }) => {
  const classes = useStyles();

  if (short) {
    return (
      <Typography className={classes.descriptionText}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like). It is a
        long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem
        Ipsum is that it has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it look like
        readable English. Many desktop publishing packages and web page editors
        now use Lorem Ipsum as their default model text, and a search for 'lorem
        ipsum' will uncover many web sites still in their infancy. Various
        versions have evolved over the years, sometimes by accident, sometimes
        on purpose (injected humour and the like).
      </Typography>
    );
  }

  return (
    <>
      <Box className={classes.true}>
        <Typography> CHƯA ĐÚNG Ý? </Typography>
        <Box className={classes.trueButtonBox}>
          <Button className={classes.trueButton}> Tìm kiếm nâng cao </Button>
          <IconTextButton
            icon={<BorderColorIcon />}
            text="Bạn gửi nhu cầu"
            width="160px"
            height="37px"
            padding="0"
            selected
          />
        </Box>
      </Box>
      <Box className={classes.atention}>
        <Title title="CHÚ Ý" black />

        <Typography
          className={classes.atentionText}
          style={{ paddingRight: "36px", paddingLeft: "36px" }}
        >
          Người dùng đang không hoạt động trên 2 tháng, vui lòng liên hệ trực
          tiếp theo thông tin bên dưới, hoặc liên hệ với những mối buôn mới hoạt
          động gần đây bằng tính năng tìm kiếm nâng cao hoặc gửi nhu cầu bên
          trên
        </Typography>
      </Box>

      <Box className={classes.description}>
        <Typography className={classes.descriptionTitle}>
          Mô tả sản phẩm
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.descriptionText}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). It is a
          long established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </Typography>
      </Box>
    </>
  );
};

export default ProductDescription;
