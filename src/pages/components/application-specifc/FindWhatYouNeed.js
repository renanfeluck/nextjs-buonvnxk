import {
  Box,
  Container,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import Title from "../design/Title";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  container: {
    padding: "16px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  select: {
    width: "300px",
    height: "40px",
    backgroundColor: "#ebebeb",
    color: "#000",
  },
  input: {
    width: "300px",
  },
  fieldBox: {
    margin: "15px 0",
  },
  searchBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
    alignItems: "center",
  },
  searchText: {
    color: "#00B14F",
    fontSize: "14px",
  },
  searchButton: {
    backgroundColor: "#00B14F",
    color: "#fff",
    width: "146px",
    height: "37px",
  },
});

const FindWhatYouNeed = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Title title="TÌM ĐỒ VNXK BẠN CẦN" black />

      <Box className={classes.fieldBox}>
        <TextField
          id="outlined-basic"
          label="Tìm hàng VNXK"
          variant="filled"
          label="Địa điểm"
          className={classes.input}
        />
      </Box>
      <Box className={classes.fieldBox}>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Địa điểm</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            // value={age}
            // onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        {/* <MenuItem value="">Địa điểm</MenuItem> */}
      </Box>
      <Box className={classes.fieldBox}>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Tất cả</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            // value={age}
            // onChange={handleChange}
            className={classes.select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Box className={classes.searchBox}>
          <Typography className={classes.searchText}>
            Tìm kiếm nâng cao
          </Typography>
          <Button className={classes.searchButton}>
            {" "}
            <SearchIcon /> Tìm kiếm
          </Button>
        </Box>
      </Box>

      {/* <MenuItem value="">Địa điểm</MenuItem> */}
    </Container>
  );
};

export default FindWhatYouNeed;
