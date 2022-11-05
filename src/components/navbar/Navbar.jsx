import React from 'react'
import './navbar.css'
import { RiMenu4Line } from 'react-icons/ri'
import { GiCrossedSabres } from 'react-icons/gi'

export default function Navbar() {
    const navRef = React.useRef();
    const [offsetY, setOffsetY] = React.useState(0);

    const handleToggleBtn = () => {
        navRef.current.classList.toggle('nav-responsive');
    }

    // const navbarRef = React.useRef();
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar')
        if(window.scrollY > offsetY) {
            navbar.style.display = 'none';
            setOffsetY(window.scrollY);
        }else{
            navbar.style.display = 'block';
        }
    })


    const navLinks = [
        "Home",
        "Skills",
        "Experience",
        "Projects",
        "Contact"
    ];

    // const handleCloseMenu = () => {
    //     document.querySelector('.navbar-links').style.transform = 'translateX(200vw)';
    // }

    const showNavLinks = navLinks.map((ele, index) => {
        return (
            <a href={`#${ele.toLowerCase()}`}
            className="navbar-linkItem"
            key={index}
            onClick={handleToggleBtn}>
                {ele}
            </a>
        );
    })
  return (
    <div className='navbar' id='navbar'>
        <div className="navbar-container">
            <div className="navbar-heading">
                Nakoom
            </div>

            <div className="navbar-links" ref={navRef}>
                {showNavLinks}
                <GiCrossedSabres
                className="toggleBtn nav-closeBtn"
                onClick={handleToggleBtn}
                />
            </div>
            <RiMenu4Line
                className="toggleBtn nav-menuBtn"
                onClick={handleToggleBtn}
                />
        </div>
    </div>
  )
}
