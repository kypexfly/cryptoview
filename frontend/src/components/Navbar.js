import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div id="navbar">
        <div className="navcont">
          <div id="logo">
            <a href="/">
              <h3>
                <i className="fa-regular fa-gem"></i> cryptoview
              </h3>
            </a>
          </div>

          {/* <input className="searchbar" placeholder="search a coin..." /> */}
          
          <div className="nav">
            <Link to="/converter">
              <i class="fa-solid fa-calculator"></i> Converter
            </Link>
            <Link to="/news">
              <i class="fa-solid fa-newspaper"></i> News
            </Link>
            <Link to="/about">
              <i class="fa-solid fa-circle-info"></i> About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
