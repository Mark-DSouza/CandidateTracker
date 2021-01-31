import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-gradient fixed-top"  style={{backgroundColor: "#e3f2fd"}}>
        <div className="container-fluid p-3">
          
          <Link to="/create-applicant" className="navbar-brand">Candidate Tracker</Link>
            
          <div className="collapse navbar-collapse" id="navbarNav">
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/create-applicant" className="nav-link">Create Applicant</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/create-job" className="nav-link">Create Job</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/applicants" className="nav-link">Search Applicants</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/jobs" className="nav-link">Search Jobs</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
}

export default Navbar;