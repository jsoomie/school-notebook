import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState, MouseEvent } from "react";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
    console.log(open);
    console.log("clicked");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ marginRight: "36px" }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Title Here
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
