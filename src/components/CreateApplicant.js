import React from 'react';
import axios from 'axios';
import initialState from './../data/initialState';


class CreateApplicant extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...initialState(
                {
                    name: "",
                    email: "",
                    phone: "",
                    location: "",
                    salary: "",
                    noticePeriod: "",
                    jobCode: "",
                    description: "",
                }
            )
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const {name, type} = target;
        const value = type === 'checkbox' ? target.checked : target.value;
        
        this.setState({
            [name]: value
        })

        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
        const salary = Number.parseFloat(this.state.salary);
        const newApplicant = {...this.state, salary: salary};
        console.log(newApplicant)
        axios.post('http://localhost:5000/applicants', newApplicant)
            .then(res => console.log(res.data))
            .catch(err => console.log('Error: ', err))
        this.setState(
            {
                name: "",
                email: "",
                phone: "",
                location: "",
                salary: "",
                noticePeriod: "",
                jobCode: "",
                description: "",
                knowsReact: false,
                knowsAngular: false,
                knowsMongo: false,
                knowsExpress: false,
            }
        )
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
                            Create New Applicant
                        </h2>

                        <form onSubmit={this.handleSubmit}>
                            <div className="row mb-4">
                                <label htmlFor="inputName" className="col-lg-2 col-form-label">Name</label>
                                <div className="col-lg-9">
                                <input 
                                    name="name"
                                    type="text" 
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="inputName"
                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputPhoneNumber" className="col-lg-2 col-form-label">Phone</label>
                                <div className="col-lg-9">
                                <input 
                                    name="phone"
                                    type="text" 
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="inputPhoneNumber"
                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputEmail" className="col-lg-2 col-form-label">Email</label>
                                <div className="col-lg-9">
                                <input 
                                    name="email"
                                    type="text" 
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="inputEmail"
                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputLocation" className="col-lg-2 col-form-label">Location</label>
                                <div className="col-lg-9">
                                <input 
                                    name="location"
                                    type="text" 
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="inputLocation"
                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputSalary" className="col-lg-2 col-form-label">Salary</label>
                                <div className="col-lg-4">
                                <input 
                                    name="salary"
                                    type="number" 
                                    value={this.state.salary}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="inputSalary"
                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputNoticePeriod" className="col-lg-2 col-form-label">Notice Period</label>
                                <div className="col-lg-3">
                                <input 
                                    name="noticePeriod"
                                    type="text" 
                                    value={this.state.noticePeriod}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="inputNoticePeriod"
                                />
                                </div>
                            </div>

                            <div className="row mb-4">
                                <label htmlFor="inputJobCode" className="col-lg-2 col-form-label">Job Code</label>
                                <div className="col-lg-3">
                                <input 
                                    name="jobCode"
                                    type="text" 
                                    value={this.state.jobCode}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="inputJobCode"
                                />
                                </div>
                            </div>

                            <div className="input-group mb-4">
                                <span className="input-group-text">Desciption</span>
                                <textarea 
                                    name="description"
                                    value={this.state.description} 
                                    onChange={this.handleChange}
                                    className="form-control" 
                                    aria-label="Description"
                                />
                            </div>

                            <fieldset className="row mb-5">
                                <legend className="col-form-label col-lg-2 pt-0">Technologies</legend>
                                <div className="col-lg-10">
                                    <div className="form-check">
                                        <input 
                                            name="knowsReact"
                                            type="checkbox" 
                                            checked={this.state.knowsReact}
                                            onChange={this.handleChange}
                                            className="form-check-input" 
                                            id="reactCheck"
                                        />

                                        <label className="form-check-label" htmlFor="reactCheck">
                                            ReactJS
                                        </label>
                                        
                                    </div>
                                    
                                    <div className="form-check">
                                        <input 
                                            name="knowsAngular"
                                            type="checkbox" 
                                            checked={this.state.knowsAngualr}
                                            onChange={this.handleChange}
                                            className="form-check-input" 
                                            id="angularCheck" 
                                        />
                                        <label className="form-check-label" htmlFor="angularCheck">
                                            Angular
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input 
                                            name="knowsMongo"
                                            type="checkbox" 
                                            checked={this.state.knowsMongo}
                                            onChange={this.handleChange}
                                            className="form-check-input" 
                                            id="mongoCheck" 

                                        />
                                        <label className="form-check-label" htmlFor="mongoCheck">
                                            MongoDB
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input 
                                            name="knowsExpress"
                                            type="checkbox" 
                                            checked={this.state.knowsExpress}
                                            onChange={this.handleChange}
                                            className="form-check-input"
                                            id="expressCheck" 
                                        />
                                        <label className="form-check-label" htmlFor="expressCheck">
                                            Express
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <button type="submit" className="btn btn-success mb-3 ml-3">Create Applicant</button>
                        </form>

                    {/* {    <form onSubmit={this.handleSubmit}>
                            <div className="form-group"> 
                                <label>Name: </label>
                                <input 
                                    name="name"
                                    type="text" 
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group"> 
                                <label>Phone: </label>
                                <input 
                                    name="phone"
                                    type="text" 
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group"> 
                                <label>Email: </label>
                                <input 
                                    name="email"
                                    type="text" 
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group"> 
                                <label>Location: </label>
                                <input 
                                    name="location"
                                    type="text" 
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group"> 
                                <label>Salary: </label>
                                <input 
                                    name="salary"
                                    type="number" 
                                    value={this.state.salary}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group"> 
                                <label>Notice Period: </label>
                                <input 
                                    name="noticePeriod"
                                    type="text" 
                                    value={this.state.noticePeriod}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group"> 
                                <label>Job Code: </label>
                                <input 
                                    name="jobCode"
                                    type="text" 
                                    value={this.state.jobCode}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </div>

                            <div className="input-group">
                                <span className="input-group-text">Desciption</span>
                                <textarea 
                                    name="description"
                                    value={this.state.description} 
                                    onChange={this.handleChange}
                                    className="form-control" 
                                    aria-label="Description"
                                />
                            </div>

                            
                            <div className="form-check">
                                <input 
                                    name="knowsReact"
                                    type="checkbox" 
                                    checked={this.state.knowsReact}
                                    onChange={this.handleChange}
                                    className="form-check-input" 
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    ReactJS
                                </label>
                            </div>

                            <div className="form-check">
                                <input 
                                    name="knowsAngular"
                                    type="checkbox" 
                                    checked={this.state.knowsAngualr}
                                    onChange={this.handleChange}
                                    className="form-check-input" 
                                    id="flexCheckDefault" 
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Angular
                                </label>
                            </div>

                            <div className="form-check">
                                <input 
                                    name="knowsMongo"
                                    type="checkbox" 
                                    checked={this.state.knowsMongo}
                                    onChange={this.handleChange}
                                    className="form-check-input" 
                                    id="flexCheckDefault" 

                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    MongoDB
                                </label>
                            </div>

                            <div className="form-check">
                                <input 
                                    name="knowsExpress"
                                    type="checkbox" 
                                    checked={this.state.knowsExpress}
                                    onChange={this.handleChange}
                                    className="form-check-input"
                                    id="flexCheckDefault" 
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Express
                                </label>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Create Applicant" className="btn btn-primary" />
                            </div>
                        </form>} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateApplicant