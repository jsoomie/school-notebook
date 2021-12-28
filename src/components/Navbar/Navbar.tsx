import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link to="/">School Notebook</Link>
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
