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
          <Routes>
            <Route path="/" element={<Home title="CryptoView" />} />
            <Route path="/assets" element={<Coins title="Assets - CryptoView" />} />
            <Route path="/assets/:coinid" element={<Asset />} />
            <Route path="/news" element={<News title="News - CryptoView" />} />
            <Route path="/about" element={<About title="About - CryptoView" />} />
            <Route path="/converter" element={<Converter title="Converter - CryptoView" />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
