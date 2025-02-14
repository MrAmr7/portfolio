
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



const App=() => {
    return (
      <Router>
<Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={< NotFound/>} />
          <Route path="/Footer" element={< Footer/>} />
          <Route path="/Navbar" element={< Navbar/>} />
        </Routes>
<Footer/>
      </Router>
    );
  }
  
  export default App;