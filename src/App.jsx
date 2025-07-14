import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
// Frontend Notes Routes
import HtmlNotes from './Pages/Notes/Frontend/HTML/Content'; 
import CssNotes from './Pages/Notes/Frontend/CSS/Content'; 
import JsNotes from './Pages/Notes/Frontend/JS/Content'; 
import ReactNotes from './Pages/Notes/Frontend/react/Content'; 

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className={`w-full z-50 ${isFixed ? 'fixed top-0 shadow-md' : 'relative'} transition-all duration-500 ease-in-out`}>
        {/* <Navbar /> */}
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/html-notes" element={<HtmlNotes />} />
        <Route path="/css-notes" element={<CssNotes />} />
        <Route path="/javascript-notes" element={<JsNotes />} />
        <Route path="/react-notes" element={<ReactNotes />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
