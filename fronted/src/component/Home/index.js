import React from 'react'


import './index.css'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Homes = () => {
  return (
    <div className='home'>
     
      <h1> the genetic test</h1>
      <Footer/>
    </div>
  )
}

export default Homes

const Footer = () => {
  return (
    <footer className="footer">
      <div>
         <span className='fafacebook'><FaFacebook /> </span>
         <span className='falinkedin'><FaLinkedin/> </span>
      </div>
      <p>© {new Date().getFullYear()} Genetic Lab — All Rights Reserved</p>
     
      <div><a href="/privacy-policy">Privacy Policy</a> </div>
      <div>
         <a href="/contact">Contact : </a>
         <span>096167382 ,  </span>
         <span> 01723578904</span>
      </div>
    </footer>
  );
};
