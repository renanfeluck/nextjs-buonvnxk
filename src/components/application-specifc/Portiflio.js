import {
  makeStyles,
  Typography,
  Container,
  Box,
  Divider,
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Title from "../design/Title";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#00B14F",
    display: "flex",
    justifyContent: "center",
    padding: "15px 0",
    height: "calc(100% - 30px)",
  },
  title: {
    color: "#fff",
    fontSize: "20px",
  },
  heading: {
    color: "#161616",
    fontWeight: "600",
  },
  details: {
    height: "46px",
    backgroundColor: "#F7F7F7",
    fontSize: "14px",
    width: "calc(100% - 92px)",
    margin: "auto",
    padding: "15px 46px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  accordion: {
    margin: "0 !important",
    width: "302px",
  },
  accordionDetails: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
  accordionBox: {
    maxWidth: "302px",
  },
  divider: {
    backgroundColor: "#fff",
    width: "80px",
    display: "block",
    margin: "15px auto",
    height: "2px",
  },
});

const Portifolio = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.accordionBox}>
        <Title title="DANH MỤC SẢN PHẨM" />

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Thời trang nam VNXK
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Áo sơ mi Nam VNXK
            </Typography>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Quần Jean Nam VNXK
            </Typography>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Đồng hồ Nam VNXK
            </Typography>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Giày Nam các loại VNXK
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Thời trang Nữ VNXK
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Áo sơ mi Nam VNXK
            </Typography>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Quần Jean Nam VNXK
            </Typography>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Đồng hồ Nam VNXK
            </Typography>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Giày Nam các loại VNXK
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              Các loại hàng VNXK khác
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Áo sơ mi Nam VNXK
            </Typography>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Quần Jean Nam VNXK
            </Typography>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Đồng hồ Nam VNXK
            </Typography>
            <Typography className={classes.details}>
              <ArrowRightIcon /> Giày Nam các loại VNXK
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Portifolio;
