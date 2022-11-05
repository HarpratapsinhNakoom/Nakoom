import React from 'react'
import './home.css'
import HomeHeadingItem from './HomeHeadingItem';
import {BiPaperPlane} from 'react-icons/bi'
import {FaPrayingHands} from 'react-icons/fa'

export default function Home() {

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            const homeTxt = document.querySelector('.home-aboutText');
            const offset = window.scrollY
            homeTxt.style.transfrom = `translate(${offset * 2}px, 0)`;
            // homeTxt.style.color = "red";
            // console.log(homeTxt.style.transfrom);
        })
    }, [])
  return (
    <div className='home' id='home'>
        <div className="home-container">
            <div className="home-heading">
                <HomeHeadingItem className='home-heading-word' heading="FULL"/>
                <HomeHeadingItem className='home-heading-word' heading="STACK"/>
                <HomeHeadingItem className='home-heading-word' heading="DEVELOPER"/>
            </div>
            <div className="home-aboutText">
                <div className="home-aboutMinText">
                    Namaste <FaPrayingHands style={{color: 'var(--special)'}} />,<br/>I'm <span className='specialText'>Harpratapsinh Nakoom</span> a 3rd Yearite at <span className='specialText'>IIIT Surat</span>, with an interest in <span className='specialText'>Full Stack Development</span> and <span className='specialText'>Data Science</span>. I am an enthusiastic learner, who tries to put in the best of my skills to keep the knowledge flowing.<br />
                    In my early 20s, passionate about coding and improving every day.
                </div>

                <div className="home-aboutBtns">
                    <button className='resumeBtn btn'>Get CV</button>
                    <a href='#contact' className='contactBtn btn'>Say Hello<BiPaperPlane /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

// https://raw.githubusercontent.com/safak/youtube2022/dev-portfolio/img/bg1.png
// https://github.com/safak/youtube2022/blob/dev-portfolio/img/bg2.png?raw=true