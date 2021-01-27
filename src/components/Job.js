import React from 'react';
import {Link} from 'react-router-dom';

function Job(props) {
    
    return (
        <tr>
            <td>{props.job.name}</td>
            <td>{props.job.jobCode}</td>
            <td>
                <Link to={`/jobs/job/${props.job._id}`}>View</Link>
            </td>
        </tr>
    )
}

export default Job;