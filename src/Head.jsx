// Head.jsx
import React from "react";
import './index.css';

function Head() {
  return (
    <div className="main" data-aos="fade-up">
      <div className="nav" data-aos="fade-up" data-aos-delay="400">
        <h1 className="t1" data-aos="fade-up" data-aos-delay="600">Wines</h1>
        <h1 className="t1" data-aos="fade-up" data-aos-delay="700">Our Mission</h1>
        <h1 className="t1" data-aos="fade-up" data-aos-delay="800">Autumn Ork</h1>
        <h1 className="t1" data-aos="fade-up" data-aos-delay="900">Blog</h1>
        <h1 className="t1" data-aos="fade-up" data-aos-delay="1000">Contact</h1>
      </div>

      <div className="content">
        <div className="div1">
          <h1 className="t1">Nope Valley Wines</h1>
          <h1 className="Text">90 Years of 
            <br /> Experience Making<br />Quality Wine </h1>

        </div>
        <div className="div2">
         <img src="src/assets/image/beer.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Head;
