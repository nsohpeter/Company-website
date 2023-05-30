
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './index.css';
import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import Sidebar from './Components/Sidebar/Sidebar';
import Submenu from './Components/Submenu/Submenu';
import Vision from './Pages/Vision/Vision';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Submenu />
      <Router>
          <Routes>
            <Route path='/'>
              <Route index element = {<Home/>}/> 
              <Route path='portfolio' element = {<Portfolio/>}/> 
              <Route path='about' element = {<Vision/>}/> 
           
            </Route>
        
          </Routes>
     
       <Footer />
       </Router>

    </div>
  )
}

export default App
