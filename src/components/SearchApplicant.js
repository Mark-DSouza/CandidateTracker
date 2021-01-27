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

        console.log(queryString);

        this.setState({
            queryString: queryString
        })
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
                            Search For Applicants
                        </h2>

                        <form onSubmit={this.handleSubmit}>
                            <div className="row mb-2">
                                <label htmlFor="inputName" className="col-lg-2 col-form-label">Name</label>
                                <div className="col-lg-9">
                                <input 
                                    name="name"
                                    type="text"
                                    placeholder="Search by Name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    id="inputName"
                                />
                                </div>
                            </div>

                            <h1 className="mx-5 text-center fw-bolder"><em>OR</em></h1>

                            <fieldset className="row mb-2">
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

                            <hr/>

                            <div  className="row mt-4">
                                <label htmlFor="applicantSortBy" className="col-lg-1 col-form-label">
                                        Sort By
                                </label>
                                <div className="col-lg-3">
                                <select
                                    name="sort"
                                    value={this.state.sort}
                                    onChange={this.handleChange}
                                    className="form-select" 
                                    aria-label="Default select example"
                                >
                                    {/* {<option selected>Open this select menu</option>} */}
                                    <option value="salary">Salary</option>
                                    <option value="noticePeriod">Notice Period</option>
                                </select>
                                </div>
                                <div className="col-lg-3">
                                    <button type="submit" className="btn btn-success mb-3 ml-3">Search For Applicant</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>






                {/* {<div class="card border-info my-5">
                    <div class="card-body">
                        <h3>Search For Applicants</h3>

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

                        </div>
                </div>} */}

                <ApplicantList queryString={this.state.queryString} />
            </div>
        )
    }
}

export default SearchApplicant;