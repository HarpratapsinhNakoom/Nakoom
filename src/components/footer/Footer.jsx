import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-heading">Keep Grinding</div>
            <div className="footer-links">
                <a href="#skills" className="pageLink">Skills</a>
                <a href="#projects" className="pageLink">Projects</a>
                <a href="#experience" className="pageLink">Experience</a>
            </div>
            <div className="footer-endText">
                <p className='copyRight'>©Nakoom. All rights reserved</p>
                <p>Made with 💜 by &nbsp;<span className = 'specialText'>Harpratapsinh Nakoom</span></p>
            </div>
        </div>
    </div>
  )
}
