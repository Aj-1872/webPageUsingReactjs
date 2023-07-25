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

  const [ bgMode, setBgMode ] = useState('white');
  const [textMode, setTextMode] = useState ('black');
  const [opacity,setOpacity] = useState(false);

  const handleMode = () => {

    
    if(bgMode==='black'){ 
      setBgMode('white')

    }
    else {
      setBgMode('black')
    }

    if(textMode==='black'){
      setTextMode('white')
    }
    else {
      setTextMode('black')
    }

    setOpacity(!opacity);
    

  }
  
  
  
  return (
    <div className={`bg-${bgMode}`} >

      <Topbar bgMode={bgMode} textMode={textMode} handleMode={handleMode} />
      <Navbar textMode={textMode} opacity={opacity} />
      <Home opacity={opacity} />
      <Acitvities opacity={opacity} bgMode={bgMode}/>
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
