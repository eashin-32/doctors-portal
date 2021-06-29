import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link mx-4" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="/services">Dental Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4 text-white" href="/dashboard/appointment">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4 text-white" href="/blogs">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4 text-white" href="/contact">Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;