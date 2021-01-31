import React from 'react';
import axios from 'axios';
import EditApplicantPresentation from '../presentation/EditApplicantPresentation';

class EditApplicant extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.props.applicant,
            salary: this.props.applicant.salary.toString(),
            noticePeriod: this.props.applicant.noticePeriod.toString()
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
        console.log(typeof this.state.salary, typeof this.state.noticePeriod);
        const salary = this.checkNumber(this.state.salary);
        const noticePeriod = this.checkNumber(this.state.noticePeriod);
        const newApplicant = {...this.state, salary: salary, noticePeriod: noticePeriod};
        console.log(newApplicant)
        axios.patch(`http://localhost:5000/api/v1/applicants/${this.props.id}`, newApplicant)
            .then(res => console.log(res.data))
            .catch(err => console.log('Error: ', err))
        this.props.setIsEditingApplicant(false)
    }

    
    render() {
        return (
            <EditApplicantPresentation 
                applicant={this.state} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
            />
        )
    }
}

export default EditApplicant