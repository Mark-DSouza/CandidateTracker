import Job from './Job';
import React from 'react';


function JobList2(props) {
    function generateJobList() {
        return props.jobs.map(job => (<Job key={job._id} job={job}/>))
    }

    return (
        <div>
            <div className="card border-success">
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
                                <th>Job Code</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { generateJobList() }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        </div>
            
    )
}

export default JobList2;