import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

import Sidebar from "./Components/Sidebar/Sidebar";
import Submenu from "./Components/Submenu/Submenu";

import Contact from "./Pages/Contact/Contact";
import Vision from "./Pages/Vision/Vision";
import Donation from "./Pages/Donations/Donation";
import Teaching from "./Pages/Teaching/Teaching";
import Volunteer from "./Pages/volunteer/Volunteer";

/* import Accountable from "./Pages/Accountability/Accountable";
import Children from "./Pages/Children/Children";
import DonationImpact from "./Pages/DonationsImpact/DonationImpact";
import History from "./Pages/History/History";
import Impact from "./Pages/Impact/Impact";
import Innovation from "./Pages/Innovation/Innovation";
import Insurance from "./Pages/Insurance/Insurance";
import Leadership from "./Pages/LeaderShip/Leadership";
import Women from "./Pages/Women/Women";
import Branch from "./Pages/Workplaces/Branch";

import SpecialNeedEdu from "./Pages/SpecialNeedEdu/SpecialNeed";
import Empowerment from "./Pages/Empowerment/Empowerment";
import DigitalLiteracy from "./Pages/Digital-Literacy/DigitalLiteracy";
import AdolescentEdu from "./Pages/AdolescentEdu/AdolescentEdu"; */

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
            <Route path="donation" element={<Donation />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="vision" element={<Vision />} />
            <Route path="teaching" element={<Teaching />} />

            {/*  <Route path="about" element={<About />} />
            <Route path="accountability" element={<Accountable />} />
            <Route path="children" element={<Children />} />
            <Route path="donations" element={<DonationImpact />} />
            <Route path="history" element={<History />} />
            <Route path="impact" element={<Impact />} />
            <Route path="innovations" element={<Innovation />} />
            <Route path="insurance" element={<Insurance />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="women" element={<Women />} />
            <Route path="branch" element={<Branch />} />
            <Route path="literacy" element={<DigitalLiteracy />} />
            <Route path="empowerment" element={<Empowerment />} />
            <Route path="adolescentEdu" element={<AdolescentEdu />} />
            <Route path="specialNeeds" element={<SpecialNeedEdu />} /> */}
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
