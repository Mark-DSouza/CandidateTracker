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
            {
                props.queryString ? <h3>Search Results</h3> : <h3>All Jobs</h3>
            }
            
            <table className="table">
                <thead className="thead-light">
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
    )
}

export default JobList;