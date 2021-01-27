import {Route, Switch} from 'react-router-dom';
import JobList from './JobList';
import React from 'react';

class SearchJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryStirng: "",
            searchBy: "jobCode",
            searchField: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value, type} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const currentState = {...this.state};
        const queryString = `${currentState.searchBy}=${currentState.searchField}`;
        this.setState(prevState => {
            return {
                ...prevState,
                queryString: queryString
            }
        })
        console.log(queryString)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    
                    <div  className="my-3">
                        <label htmlFor="jobSearchBy" className="form-label">
                                Search By
                        </label>
                        <select
                            name="searchBy"
                            value={this.state.searchBy}
                            onChange={this.handleChange}
                            className="form-select" 
                            aria-label="Default select example"
                        >
                            {/* {<option selected>Open this select menu</option>} */}
                            <option value="jobCode">Job Code</option>
                            <option value="name">Name</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="jobSearchField" className="form-label">
                            Search
                        </label>
                        <input 
                            name="searchField"
                            value={this.state.searchField}
                            type="text" 
                            onChange={this.handleChange}
                            className="form-control" 
                            id="jobSearchField" 
                            aria-describedby="emailHelp" 
                        />
                        <div id="emailHelp" className="form-text">
                            Search for the job based on the field selected above
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-success">Search</button>
                </form>

                <JobList queryString={this.state.queryString} />

            </div>
        )
    }
}

export default SearchJob;