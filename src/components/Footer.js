import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Sahil Anand</h4>
            <p>© {year} Sahil Anand All rights reserved</p>
            <p className='d-flex'>
              <a target="_blank" href="https://www.linkedin.com/in/sahilanand30/"><i className='fa-brands fa-linkedin mx-3' ></i></a>
              <a target="_blank" href="https://www.instagram.com/sahilanand_30/"><i className='fa-brands fa-instagram' style={{color:"#f542a4"}}></i></a>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Feel free to get connected with me via email or Social Media if you liked my work or if you want to hire me.</p>
            <p>✉️ sahilhanand@gmail.com</p>
            <p>📱 +91 9904064226</p>
          </div>
          <div className="third mt-5">
            <h4>About Me</h4>
            <p>Competitive Programmer <br/> MERN Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer