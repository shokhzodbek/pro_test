import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header-top">
      <ul>
        <li>
          <Link to="/tashkilot"> Tashkilot</Link>
        </li>
        <li>
          {" "}
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
