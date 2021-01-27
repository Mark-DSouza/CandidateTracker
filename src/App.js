import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import CreateApplicant from './components/CreateApplicant';
import CreateJob from './components/CreateJob';
import SearchApplicant from './components/SearchApplicant';
import SearchJob from './components/SearchJob';
import JobPage from './components/JobPage';

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/"><CreateApplicant /></Route>
        <Route exact path="/create-applicant"><CreateApplicant /></Route>
        <Route exact path="/create-job"><CreateJob /></Route>
        <Route exact path="/applicants"><SearchApplicant /></Route>
        <Route exact path="/jobs"><SearchJob /></Route>
        <Route exact path="/jobs/job/:id"><JobPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
