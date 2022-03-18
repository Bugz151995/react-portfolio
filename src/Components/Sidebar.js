import { Link } from "react-router-dom";
import "boxicons";

const sidebar = {
  backgroundColor: 'white',
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '40px',
  padding: '0 1rem'
};

const sidebar_brand = {
  color: 'white',
  marginBottom: 'auto',
  marginTop: '1rem'
};

const sidebar_link_container = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 'auto'
};

const sidebar_link = {
  marginBottom: '0.5rem',
  color: '#8F7D5E'
};

const sidebar_social_container = {
  marginBottom: '1rem'
};

const w100 = {
  width: '100%'
};

function Sidebar() {
  return (
    <nav style={sidebar}>
      <Link style={sidebar_brand} to="/">
        <img src={require("../assets/brand.png")} style={w100} alt="" />
      </Link>

      <div style={sidebar_link_container}>
        <Link style={sidebar_link} to="/">
          <i className="bx bx-home bx-md"></i>
        </Link>
        <Link style={sidebar_link} to="/skills">
          <i className="bx bx-wrench bx-md"></i>
        </Link>
        <Link style={sidebar_link} to="/experience">
          <i className="bx bx-briefcase-alt-2 bx-md"></i>
        </Link>
        <Link style={sidebar_link} to="/aboutme">
          <i className="bx bx-info-circle bx-md"></i>
        </Link>
      </div>

      <div style={sidebar_social_container}>
        <a href="https://web.facebook.com/Ryan.bugz/">
          <i className="bx bxl-facebook-square bx-md"></i>
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;