import React from 'react'
import axios from 'axios';

class CreateJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            jobCode: "",
            description: "",
            knowsReact: false,
            knowsAngular: false,
            knowsMongo: false,
            knowsExpress: false,
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
    }

    handleSubmit(event) {
        event.preventDefault();
        const newJob = {...this.state};
        axios.post('http://localhost:5000/jobs', newJob)
            .then(res => console.log(res.data))
            .catch(err => console.log('Error: ', err))

        
    }
    render() {
        return (
            <div className="container">
                <h3>Create New Job</h3>

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
                        <label className="form-check-label" for="flexCheckDefault">
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
                        <label className="form-check-label" for="flexCheckDefault">
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
                        <label className="form-check-label" for="flexCheckDefault">
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
                        <label className="form-check-label" for="flexCheckDefault">
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

export default CreateJob;