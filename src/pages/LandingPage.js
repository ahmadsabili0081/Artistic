import React from 'react'
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NewsLetter from '../components/NewsLetter';
import Services from '../components/Services';
import Team from '../components/Team/Team';
function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection/>
      <Services />
      <About />
      <Team />
      <NewsLetter />
      <Contact />
      <Footer />
    </> 
  )
}

export default LandingPage;