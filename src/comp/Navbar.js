import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return pathname === location.pathname ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">NewsApp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={`nav-item ${isActive('/General')}`}>
              <Link className={`nav-link ${isActive('/General')}`} to="/General">General</Link>
            </li>
            <li className={`nav-item ${isActive('/Business')}`}>
              <Link className={`nav-link ${isActive('/Business')}`} to="/Business">Business</Link>
            </li>
            <li className={`nav-item ${isActive('/Entertaintment')}`}>
              <Link className={`nav-link ${isActive('/Entertaintment')}`} to="/Entertaintment">Entertainment</Link>
            </li>
            <li className={`nav-item ${isActive('/Sports')}`}>
              <Link className={`nav-link ${isActive('/Sports')}`} to="/Sports">Sports</Link>
            </li>
            <li className={`nav-item ${isActive('/health')}`}>
              <Link className={`nav-link ${isActive('/health')}`} to="/health">Health</Link>
            </li>
            <li className={`nav-item ${isActive('/Registration')}`}>
              <Link className={`nav-link ${isActive('/Registration')}`} to="/Registration">Registration</Link>
            </li>
            <li className={`nav-item ${isActive('/Login')}`}>
              <Link className={`nav-link ${isActive('/Login')}`} to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
