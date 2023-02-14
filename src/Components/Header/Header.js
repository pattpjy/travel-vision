import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header" id="header">
      <Link to="/">
        <h1 className="homeLink">HOME</h1>
      </Link>
    </div>
  );
};

export default Header;
