import React from 'react';
import axios from 'axios';
import CreateApplicantPresentation from '../presentation/CreateApplicantPresentation';

class CreateApplicant extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

    isNumeric = (str) => {
        if (typeof str != "string") return false // we only process strings!  
            return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    checkNumber = (str) => {
        let string = str
        string = string.trim()
        if(this.isNumeric(string))
            return Number.parseFloat(string)
        return 0;
    }

    handleSubmit(event) {
        event.preventDefault();
        const salary = this.checkNumber(this.state.salary);
        const noticePeriod = this.checkNumber(this.state.noticePeriod);
        const newApplicant = {...this.state, salary: salary, noticePeriod: noticePeriod};
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
            <CreateApplicantPresentation 
                state={this.state} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
            />
        )
    }
}

export default CreateApplicant