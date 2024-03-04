import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import LoadingSpinner from './components/SpinLoading';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
// import HeroStars from './components/canvas/HeroStars';


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [])

  return (
    <>
      {loading ? (<BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          {/* <HeroStars /> */}
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <StarsCanvas />
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </BrowserRouter>) : <LoadingSpinner />}
    </>

  );
}

export default App;
