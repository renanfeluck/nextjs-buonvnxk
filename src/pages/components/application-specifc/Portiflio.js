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
  },
  accordion: {
    margin: "0 !important",
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
            <Typography variant="p" className={classes.heading}>
              Thời trang nam VNXK
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography variant="p" className={classes.details}>
              Áo sơ mi Nam VNXK
            </Typography>
            <Typography variant="p" className={classes.details}>
              Quần Jean Nam VNXK
            </Typography>
            <Typography variant="p" className={classes.details}>
              Đồng hồ Nam VNXK
            </Typography>
            <Typography variant="p" className={classes.details}>
              Giày Nam các loại VNXK
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="p" className={classes.heading}>
              Thời trang Nữ VNXK
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography variant="p" className={classes.details}>
              Áo sơ mi Nam VNXK
            </Typography>
            <Typography variant="p" className={classes.details}>
              Quần Jean Nam VNXK
            </Typography>
            <Typography variant="p" className={classes.details}>
              Đồng hồ Nam VNXK
            </Typography>
            <Typography variant="p" className={classes.details}>
              Giày Nam các loại VNXK
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="p" className={classes.heading}>
              Các loại hàng VNXK khác
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Typography variant="p" className={classes.details}>
              Áo sơ mi Nam VNXK
            </Typography>
            <Typography variant="p" className={classes.details}>
              Quần Jean Nam VNXK
            </Typography>
            <Typography variant="p" className={classes.details}>
              Đồng hồ Nam VNXK
            </Typography>
            <Typography variant="p" className={classes.details}>
              Giày Nam các loại VNXK
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Portifolio;
