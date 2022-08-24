import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// pages
import Home from "./pages/Home";
import Asset from "./pages/Asset";
import Coins from "./pages/Coins";
import News from "./pages/News";
import About from "./pages/About";
import Converter from "./pages/Converter";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/assets" element={<Coins />} />
              <Route path="/assets/:coinid" element={<Asset />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/converter" element={<Converter />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
