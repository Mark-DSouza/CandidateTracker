import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Applicant from './Applicant';


function ApplicantList(props) {
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
    
    function generateApplicantList() {
        return applicants.map(applicant => (<Applicant applicant={applicant}/>))
    }

    return (
        <React.Fragment>
            <div class="card border-success mb-5">
                <div class="card-header border-success text-success text-uppercase">
                    {
                        props.queryString ? "Search Results" : "All Applicants"
                    }
                </div>
                <div class="card-body">
                    <div className="table-responsive-md">
                        <table className="table table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Salary</th>
                                    <th>Notice</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { generateApplicantList() }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        

        {/* {<div> 
            {
                props.queryString ? <h3>Search Results</h3> : <h3>All Applicants</h3>
            }
            
            <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Salary</th>
                    <th>Notice</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { generateApplicantList() }
                </tbody>
            </table>
        </div>} */}
        </React.Fragment>
    )
}

export default ApplicantList;