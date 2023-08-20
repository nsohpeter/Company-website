import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Sidebar from "./Components/Sidebar/Sidebar";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import Service from "./Pages/Service/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
            <Route path="service" element={<Service />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
