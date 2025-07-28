import './App.css';
import Head from "./Head.jsx";
import Com from "./Com.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Galaxy from './Galaxy.jsx'; // ✅ Added import
   import CircularGallery from './CircularGallery';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Head />
      {/* <Com /> */}
   

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
</div>

      {/* 🌌 Galaxy background effect */}
    <div className="galaxy-container" style={{ height: '600px' }}>
  <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={1.5}
    glowIntensity={0.5}
    saturation={0.8}
    hueShift={240}
  />
  <h1 className="galaxy-text">We Made a Great Wins For <br/>
  The Good Of Mankind</h1>
</div>

      
    </>
  );
}

export default App;
