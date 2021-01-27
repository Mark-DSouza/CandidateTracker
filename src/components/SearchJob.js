
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
        const {name, value} = event.target;
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
                <div className="card my-5 border-info">
                    <div className="card-body">
                        <h2 
                            className="py-3 text-center text-uppercase text-info" 
                            style={
                                {
                                    letterSpacing: 2, 
                                    fontWeight: "bolder"
                                }
                            }
                        >
                            Search For Jobs
                        </h2>

                        <form onSubmit={this.handleSubmit}>
                            <div className="row mb-4">
                                <label htmlFor="inputSearchField" className="col-lg-2 col-form-label">Search</label>
                                <div className="col-lg-8">
                                <input 
                                    name="searchField"
                                    value={this.state.searchField}
                                    type="text" 
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="inputSearchField"
                                    placeholder="Search for the Job based on the option selected below"
                                />
                                </div>
                            </div>

                            <div  className="row mt-4">
                                <label htmlFor="jobSearchBy" className="col-lg-2 col-form-label">
                                        Search By
                                </label>
                                <div className="col-lg-3">
                                <select
                                    name="searchBy"
                                    value={this.state.searchBy}
                                    onChange={this.handleChange}
                                    className="form-select" 
                                    aria-label="Select Search By"
                                    id="jobSearchBy"
                                >
                                    <option value="jobCode">Job Code</option>
                                    <option value="name">Name</option>
                                </select>
                                </div>
                                <div className="col-lg-3">
                                    <button type="submit" className="btn btn-success mb-3 ml-3">Search For Job</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>


                {/* {<div class="card border-info my-5">
                    <div class="card-body">
                        <h3>Search For Applicants</h3>
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
                        </form>*/}

                <JobList queryString={this.state.queryString} />
            </div>
        )
    }
}

export default SearchJob;