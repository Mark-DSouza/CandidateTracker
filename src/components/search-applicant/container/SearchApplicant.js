import React from 'react';
import axios from 'axios';
import ApplicantList2 from '../presentation/ApplicantList';
import SearchApplicantPresentation from '../presentation/SearchApplicantPresentation';

class SearchApplicant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicants: [],
            name: "",
            knowsReact: false,
            knowsAngular : false,
            knowsMongo: false,
            knowsExpress: false,
            sort: "salary"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const {name, type} = target;
        
        if (type === 'checkbox') {
            this.setState(prevState => ({
                ...prevState,
                name: "",
                [name]: target.checked
            }));
        }
        else if (type === 'text') {
            this.setState(prevState => ({
                ...prevState,
                knowsReact: false,
                knowsAngular : false,
                knowsMongo: false,
                knowsExpress: false,
                [name]: target.value
            }))
        } else {
            this.setState({
                [name]: target.value
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const currentState = {...this.state};
        delete currentState.applicants;

        currentState.name = currentState.name.trim();

        let queryString = "";
        if (currentState.name) {
            queryString = `name=${currentState.name}`
        }
        else {
            let index = 0;
            for (const property in currentState) {
                if (currentState[property]) {
                    if (index > 0) {
                        queryString = queryString.concat('&'); 
                    }
                    queryString = queryString.concat(`${property}=${currentState[property]}`);
                    index++;
                }
            }
        }

        if (queryString) {
            axios.get(`http://localhost:5000/applicants/?${queryString}`)
                    .then(response => this.setState({applicants: response.data.data.applicants}))
                    .catch(error => console.log(error));
        }

    }

    render() {
        return (    
            <SearchApplicantPresentation 
                state={this.state} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default SearchApplicant;