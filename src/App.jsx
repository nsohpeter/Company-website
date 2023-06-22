import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

import Sidebar from "./Components/Sidebar/Sidebar";
import Submenu from "./Components/Submenu/Submenu";

import Accountable from "./Pages/Accountability/Accountable";
import Children from "./Pages/Children/Children";
import Contact from "./Pages/Contact/Contact";
import DonationImpact from "./Pages/DonationsImpact/DonationImpact";
import History from "./Pages/History/History";
import Impact from "./Pages/Impact/Impact";
import Innovation from "./Pages/Innovation/Innovation";
import Insurance from "./Pages/Insurance/Insurance";
import Leadership from "./Pages/Leadership/Leadership";
import Vision from "./Pages/Vision/Vision";
import Women from "./Pages/Women/Women";
import Branch from "./Pages/Workplaces/Branch";
import About from "./Pages/About/About";
import Donation from "./Pages/Donations/Donation";
import Volunteer from "./Pages/Volunteer/Volunteer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar />
        <Submenu />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="donation" element={<Donation />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="accountability" element={<Accountable />} />
            <Route path="children" element={<Children />} />
            <Route path="contact" element={<Contact />} />
            <Route path="donations" element={<DonationImpact />} />
            <Route path="history" element={<History />} />
            <Route path="impact" element={<Impact />} />
            <Route path="innovations" element={<Innovation />} />
            <Route path="insurance" element={<Insurance />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="vision" element={<Vision />} />
            <Route path="women" element={<Women />} />
            <Route path="branch" element={<Branch />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
