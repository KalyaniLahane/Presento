import React from 'react';
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/Aboutus';
import ServicePage from './pages/ServicePage';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';



const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg shadow">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-dark fw-bold" to="/">
      <h1>
        Presento<span style={{ color: 'red' }}>.</span>
      </h1>
    </NavLink>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav" style={{fontFamily:"sans-serif", fontSize:"1.2rem"}}>
      {/* Left or center aligned nav links */}
      <ul className="navbar-nav">
       
      </ul>

      {/* Right aligned nav links */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item mx-3">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
        </li>
         <li className="nav-item mx-3">
          <NavLink to="/portfolio" className="nav-link">
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink to="/team" className="nav-link">
            Team
          </NavLink>
        </li>
        <li className="nav-item mx-3">
          <NavLink to="/contact" className="nav-link">
            Contact Us
          </NavLink>
        </li>
         <li className="nav-item mx-3">
              <NavLink className="btn btn-danger text-white fw-bold px-3" href="#">Get Started</NavLink>
            </li>
      </ul>
    </div>
  </div>
</nav>


      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/get-started" element={<div>Get Started Page</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
