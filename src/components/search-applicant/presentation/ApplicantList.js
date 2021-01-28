import React from 'react';
import Applicant from './Applicant';


function ApplicantList(props) {
    function generateApplicantList() {
        return props.applicants.map(applicant => (<Applicant key={applicant._id} applicant={applicant}/>))
    }

    return (
        <div>
            <div className="card border-success mb-5">
                <div className="card-header border-success text-success text-uppercase">
                    {
                        props.header
                    }
                </div>
                <div className="card-body">
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
        </div>
    )
}

export default ApplicantList;