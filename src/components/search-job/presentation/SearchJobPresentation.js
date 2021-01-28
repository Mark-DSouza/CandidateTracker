import React from 'react';
import JobList from './JobList';
import preventEnterSubmit from './../../utilities/preventEnterSubmit';

function SearchJobPresentation(props) {
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

                        <form onSubmit={props.handleSubmit}>
                            <div className="row mb-4">
                                <label htmlFor="inputSearchField" className="col-lg-2 col-form-label">Search</label>
                                <div className="col-lg-8">
                                <input 
                                    name="searchField"
                                    value={props.searchField}
                                    type="text" 
                                    onChange={props.handleChange}
                                    className="form-control"
                                    id="inputSearchField"
                                    placeholder="Search for the Job based on the option selected below"
                                    onKeyDown={preventEnterSubmit}
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
                                    value={props.searchBy}
                                    onChange={props.handleChange}
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

                <JobList jobs={props.jobs} header={props.displayAllJobs? "All Jobs": "Search Results"} />
            </div>
    )
}

export default SearchJobPresentation;