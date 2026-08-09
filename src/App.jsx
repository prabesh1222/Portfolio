import React from "react";
import Header from "./Components/Header.jsx";
import HeroSection from "./Components/HeroSection.jsx"; 
import Education from "./Components/Education.jsx"; 
import About from "./Components/AboutSection.jsx";
import Experience from './Components/Experience.jsx'; 
import Projects from './Components/Projects.jsx';
import ContactSection from './Components/ContactSection.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <div className='bg-[#111837] min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden'>
      <Header />
      <HeroSection/>
      <Education/>
      <About/>
      <Experience/>
      <Projects/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;