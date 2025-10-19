import React from 'react'


import './index.css'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Homes = () => {
  return (
    <div className='home'>
     
      <h1> the genetic test</h1>
      
     
     
         <Card1/>
        <Card2/>
      <Serves/>
      <Footer/>
    </div>
  )
}

export default Homes

//the serves list
const Serves = () => {
  return(
    <div>
      <h1>The Serves List</h1>
      
        <table>
            <thead>
                <tr>
                    <th>Treatment Name</th>
                    <th> Treatment Free (TAKA)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Blood Test</td>
                    <td class="amount">200.00</td>
                </tr>
                <tr>
                    <td>DNA Test</td>
                    <td class="amount">5000.00</td>
                </tr>
                <tr>
                    <td>Cancer Test</td>
                    <td class="amount">10000.00</td>
                </tr>
                <tr>
                    <td>Prenatal Genetic Testing</td>
                    <td class="amount">7000.00</td>9
                </tr>
                <tr>
                    <td>Paternity / Relationship DNA Test</td>
                    <td class="amount">12000.00</td>
                </tr>
                {/* <tr>
                    <td>Truck LT5T</td>
                    <td class="amount">1000.00</td>
                </tr>
                <tr>
                    <td>Medium Truck 58</td>
                    <td class="amount">1250.00</td>
                </tr>
                <tr>
                    <td>Medium Truck 11</td>
                    <td class="amount">1600.00</td>
                </tr>
                <tr>
                    <td>Truck 3AXEL</td>
                    <td class="amount">2000.00</td>
                </tr>
                <tr>
                    <td>Trailer 1</td>
                    <td class="amount">3000.00</td>
                </tr>
                <tr>
                    <td>Trailer 2</td>
                    <td class="amount">4000.00</td>
                </tr> */}
               
            </tbody>
        </table>
    </div>

  )
    

}
const Card2=()=>{
  return(
    <div className='card-container'>
    <div className='card'>
      <h1>Doctor Information1</h1>
      
        <h3>Doctor Name</h3>
        <h3>Dr: Karim </h3>
        <p> Vizit Time : 2:00 PM - 4:00 PM </p>
        <p><i>DNA Spacelist</i></p>
     </div>

    <div className='card'>
      <h1>Doctor Information</h1>
      
        <h3>Doctor Name</h3>
        <h3>Dr: Karim </h3>
        <p> Vizit Time : 2:00 PM - 4:00 PM </p>
        <p><i>DNA Spacelist</i></p>
     </div>
       <div className='card'>
      <h1>Doctor Information</h1>
      
        <h3>Doctor Name</h3>
        <h3>Dr: Karim </h3>
        <p> Vizit Time : 2:00 PM - 4:00 PM </p>
        <p><i>DNA Spacelist</i></p>
     </div>
</div>
  
  )
}

 const Card1=()=>{
   return(
 <div className='card-container'>
     <div className='card'>
       <h1>Doctor Information</h1>
      <div>
         <h3>Doctor Name</h3>
         <h3>Dr: Karim </h3>
         <p> Vizit Time : 2:00 PM - 4:00 PM </p>
         <p><i>DNA Spacelist</i></p>
       </div>
     </div>
  
 </div>
 
   )
 }



const Footer = () => {
  return (
    <footer className="footer">
      <div>
         <span className='fafacebook'><FaFacebook /> </span>
         <span className='falinkedin'><FaLinkedin/> </span>
      </div>
      <p>© {new Date().getFullYear()} Genetic Lab — All Rights Reserved</p>
      <p>    &copy; copyRight</p>
     
      <div><a href="/privacy-policy">Privacy Policy</a> </div>
      <div>
         <a href="/contact">Contact : </a>
         <span>096167382 ,  </span>
         <span> 01723578904</span>
      </div>
    </footer>
  );
};
