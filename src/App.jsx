import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                            <Route path="/menu" element={<Menu />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
