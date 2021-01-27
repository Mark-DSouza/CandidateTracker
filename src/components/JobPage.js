import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


function JobPage(props) {
    const {id} = useParams();
    const [job, setJob] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/jobs/${id}`)
        .then(response => setJob(response.data.data.job))
        .catch(error => console.log(error));
    }, [])

    return (
        <div>
            <p>{job.name}</p>
            <p>{job.jobCode}</p>
            <p>{job.description}</p>
        </div>
    )
}

export default JobPage