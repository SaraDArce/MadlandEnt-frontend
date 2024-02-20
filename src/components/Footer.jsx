import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-buttons">
        <a>Contact</a>
        <a>
          <Link to="/about">About</Link>
        </a>
      </div>
    </div>
  );
}
export default Footer;
