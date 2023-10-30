import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";
import Link from "next/link";

export default function TemporaryDrawer(props) {
  const { links, currentPath } = props;
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display={"flex"} justifyContent={"flex-end"}>
        <IconButton
          sx={{
            color: "inherit",
          }}
        >
          <Close fontSize="large" />
        </IconButton>
      </Box>
      <List sx={{ mt: 3 }}>
        {links.map((link, index) => (
          <ListItem key={link.path} disablePadding>
            <Link href={link.path} style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  {link.icone}
                </ListItemIcon>
                <ListItemText
                  primary={link.texto}
                  primaryTypographyProps={{
                    style: {
                      fontWeight: currentPath === link.path ? "bold" : "normal",
                    },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer("right", true)}
          edge="start"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            sx: {
              backgroundColor: "#202020",
              color: "#f7f7f7",
            },
          }}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
