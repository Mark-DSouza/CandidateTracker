import React from 'react';
import {Check, X} from 'react-bootstrap-icons';
import SkillCheck from './../../utilities/SkillCheck';

function JobPagePresentation(props) {
    return (
        <div className="container">

            <div className="card border-primary my-5">

                <div className="card-header border-primary text-info">
                    Job Information
                </div>

                <div className="card-body">
                    <div className="row py-1 py-2">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary text-secondary">Name : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{props.job.name}</em></p></div>
                    </div>
                
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary">Job Code : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{props.job.jobCode}</em></p></div>
                    </div>
                
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary">Description : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{props.job.description}</em></p></div>
                    </div>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">React <SkillCheck bool={props.job.knowsReact}/></li>
                    <li className="list-group-item">Angular <SkillCheck bool={props.job.knowsAngular}/></li>
                    <li className="list-group-item">Express <SkillCheck bool={props.job.knowsExpress}/></li>
                    <li className="list-group-item">Mongo <SkillCheck bool={props.job.knowsMongo}/></li>
                </ul>
                
                <div className="card-body">
                    <button className="btn btn-danger" onClick={() => {}}>Delete Applicant</button>
                </div>
            </div>

        </div>
    )
}

export default JobPagePresentation;