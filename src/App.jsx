import { useEffect, useState } from 'react'
import bg from '../src/assets/E-learning.jpg'
import './App.css'
import LandingPage from './Components/LandingPage'
import Navbar from './Pages/Navbar'

function App() {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsFixed(scrollTop > 350); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>  
      <div className={`w-full z-50 transition-all duration-1000 ${isFixed ? 'fixed top-0 shadow-md' : 'relative'} transition-all duration-500 ease-in-out`}>
        <Navbar />
      </div>
        <LandingPage />
    </>
  )
}

export default App
