import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div id="navbar">
        <div className="navcont">
          <div id="logo">
            <a href="/">
              <h2>cryptoSpace</h2>
            </a>
          </div>

            <input className="searchbar" />

          <div className="nav">

            <Link to="/news">News</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
