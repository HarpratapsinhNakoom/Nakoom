import React from 'react';
import './contact.css';
import {CgSmileMouthOpen} from 'react-icons/cg';
import {FiMail, FiPhone} from 'react-icons/fi';
import {BsInstagram, BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {
    const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_a005qqb',
        'template_ksz847d',
        form.current,
        'KPRPZnS0RAtwTVY5m')
      .then((result) => {
          console.log(result.text);
          toast.success("I'll be sure to revert ASAP!",
            {
                position : 'top-right',
                style: {
                    fontFamily : 'var(--navbar-links)',
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
            );
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          toast.error("Uhoh! I could'nt get that",
            {
                position : 'top-right',
                style: {
                    fontFamily : 'var(--navbar-links)',
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
            );
      });
  };
  // const inputContents = document.getElementsByClassName('.inputLabel');
  // // console.log(inputContents);

  // const show = () => {
  //   // inputContents.forEach((ele, index) => {
  //   //   console.log(ele);
  //   //   // const temp = ele.style.;
  //   //   // console.log("item - ",index,temp);
  //   // })

  //   console.log(inputContents);
  // }
  
  return (
    <div className='contact' id='contact'>
        <div className="contact-container">
            <div className="contact-headingSection">
                <div className="contact-heading">Get in touch</div>
                <div className="contact-subHeading">
                    Got any project where I can be helpful? <br />
                    Always ready to contribute <CgSmileMouthOpen />
                </div>
            </div>
            <div className="contact-formSection">
                <div className="form-textArea">
                    <span className='contact-circle1'></span>
                    <span className='contact-circle2'></span>
                    <div className="personalInfo">
                      <div className="personalSection">
                          <div className="personalSection-heading">
                              Contact Information
                          </div>
                          <div className='mainContact'>
                              <div className="personalContact">
                                  <FiMail style={{color : 'var(--special)'}}/> harpratapnakoom@gmail.com
                              </div>
                              <div className="personalContact">
                                  <FiPhone style={{color : 'var(--special)'}} /> +91-9662013668
                              </div>
                          </div>
                      </div>

                      <div className="personalSection">
                          <div className="personalSection-heading">
                              Connect with me
                          </div>
                          <div className="personalSocials">
                              <a href='https://www.instagram.com/who_is_har/'
                              className="socialAccount"
                              rel="noreferrer"
                              target="_blank"><BsInstagram /></a>
                              <a href='https://www.linkedin.com/in/harpratapsinh-nakoom-b08a83204/'
                              className="socialAccount"
                              rel="noreferrer"
                              target="_blank"><BsLinkedin /></a>
                              <a href='https://github.com/HarpratapsinhNakoom'
                              className="socialAccount"
                              rel="noreferrer"
                              target="_blank"><BsGithub /></a>
                              <a href='https://twitter.com/harpratapsinh'
                              className="socialAccount"
                              rel="noreferrer"
                              target="_blank"><BsTwitter /></a>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="form-inputArea">
                    <form ref={form} onSubmit={sendEmail}>
                        <h3>Send a message</h3>
                        <div className="inputEle-container">
                            <input type="text" name='name' className='nameInput input' />
                            <label htmlFor="name" className='inputLabel'>Name</label>
                            {/* <span>Name</span> */}
                        </div>
                        <div className="inputEle-container">
                            <input type="email" name='email' className='emailInput input' />
                            <label htmlFor="email" className='inputLabel'>E-Mail</label>
                            {/* <span>E-Mail</span> */}
                        </div>
                        <div className="inputEle-container">
                            <input type="text" name='subject' className='subjectInput input' />
                            <label htmlFor="subject" className='inputLabel'>Subject</label>
                            {/* <span>Subject</span> */}
                        </div>
                        <div className="inputEle-container">
                            <textarea name='msg' className='msgInput input' />
                            <label htmlFor="msg" className='msgLabel inputLabel'>Message</label>
                            {/* <span>Message</span> */}
                        </div>
                        <input type="submit" value="Send" className='btn msgSendBtn'/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
