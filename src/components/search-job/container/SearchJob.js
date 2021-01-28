import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ErrorPresentation from '../presentation/ErrorPresentation';
import SearchJobPresentation from '../presentation/SearchJobPresentation';

function SearchJob(props) {
    const [displayAllJobs, setDisplayAllJobs] = useState(true);
    const [error, setError] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [searchBy, setSearchBy] = useState("jobCode");
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/jobs`)
            .then(response => setJobs(response.data.data.jobs))
            .catch(err => {setError(err); console.log(err)});
    }, []);

    function handleChange(event) {
        const {name, value} = event.target;
        if (name === 'searchBy')
            setSearchBy(value)
        else if (name === 'searchField')
            setSearchField(value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const queryString = `${searchBy}=${searchField}`;
        axios.get(`http://localhost:5000/jobs/?${queryString}`)
                .then(response => {setDisplayAllJobs(false); setJobs(response.data.data.jobs);})
                .catch(err => {setError(err); console.log(err)});
        console.log(queryString)
    }

    if (error) {
        return (
            <ErrorPresentation error={error}/>
        )
    } 
    else {
        return (
            <SearchJobPresentation 
                displayAllJobs={displayAllJobs}
                error={error}
                jobs={jobs}
                searchBy={searchBy}
                searchField={searchField}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        )
    }
}

export default SearchJob;