import React from 'react';
import ApplicantList from './ApplicantList';

class SearchApplicant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryString: "",
            name: "",
            knowsReact: false,
            knowsAngular : false,
            knowsMongo: false,
            knowsExpress: false
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
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const currentState = {...this.state};
        delete currentState.queryString;

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

        this.setState({
            queryString: queryString
        })
    }

    render() {
        return (    
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="jobSearchField" className="form-label">
                            Search by Name
                        </label>
                        <input 
                            name="name"
                            value={this.state.name}
                            type="text" 
                            onChange={this.handleChange}
                            className="form-control" 
                            id="jobSearchField" 
                            aria-describedby="emailHelp" 
                        />
                    </div>

                    <h1 className="mx-5 text-center fw-bolder"><em>OR</em></h1>

                    <div className="my-3">
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
                                checked={this.state.knowsAngular}
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
                    </div>

                    
                    <button type="submit" className="btn btn-success">Search</button>
                </form>

                <ApplicantList queryString={this.state.queryString} />

            </div>
        )
    }
}

export default SearchApplicant;