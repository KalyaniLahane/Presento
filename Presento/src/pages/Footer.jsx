import React from 'react'
// import { FaBeer } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import {FaTwitter,FaInstagram,FaFacebook,FaTelegram,FaLinkedinIn} from 'react-icons/fa';


const Footer = () => {
  return (
 <>
  <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Presento</h5>
            <p>A108 Adam Street<br />New York, NY 535022</p>
            <p><strong>Phone:</strong> +1 5589 55488 55</p>
            <p><strong>Email:</strong> info@example.com</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="footer-icon"><FaTwitter /></a>
              <a href="#" className="footer-icon"><FaFacebook/></a>
              <a href="#" className="footer-icon"><FaInstagram /></a>
              <a href="#" className="footer-icon"><FaLinkedinIn /></a>
              <a href="#" className="footer-icon"><FaTelegram /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className=" text-uppercase mb-4 font-weight-bold">Useful Links</h5>
            <p><NavLink  className="footer-link text-light text-decoration-none text-danger" to="/">Home</NavLink></p>
            <p><NavLink className="footer-link text-light text-decoration-none" to="/about">About us</NavLink></p>
            <p><NavLink className="footer-link text-light text-decoration-none" to="/services">Services</NavLink></p>
            <p><NavLink to="/" className="footer-link text-light text-decoration-none">Terms of service</NavLink></p>
            <p><NavLink to="/" className="footer-link text-light text-decoration-none">Privacy policy</NavLink></p>
          </div>

          {/* Our Services */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Our Services</h5>
            <p><a href="#" className="footer-link text-light text-decoration-none">Web Design</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Web Development</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Product Management</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Marketing</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Marketing</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Graphic Design</a></p>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Our Newsletter</h5>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form className="d-flex">
              <input type="email" className="form-control me-2" placeholder="Email" />
              <button className="btn btn-danger">Subscribe</button>
            </form>
          </div>

        </div>

        <hr className="my-3" />
        
        {/* Copyright */}
        <div className="text-center">
          <p>© Copyright <strong>Presento</strong>. All Rights Reserved</p>
        </div>
      </div>
    </footer>
 </>
  )
}

export default Footer