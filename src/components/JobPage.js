import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Check, X} from 'react-bootstrap-icons';


function JobPage(props) {
    const {id} = useParams();
    const [job, setJob] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/jobs/${id}`)
        .then(response => setJob(response.data.data.job))
        .catch(error => console.log(error));
    }, [])

    return (
        <div className="container">

            <div className="card border-primary my-5">

                <div class="card-header border-primary text-info">
                    Job Information
                </div>

                <div className="card-body">
                    <div className="row py-1 py-2">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary text-secondary">Name : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{job.name}</em></p></div>
                    </div>
                
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary">Job Code : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{job.jobCode}</em></p></div>
                    </div>
                
                    <div className="row py-1">
                        <div className="col-lg-2"><h6 className="card-title text-uppercase  text-secondary">Description : </h6></div>
                        <div className="col-lg-10"><p className="card-text text-dark fw-bolder"><em>{job.description}</em></p></div>
                    </div>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">React {job.knowsReact ? <Check color="green" size={32}/> : <X color="red" size={32}/>}</li>
                    <li className="list-group-item">Angular {job.knowsAngular ? <Check color="green" size={32}/> : <X color="red" size={32}/>}</li>
                    <li className="list-group-item">Express {job.knowsExpress ? <Check color="green" size={32}/> : <X color="red" size={32}/>}</li>
                    <li className="list-group-item">Mongo {job.knowsMongo ? <Check color="green" size={32}/> : <X color="red" size={32}/>}</li>
                </ul>
                
                <div className="card-body">
                    <button className="btn btn-danger" onClick={() => {}}>Delete Applicant</button>
                </div>
            </div>

        </div>
    )
}

export default JobPage