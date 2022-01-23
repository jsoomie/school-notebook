import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4">Hello World</Typography>
      </Toolbar>
    </AppBar>
  );
};
