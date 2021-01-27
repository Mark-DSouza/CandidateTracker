import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Applicant from './Applicant';


function JobList(props) {
    const [applicants, setApplicants] = useState([]);
    

    useEffect(() => {
        if (props.queryString) {
            axios.get(`http://localhost:5000/applicants/?${props.queryString}`)
                .then(response => setApplicants(response.data.data.applicants))
                .catch(error => console.log(error));
        }
        else {
            axios.get(`http://localhost:5000/applicants`)
            .then(response => setApplicants(response.data.data.applicants))
            .catch(error => console.log(error));
        }
        console.log("Use Effect was run");
    }, [props.queryString])
    
    function generateJobList() {
        return applicants.map(applicant => (<Applicant applicant={applicant}/>))
    }

    return (
        <div> 
            {
                props.queryString ? <h3>Search Results</h3> : <h3>All Applicants</h3>
            }
            
            <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { generateJobList() }
                </tbody>
            </table>
        </div>
    )
}

export default JobList;