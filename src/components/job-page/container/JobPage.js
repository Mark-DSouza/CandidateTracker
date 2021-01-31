import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import JobPagePresentation from '../presentation/JobPagePresentation';



function JobPage(props) {
    const {id} = useParams();
    const [job, setJob] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/jobs/${id}`)
        .then(response => setJob(response.data.data.job))
        .catch(error => console.log(error));
    }, [])

    return (
        <JobPagePresentation job={job} />
    )
}

export default JobPage