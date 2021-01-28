import React from 'react';
import preventEnterSubmit from './../../utilities/preventEnterSubmit';

function CreateJobPresentation(props) {
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
                            Create New Job
                        </h2>

                        <form onSubmit={props.handleSubmit}>
                            <div className="row mb-4">
                                <label htmlFor="inputName" className="col-lg-2 col-form-label">Name</label>
                                <div className="col-lg-8">
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
                                <label htmlFor="inputJobCode" className="col-lg-2 col-form-label">Job Code</label>
                                <div className="col-lg-4">
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

                            <button type="submit" className="btn btn-success">Create Job</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default CreateJobPresentation;