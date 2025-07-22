import React from 'react'
import home2 from '../assets/home2.jpeg'
import { NavLink } from 'react-router-dom'

import {FaTwitter,FaInstagram,FaFacebook,FaTelegram,FaLinkedinIn} from 'react-icons/fa';
import Contact from './Contact';
import Footer from './Footer';
const Home = () => {
  return (
    <>
     <section className="hero-section d-flex align-items-center"
   style={{
    backgroundImage:`url(${home2})`,
    backgroundSize:`cover`,
    backgroundPosition:'center',
    minHeight:'100vh',
    width:'100%',
    color:'#fff',
    position:'relative',
   }}
   >
  
      <div className="container text-white">
       
        <div className="row">
          <div className="col-lg-8 ">
            <h1 className="fw-bold display-5 " >
              Betttter digital experience <br />
              with <span className="text-danger">Presento</span>
            </h1>
            <p className="mt-3 fs-5">
              We are team of talented designers making websites with <br /> Bootstrap
            </p>
            <div className="mt-4 d-flex align-items-center">
              <button className="btn btn-danger me-3">Get Started</button>
              <button className="btn btn-outline-light d-flex align-items-center">
                <span className="me-2" style={{ fontSize: '1.5rem' }}>▶</span>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Contact />
    <Footer />
    </>
  )
}

export default Home