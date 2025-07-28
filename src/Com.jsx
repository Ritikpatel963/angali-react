
// import './index.css';

// function Com () {
// 	return (
// 		<h1>rfregferg</h1>
// 	)
// }



// export default Com;

// Com.jsx
import React, { useEffect, useRef } from 'react';
import './index.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Com = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 2,
		
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: true,
        },
        duration: 2,
		delay: 2,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div style={{ height: '100vh', background: '#30645fff', padding: '10px' }}>
      {/* <h1 style={{ marginBottom: '50vh' }}>Scroll to see text animate</h1> */}
      <p ref={textRef} style={{  marginBottom: '50vh',fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' , color :'red' }}>
        We Make Greate Wines for<br/> the good of mankind!
      </p>
	  <div className="part">
		<div className="part1">
<h1>ejbfjke</h1>
		</div>
		<div className="part2">
<h2>weofeofh</h2>
		</div>
	  </div>
    </div>

	
  );
};

export default Com;
