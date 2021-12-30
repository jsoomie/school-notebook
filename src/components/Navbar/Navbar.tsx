import { Link } from "react-router-dom";
import { Typography, List, ListItem } from "@mui/material";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};
