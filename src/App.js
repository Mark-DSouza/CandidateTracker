import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import {Switch, Route} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import CreateApplicant from './components/create-applicant/container/CreateApplicant';
import CreateJob from './components/create-job/container/CreateJob';
import SearchApplicant2 from './components/search-applicant/container/SearchApplicant';
import SearchJob2 from './components/search-job/container/SearchJob';
import JobPage from './components/job-page/container/JobPage';
import ApplicantPage from './components/applicant-page/container/ApplicantPage';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/"><CreateApplicant /></Route>
        <Route exact path="/create-applicant"><CreateApplicant /></Route>
        <Route exact path="/create-job"><CreateJob /></Route>
        {/* {<Route exact path="/applicants"><SearchApplicant /></Route>
        <Route exact path="/jobs"><SearchJob /></Route>} */}
        <Route exact path="/applicants"><SearchApplicant2 /></Route>
        <Route exact path="/jobs"><SearchJob2 /></Route>
        <Route exact path="/jobs/job/:id"><JobPage /></Route>
        <Route exact path="/applicants/applicant/:id"><ApplicantPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
