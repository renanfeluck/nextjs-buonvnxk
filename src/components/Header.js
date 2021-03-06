import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import SearchIcon from "@material-ui/icons/Search";

import { fade, makeStyles } from "@material-ui/core/styles";
import TemporaryDrawer from "./application-specifc/TemporaryDrawer";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 0,
    color: "#000",
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#fff",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    color: "#000",
    marginRight: "15px",
    width: "16px",
    height: "16px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    // border: "solid 1px #000",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      display: "block",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  iconBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {},
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Box style={{ height: "56px" }}>
      <TemporaryDrawer open={open} setOpen={setOpen} />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.iconBox}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => {
                setOpen(!open);

                console.log("open", open);
              }}
            >
              <MenuIcon />
            </IconButton>
            <img className={classes.image} src="/svg/logo.svg" alt="Buonvnxk" />
          </div>
          <div className={classes.iconBox}>
            <img src="/svg/crown.svg" alt="" className={classes.icon} />
            <BorderColorIcon className={classes.icon} />
            <SearchIcon className={classes.icon} />
            <div className={classes.search}>
              {/* <div className={classes.searchIcon}> */}
              {/* </div> */}
              {/* <InputBase
                placeholder="Search???"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              /> */}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
