import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
// Frontend Notes Routes
import HtmlNotes from './Pages/Notes/Frontend/HTML/Content'; 
import CssNotes from './Pages/Notes/Frontend/CSS/Content'; 
import JsNotes from './Pages/Notes/Frontend/JS/Content'; 
import ReactNotes from './Pages/Notes/Frontend/react/Content'; 
import Google from './Pages/DSAPRACTICE/GOOGLE/Google';
import Amazon from './Pages/DSAPRACTICE/AMAZON/Amazon';
import Microsoft from './Pages/DSAPRACTICE/Microsoft/Microsoft';
import Wipro from './Pages/DSAPRACTICE/Wipro/Wipro';
import Tcs from './Pages/DSAPRACTICE/TCS/Tcs';
import Pattern from './Pages/DSAPRACTICE/Patterns/Pattern';
import CppDsaRoadmap from './Pages/Roadmap/DSA/CppDsaRoadmap';
// import DSANotes from './Pages/Notes/DSA/Content'; 
// import PythonNotes from './Pages/Notes/Python/Content'; 
import CPPNotes from './Pages/Notes/CPP/Content'; 
import Cpp from './Pages/Roadmap/Language/Cpp';

// DSA Practice section



function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  document.documentElement.classList.add('dark');
}, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/html-notes" element={<HtmlNotes />} />
        <Route path="/css-notes" element={<CssNotes />} />
        <Route path="/javascript-notes" element={<JsNotes />} />
        <Route path="/react-notes" element={<ReactNotes />} />
        <Route path="/cpp-notes" element={<CPPNotes />} />



        {/* DSA Routes */}

        <Route path='/google' element={<Google/>} />
        <Route path='/amazon' element={<Amazon/>} />
        <Route path='/microsoft' element={<Microsoft/>} />
        <Route path='/tcs' element={<Tcs/>} />
        <Route path='/wipro' element={<Wipro/>} />
        <Route path='/patterns' element={<Pattern/>} />


        {/* Roadmap routes. */}

        <Route path='DSA' element={<CppDsaRoadmap />} />
        <Route path='cpp-roadmap' element={<Cpp />} />
      </Routes>
    </Router>
  );
}

export default App;
