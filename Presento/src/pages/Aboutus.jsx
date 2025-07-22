import React from 'react'

import './About.css'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <>
 <section className="about-section bg-dark text-light">
  <div className="container">
    <div className="row">
      
      <div className="col-md-6 mb-5">
        <h2 className="fw-bold">Voluptatem dignissimos<br/>provident quasi</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Duis aute irure dolor in reprehenderit.
        </p>
        <NavLink to="/about" className="btn btn-outline-danger text-light mt-4 ">
          ABOUT US <i className="bi bi-arrow-right ms-2"></i>
        </NavLink>
      </div>

      
      <div className="col-md-6 text-light">
        <div className="row g-4">
    
          <div className="col-sm-6 icon-box">
            <i class="bi bi-briefcase"></i>
            <h5 className=" fw-bold mt-2 strteched-link ::after">Corporis voluptates sit</h5>
            <p className="text-light">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
          </div>
          
          <div className="col-sm-6 icon-box">
            <i className="bi bi-gem"></i>
            <h5 className="fw-bold mt-2">Ullamco laboris nisi</h5>
            <p className="text-light">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
          
          <div className="col-sm-6 icon-box">
            <i className="bi bi-broadcast"></i>
            <h5 className="fw-bold mt-2">Labore consequatur</h5>
            <p className="text-light">Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
          </div>
          
          <div className="col-sm-6 icon-box">
            <i className="bi bi-tv"></i>
            <h5 className="fw-bold mt-2">Beatae veritatis</h5>
            <p className="text-light">Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About