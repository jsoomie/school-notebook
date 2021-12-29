import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link to="/">
            <Typography variant="h3">School Notebook</Typography>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sections">Sections</Link>
        </li>
      </ul>
    </nav>
  );
};
