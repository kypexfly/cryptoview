import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoinList from "./pages/Home";
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
              <Route path="/" element={<CoinList />} />
              <Route path="/about" element={<About />} />
              <Route path="/converter" element={<Converter />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
