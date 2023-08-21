import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/open-sans";
import "@fontsource/poppins";
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Partners from './pages/Partners';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/partners" element={<Partners/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </div>
  );
}

export default App;
