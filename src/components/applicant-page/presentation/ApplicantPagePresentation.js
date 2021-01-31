import React from 'react';
import {Link} from 'react-router-dom';
import SkillCheck from './../../utilities/SkillCheck';
import EditApplicant from './../../edit-applicant/container/EditApplicant';

function ApplicantPagePresentation(props) {
    return (
        <div className="container">

            <div className="card border-primary my-5">
                <div className="card-header border-primary text-info">
                    Applicant Information
                    
                </div>
                <div className="card-body">
                    <div className="row py-1 py-2">
                        <div className="col-lg-2">
                            <h6 className="card-title text-uppercase  text-secondary text-secondary">Name : </h6>
                        </div>
                        <div className="col-lg-10">
                            <p className="card-text text-dark fw-bolder"><em>{props.applicant.name}</em></p>
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2">
                            <h6 className="card-title text-uppercase text-secondary">Email : </h6>
                        </div>
                        <div className="col-lg-10">
                            <p className="card-text text-dark fw-bolder"><em>{props.applicant.email}</em></p>
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2">
                            <h6 className="card-title text-uppercase  text-secondary">Phone : </h6>
                        </div>
                        <div className="col-lg-10">
                            <p className="card-text text-dark fw-bolder"><em>{props.applicant.phone}</em></p>
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2">
                            <h6 className="card-title text-uppercase  text-secondary">Location : </h6>
                        </div>
                        <div className="col-lg-10">
                            <p className="card-text text-dark fw-bolder"><em>{props.applicant.location}</em></p>
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2">
                            <h6 className="card-title text-uppercase  text-secondary">Salary : </h6>
                        </div>
                        <div className="col-lg-10">
                            <p className="card-text text-dark fw-bolder"><em>{props.applicant.salary}</em></p>
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2">
                            <h6 className="card-title text-uppercase  text-secondary">Notice Period : </h6>
                        </div>
                        <div className="col-lg-10">
                            <p className="card-text text-dark fw-bolder"><em>{props.applicant.noticePeriod}</em></p>
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2">
                            <h6 className="card-title text-uppercase  text-secondary">Description : </h6>
                        </div>
                        <div className="col-lg-10">
                            <p className="card-text text-dark fw-bolder"><em>{props.applicant.description}</em></p>
                        </div>
                    </div>
                
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">React <SkillCheck bool={props.applicant.knowsReact}/></li>
                    <li className="list-group-item">Angular <SkillCheck bool={props.applicant.knowsAngular}/></li>
                    <li className="list-group-item">Express <SkillCheck bool={props.applicant.knowsExpress}/></li>
                    <li className="list-group-item">Mongo <SkillCheck bool={props.applicant.knowsMongo}/></li>
                </ul>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-outline-success" onClick={(event) => props.handleClickEdit()}>Edit Applicant</button>
                        </div>
                        <div className="col-auto">
                            <Link 
                                className="btn btn-danger" 
                                to="/applicants"
                                onClick={() => props.handleClickDelete()}
                            >Delete Applicant</Link>
                        </div>
                    </div>
                    
                </div>
            </div>

            {
                props.isEditingApplicant 
                    && 
                <EditApplicant 
                    applicant={props.applicant} 
                    isEditingApplicant={props.isEditingApplicant}
                    setIsEditingApplicant={props.setIsEditingApplicant} 
                    id={props.id}
                /> 
            }
        </div>
    )
}

export default ApplicantPagePresentation;