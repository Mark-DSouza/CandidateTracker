import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


function ApplicantPage(props) {
    const {id} = useParams();
    const [applicant, setApplicant] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/applicants/${id}`)
        .then(response => setApplicant(response.data.data.applicant))
        .catch(error => console.log(error));
    }, [])

    return (
        <div>
            <p>{applicant.name}</p>
            <p>{applicant.email}</p>
            <p>{applicant.phone}</p>
            <p>React {applicant.knowsReact ? 'true' : 'false'}</p>
            <p>Angular {applicant.knowsAngular ? 'true' : 'false'}</p>
            <p>Mongo {applicant.knowsMongo ? 'true' : 'false'}</p>
            <p>Express {applicant.knowsExpress ? 'true' : 'false'}</p>
        </div>
    )
}

export default ApplicantPage