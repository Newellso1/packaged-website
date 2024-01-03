import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Why from "./Why";
import Download from "./Download";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Faq from "./Faq";
import Policies from "./Policies";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/why" element={<Why />} />
        <Route path="/download" element={<Download />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
