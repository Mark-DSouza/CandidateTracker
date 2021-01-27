import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

function Job(props) {
    let { url } = useRouteMatch();
    
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