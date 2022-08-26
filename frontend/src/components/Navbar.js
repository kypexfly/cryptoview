import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import SearchAssets from "./SearchAssets";


const Navbar = () => {

  const useActiveNav = (loc) => {
    const location = useLocation();
    if (location.pathname === loc) {
      return "active";
    }
  };

  return (
    <header>
      <div id="navbar">
        <div className="navcont">
          <div id="logo">
            <Link to="/"><i className="fa-regular fa-gem"></i> &nbsp; CryptoView</Link>
          </div>

          <SearchAssets />

          <div className="nav">
            <Link to="/assets" data-tip="Assets" className={useActiveNav("/assets")}>
              <i className="fa-solid fa-ranking-star"></i>
            </Link>
            <Link to="/news" data-tip="News" className={useActiveNav("/news")}>
              <i className="fa-solid fa-newspaper"></i>
            </Link>
            <Link to="/converter" data-tip="Converter" className={useActiveNav("/converter")}>
              <i className="fa-solid fa-calculator"></i>
            </Link>
            <Link to="/about" data-tip="About" className={useActiveNav("/about")}>
              <i className="fa-solid fa-circle-info"></i>
            </Link>
            <span>
              <Link to="/signup" data-tip="Sign Up" className={useActiveNav("/signup")}>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              </Link>
              <Link to="/login" data-tip="Login" className={useActiveNav("/login")}>
                <i className="fa-solid fa-user"></i>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <ReactTooltip />
    </header>
  );
};

export default Navbar;
