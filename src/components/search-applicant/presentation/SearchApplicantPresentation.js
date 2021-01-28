import React from 'react';
import ApplicantList from './ApplicantList';
import preventEnterSubmit from './../../utilities/preventEnterSubmit';

function SearchApplicantPresentation(props) {
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
                            Search For Applicants
                        </h2>

                        <form onSubmit={props.handleSubmit}>
                            <div className="row mb-2">
                                <label htmlFor="inputName" className="col-lg-2 col-form-label">Name</label>
                                <div className="col-lg-9">
                                <input 
                                    name="name"
                                    type="text"
                                    placeholder="Search by Name"
                                    value={props.state.name}
                                    onChange={props.handleChange}
                                    className="form-control"
                                    id="inputName"
                                    onKeyDown={preventEnterSubmit}
                                />
                                </div>
                            </div>

                            <h1 className="mx-5 text-center fw-bolder"><em>OR</em></h1>

                            <fieldset className="row mb-2">
                                <legend className="col-form-label col-lg-2 pt-0">Technologies</legend>
                                <div className="col-lg-10">
                                    <div className="form-check">
                                        <input 
                                            name="knowsReact"
                                            type="checkbox" 
                                            checked={props.state.knowsReact}
                                            onChange={props.handleChange}
                                            className="form-check-input" 
                                            id="reactCheck"
                                            onKeyDown={preventEnterSubmit}
                                        />

                                        <label className="form-check-label" htmlFor="reactCheck">
                                            ReactJS
                                        </label>
                                        
                                    </div>
                                    
                                    <div className="form-check">
                                        <input 
                                            name="knowsAngular"
                                            type="checkbox" 
                                            checked={props.state.knowsAngualr}
                                            onChange={props.handleChange}
                                            className="form-check-input" 
                                            id="angularCheck" 
                                            onKeyDown={preventEnterSubmit}
                                        />
                                        <label className="form-check-label" htmlFor="angularCheck">
                                            Angular
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input 
                                            name="knowsMongo"
                                            type="checkbox" 
                                            checked={props.state.knowsMongo}
                                            onChange={props.handleChange}
                                            className="form-check-input" 
                                            id="mongoCheck" 
                                            onKeyDown={preventEnterSubmit}

                                        />
                                        <label className="form-check-label" htmlFor="mongoCheck">
                                            MongoDB
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input 
                                            name="knowsExpress"
                                            type="checkbox" 
                                            checked={props.state.knowsExpress}
                                            onChange={props.handleChange}
                                            className="form-check-input"
                                            id="expressCheck" 
                                            onKeyDown={preventEnterSubmit}
                                        />
                                        <label className="form-check-label" htmlFor="expressCheck">
                                            Express
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <hr/>

                            <div  className="row mt-4">
                                <label htmlFor="applicantSortBy" className="col-lg-1 col-form-label">
                                        Sort By
                                </label>
                                <div className="col-lg-3">
                                <select
                                    name="sort"
                                    value={props.state.sort}
                                    onChange={props.handleChange}
                                    className="form-select" 
                                    aria-label="Default select example"
                                >
                                    {/* {<option selected>Open props select menu</option>} */}
                                    <option value="salary">Salary</option>
                                    <option value="noticePeriod">Notice Period</option>
                                </select>
                                </div>
                                <div className="col-lg-3">
                                    <button type="submit" className="btn btn-success mb-3 ml-3">Search For Applicant</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <ApplicantList applicants={props.state.applicants} header="Search Results" />
            </div>
    )
}

export default SearchApplicantPresentation