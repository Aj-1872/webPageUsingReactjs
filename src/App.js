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
  // State to manage the background color mode ('black' or 'white')
  const [bgMode, setBgMode] = useState('bg-white');

  // State to manage the text color mode ('black' or 'white')
  const [textMode, setTextMode] = useState('black');

  // State to manage the opacity (transparency) of certain components
  const [opacity, setOpacity] = useState(false);

  // Function to handle mode change (toggle between 'black' and 'white')
  const handleMode = () => {
    setBgMode((prevMode) => (prevMode === 'bg-white' ? 'bg-black' : 'bg-white'));
    setTextMode((prevMode) => (prevMode === 'white' ? 'black' : 'white'));
    setOpacity((prevOpacity) => !prevOpacity);
  };
  
  return (
    // Use template literals to apply the background mode class
    <div className={`${bgMode}`}>
      <Topbar textMode={textMode} handleMode={handleMode} />
      <Navbar textMode={textMode} opacity={opacity} />
      <Home opacity={opacity} />
      <Acitvities opacity={opacity} />
      <Booking bgMode={bgMode} textMode={textMode}/>
      <Gallery textMode={textMode} />
      <Contact textMode={textMode}   />
      <Footer />
    </div>
  );
  }

export default App;
