

import React from 'react'

import "../styles/First.css";
import { Link } from 'react-router-dom';

 function FirstLesson() {
  return (
    <>
      <nav className="box">
        <div className="heading">
          <h1 className="logo">Living the simple life</h1>
          <div style={{ fontWeight:'700', color:"#1792d2", fontSize: "0.75rem" , margin: "0"}}>life we admire</div>
        </div>

        <div className="firstbutton">
          <div className="firstlink">
            <Link style={{ textDecoration: "none", color: "black" }}>home</Link>
          </div>
          <div className="firstlink">
            <Link style={{ textDecoration: "none", color: "black" }}>
              about
            </Link>
          </div>
          <div className="firstlink">
            <Link style={{ textDecoration: "none", color: "black" }}>
              contact us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}


export default FirstLesson