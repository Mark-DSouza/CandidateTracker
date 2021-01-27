import React from 'react';
import axios from 'axios';
import initialState from './../data/initialState';
import {Route, Switch, Link} from 'react-router-dom';

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
        // axios.post('http://localhost:5000/applicant', newApplicant)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log('Error: ', err))
    }

    render() {
        return (
            <div className="container">
                <h3>Create New Applicant</h3>

                <form onSubmit={this.handleSubmit}>
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
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateApplicant