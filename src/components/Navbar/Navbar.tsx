import { Link } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" className="navbar">
        <Toolbar>
          <List>
            <ListItem className="logo">
              <Link to="/">
                <Typography variant="h3">School Notebook</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <Typography variant="body1">Home</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/sections">
                <Typography variant="body1">Sections</Typography>
              </Link>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
