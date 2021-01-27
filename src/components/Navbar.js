import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          
          <div>
            <span className="navbar-brand mb-0 h1">Candidate Tracker</span>
          </div>
        
          <div className="collpase navbar-collapse">
            
            <ul className="navbar-nav mr-auto">
                
                <li className="navbar-item">
                  <Link to="/create-applicant" className="nav-link">Create Applicant</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create-job" className="nav-link">Create Job</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/applicants" className="nav-link">Search Applicants</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/jobs" className="nav-link">Search Jobs</Link>
                </li>

            </ul>

          </div>

      </nav>
    )
}

export default Navbar;