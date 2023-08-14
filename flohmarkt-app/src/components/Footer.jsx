import React from 'react'
import "./Footer.css";


const Footer = () => {
  return (
    <div>
     <img className= "footerimg" src='./pitems.png' alt=""/>
     <div className='footer'>
         <a className="social" href="https://github.com/ecemonkol" target="_blank">Github</a>
         <a className="social" href="https://www.linkedin.com/in/ecemonkol/" target="_blank">Linkedin</a>
         <a className="social" href='https://www.instagram.com/ecemichu/' target="_blank">Instagram</a>
         <p className="note"><b>Designed and programmed by Ecem Onkol </b></p>
     </div>

    </div>
     
  );
}

export default Footer;