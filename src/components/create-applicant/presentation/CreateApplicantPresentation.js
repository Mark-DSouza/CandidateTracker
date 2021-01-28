import React from 'react';
import preventEnterSubmit from './../../utilities/preventEnterSubmit';

function CreateApplicantPresentation(props) {
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
                            Create New Applicant
                        </h2>

                        <form onSubmit={props.handleSubmit}>
                            <div className="row mb-4">
                                <label htmlFor="inputName" className="col-lg-2 col-form-label">Name</label>
                                <div className="col-lg-9">
                                <input 
                                    name="name"
                                    type="text" 
                                    value={props.state.name}
                                    onChange={props.handleChange}
                                    className="form-control"
                                    id="inputName"
                                    onKeyDown={preventEnterSubmit}
                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputPhoneNumber" className="col-lg-2 col-form-label">Phone</label>
                                <div className="col-lg-9">
                                <input 
                                    name="phone"
                                    type="text" 
                                    value={props.state.phone}
                                    onChange={props.handleChange}
                                    className="form-control"
                                    id="inputPhoneNumber"
                                    onKeyDown={preventEnterSubmit}

                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputEmail" className="col-lg-2 col-form-label">Email</label>
                                <div className="col-lg-9">
                                <input 
                                    name="email"
                                    type="text" 
                                    value={props.state.email}
                                    onChange={props.handleChange}
                                    className="form-control"
                                    id="inputEmail"
                                    onKeyDown={preventEnterSubmit}

                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputLocation" className="col-lg-2 col-form-label">Location</label>
                                <div className="col-lg-9">
                                <input 
                                    name="location"
                                    type="text" 
                                    value={props.state.location}
                                    onChange={props.handleChange}
                                    className="form-control"
                                    id="inputLocation"
                                    onKeyDown={preventEnterSubmit}

                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputSalary" className="col-lg-2 col-form-label">Salary</label>
                                <div className="col-lg-4">
                                <input 
                                    name="salary"
                                    type="number" 
                                    value={props.state.salary}
                                    onChange={props.handleChange}
                                    className="form-control"
                                    id="inputSalary"
                                    onKeyDown={preventEnterSubmit}

                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputNoticePeriod" className="col-lg-2 col-form-label">Notice Period</label>
                                <div className="col-lg-3">
                                <input 
                                    name="noticePeriod"
                                    type="text" 
                                    value={props.state.noticePeriod}
                                    onChange={props.handleChange}
                                    className="form-control"
                                    id="inputNoticePeriod"
                                    onKeyDown={preventEnterSubmit}

                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputJobCode" className="col-lg-2 col-form-label">Job Code</label>
                                <div className="col-lg-3">
                                <input 
                                    name="jobCode"
                                    type="text" 
                                    value={props.state.jobCode}
                                    onChange={props.handleChange}
                                    className="form-control"
                                    id="inputJobCode"
                                    onKeyDown={preventEnterSubmit}

                                />
                                </div>
                            </div>

                            <div className="input-group mb-4">
                                <span className="input-group-text">Desciption</span>
                                <textarea 
                                    name="description"
                                    value={props.state.description} 
                                    onChange={props.handleChange}
                                    className="form-control" 
                                    aria-label="Description"
                                    onKeyDown={preventEnterSubmit}

                                />
                            </div>

                            <fieldset className="row mb-5">
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
                                            checked={props.state.knowsAngular}
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

                            <button type="submit" className="btn btn-success mb-3 ml-3">Create Applicant</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default CreateApplicantPresentation;