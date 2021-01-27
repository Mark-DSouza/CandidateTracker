import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Check, X} from 'react-bootstrap-icons';


function ApplicantPage(props) {
    const {id} = useParams();
    const [applicant, setApplicant] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/applicants/${id}`)
        .then(response => setApplicant(response.data.data.applicant))
        .catch(error => console.log(error));
    }, [])

    return (
        <div className="container">

            <div className="card border-primary my-5">
                <div class="card-header border-primary text-info">
                    Applicant Information
                    
                </div>
                <div className="card-body">
                    <div className="row py-1 py-2">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary text-secondary">Name : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{applicant.name}</em></p></div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase text-secondary">Email : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{applicant.email}</em></p></div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary">Phone : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{applicant.phone}</em></p></div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary">Location : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{applicant.location}</em></p></div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary">Salary : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{applicant.salary}</em></p></div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary">Notice Period : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{applicant.noticePeriod}</em></p></div>
                    </div>
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary">Description : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{applicant.description}</em></p></div>
                    </div>
                
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">React {applicant.knowsReact ? <Check color="green" size={32}/> : <X color="red" size={32}/>}</li>
                    <li className="list-group-item">Angular {applicant.knowsAngular ? <Check color="green" size={32}/> : <X color="red" size={32}/>}</li>
                    <li className="list-group-item">Express {applicant.knowsExpress ? <Check color="green" size={32}/> : <X color="red" size={32}/>}</li>
                    <li className="list-group-item">Mongo {applicant.knowsMongo ? <Check color="green" size={32}/> : <X color="red" size={32}/>}</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-danger" onClick={() => {}}>Delete Applicant</button>
                </div>
            </div>
        </div>
    )
}

export default ApplicantPage