import React from 'react';
import {Link} from 'react-router-dom';

function Applicant(props) {
    // let { url } = useRouteMatch();
    
    return (
        <tr>
            <td>{props.applicant.name}</td>
            <td>{props.applicant.email}</td>
            <td>{props.applicant.phone}</td>
            <td>
                <Link to={`/applicants/applicant/${props.applicant._id}`}>View</Link>
            </td>
        </tr>
    )
}

export default Applicant;