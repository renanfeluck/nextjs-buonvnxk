import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import ProfilePicture from "../design/ProfilePicture";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarIcon from "@material-ui/icons/Star";
import ShareIcon from "@material-ui/icons/Share";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: 0,
  },
  fullList: {
    width: "auto",
  },
  select: {
    width: "100%",
    height: "38px",
    font:
      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-montserrat)",
    letterSpacing: "var(--unnamed-character-spacing-0-11)",
    color: "var(--unnamed-color-161616)",
    textAlign: "left",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#161616",
    opacity: "1",
  },
  formControl: {
    width: "100%",
  },
  item: {
    width: "100%",
    margin: 0,
    padding: 0,
  },
  drawer: {
    padding: 0,
    margin: 0,
    marginTop: "56px",
  },
  listBox: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100%",
  },
  profile: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  crown: {
    color: "#FFD200",
    width: "20px",
    height: "20px",
    marginRight: "6px",
  },
  name: {
    font:
      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-14)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-montserrat)",
    letterSpacing: "var(--unnamed-character-spacing-0-11)",
    color: "var(--unnamed-color-161616)",
    textAlign: "left",
    font: "normal normal medium 14px/24px Montserrat",
    letterSpacing: "0.11px",
    color: "#161616",
    opacity: "1",
    marginTop: "14px",
  },
  subtitle: {
    font:
      "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 10px/var(--unnamed-line-spacing-24) var(--unnamed-font-family-montserrat)",
    color: "var(--unnamed-color-545454)",
    textAlign: "left",
    font: "normal normal normal 10px/24px Montserrat",
    letterSpacing: "0.08px",
    color: "#545454",
    opacity: "1",
    display: "flex",
  },
});

export default function TemporaryDrawer({ open, setOpen }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={classes.listBox}>
          <List className={classes.list}>
            <ListItem className={classes.item}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  Tiếng Việt
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
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
            </ListItem>

            <ListItem className={classes.profile}>
              <ProfilePicture src="./shoes.png" width="60px" height="60px" />
              <Typography className={classes.name}>
                Nguyễn Thị Trung Đức
              </Typography>
              <Typography className={classes.subtitle} variant="span">
                <img className={classes.crown} src="/svg/crown.svg" />
                Tài khoản VIP
              </Typography>
            </ListItem>

            <Divider />

            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Mua bán sỉ" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Gần bạn" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Kinh nghiệm" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary="Chia sẻ" />
            </ListItem>
            <Divider />
          </List>

          <List>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Quản lý tài khoản" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Đăng xuất" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
