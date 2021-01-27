import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
      <React.Fragment>
      {/* {<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          
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

      </nav>} */}

      <nav class="navbar navbar-expand-lg navbar-light bg-gradient"  style={{backgroundColor: "#e3f2fd"}}>
        <div class="container-fluid p-3">
            <Link to="/create-applicant" className="navbar-brand">Candidate Tracker</Link>
          
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/create-applicant" className="nav-link">Create Applicant</Link>
              </li>
              <li class="nav-item">
                <Link to="/create-job" className="nav-link">Create Job</Link>
              </li>
              <li class="nav-item">
                <Link to="/applicants" className="nav-link">Search Applicants</Link>
              </li>
              <li class="nav-item">
                <Link to="/jobs" className="nav-link">Search Jobs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </React.Fragment>
    )
}

export default Navbar;