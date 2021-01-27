import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Job from './Job';


function JobList(props) {
    const [jobs, setJobs] = useState([]);
    

    useEffect(() => {
        if (props.queryString) {
            axios.get(`http://localhost:5000/jobs/?${props.queryString}`)
                .then(response => setJobs(response.data.data.jobs))
                .catch(error => console.log(error));
        }
        else {
            axios.get(`http://localhost:5000/jobs`)
            .then(response => setJobs(response.data.data.jobs))
            .catch(error => console.log(error));
        }
        console.log("Use Effect was run");
    }, [props.queryString])
    
    function generateJobList() {
        return jobs.map(job => (<Job job={job}/>))
    }

    return (
        <div>
            <div class="card border-success">
                <div class="card-header border-success text-success text-uppercase">
                    {
                        props.queryString ? "Search Results" : "All Jobs"
                    }
                </div>
                <div class="card-body">
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

export default JobList;