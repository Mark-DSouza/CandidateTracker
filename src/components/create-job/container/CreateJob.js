import React from 'react'
import axios from 'axios';
import CreateJobPresentation from '../presentation/CreateJobPresentation';

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
        axios.post('http://localhost:5000/api/v1/jobs', newJob)
            .then(res => console.log(res.data))
            .catch(err => console.log('Error: ', err))

        
    }
    render() {
        return (
            <CreateJobPresentation 
                state={this.state} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
            />
        )
    }
}

export default CreateJob;