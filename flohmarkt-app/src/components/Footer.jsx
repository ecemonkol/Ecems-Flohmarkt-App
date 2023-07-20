import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <a className="social" href="https://github.com/ecemonkol" target="_blank">GITHUB</a>
        <a className="social" href="https://www.linkedin.com/in/ecemonkol/" target="_blank">LINKEDIN</a>
        <a className="social" href='https://www.instagram.com/ecemichu/' target="_blank">INSTAGRAM</a>
        <p className="note"><b>Designed and programmed by Ecem Onkol </b></p>
    </div>
  );
}

export default Footer;