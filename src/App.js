import React from 'react';
import './index.css'; // Import the CSS file
import Topbar from './Component/Topbar';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Acitvities from './Component/Acitvities';
import Booking from './Component/Booking';
import Gallery from './Component/Gallery';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { useState } from 'react';



function App() {

  const [ mode, setMode ] = useState('bg-black');

  const handleMode = () => {

    if(mode==='bg-black'){

      setMode('bg-white')
    }
    else {
      setMode('bg-black')
    }

  }
  
 
  return (
    <div className={mode} >

      <Topbar mode={mode} handleMode={handleMode} />
      <Navbar />
      <Home />
      <Acitvities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
