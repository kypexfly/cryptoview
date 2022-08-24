import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
            <Link to="/">
                <i className="fa-regular fa-gem"></i> CryptoView
            </Link>
          </div>

          <input className="searchbar" placeholder="search a coin..." />

          <div className="nav">
            <Link to="/assets" className={useActiveNav("/assets")}>
            <i className="fa-solid fa-ranking-star"></i> 
            </Link>
            <Link to="/news" className={useActiveNav("/news")}>
              <i className="fa-solid fa-newspaper"></i> 
            </Link>
            <Link to="/converter" className={useActiveNav("/converter")}>
              <i className="fa-solid fa-calculator"></i> 
            </Link>
            <Link to="/about" className={useActiveNav("/about")}>
              <i className="fa-solid fa-circle-info"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
