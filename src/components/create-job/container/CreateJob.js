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
        axios.post('http://localhost:5000/jobs', newJob)
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
        // {<div className="container">
        //     <div className="card my-5 border-info">
        //         <div className="card-body">
        //             <h2 
        //                 className="py-3 text-center text-uppercase text-info" 
        //                 style={
        //                     {
        //                         letterSpacing: 2, 
        //                         fontWeight: "bolder"
        //                     }
        //                 }
        //             >
        //                 Create New Job
        //             </h2>

        //             <form onSubmit={this.handleSubmit}>
        //                 <div className="row mb-4">
        //                     <label htmlFor="inputName" className="col-lg-2 col-form-label">Name</label>
        //                     <div className="col-lg-8">
        //                     <input 
        //                         name="name"
        //                         type="text" 
        //                         value={this.state.name}
        //                         onChange={this.handleChange}
        //                         className="form-control"
        //                         id="inputName"
        //                     />
        //                     </div>
        //                 </div>

        //                 <div className="row mb-4">
        //                     <label htmlFor="inputJobCode" className="col-lg-2 col-form-label">Job Code</label>
        //                     <div className="col-lg-4">
        //                     <input 
        //                         name="jobCode"
        //                         type="text" 
        //                         value={this.state.jobCode}
        //                         onChange={this.handleChange}
        //                         className="form-control"
        //                         id="inputJobCode"
        //                     />
        //                     </div>
        //                 </div>

        //                 <div className="input-group mb-4">
        //                     <span className="input-group-text">Desciption</span>
        //                     <textarea 
        //                         name="description"
        //                         value={this.state.description} 
        //                         onChange={this.handleChange}
        //                         className="form-control" 
        //                         aria-label="Description"
        //                     />
        //                 </div>

        //                 <fieldset className="row mb-5">
        //                     <legend className="col-form-label col-lg-2 pt-0">Technologies</legend>
        //                     <div className="col-lg-10">
        //                         <div className="form-check">
        //                             <input 
        //                                 name="knowsReact"
        //                                 type="checkbox" 
        //                                 checked={this.state.knowsReact}
        //                                 onChange={this.handleChange}
        //                                 className="form-check-input" 
        //                                 id="reactCheck"
        //                             />

        //                             <label className="form-check-label" htmlFor="reactCheck">
        //                                 ReactJS
        //                             </label>
                                    
        //                         </div>
                                
        //                         <div className="form-check">
        //                             <input 
        //                                 name="knowsAngular"
        //                                 type="checkbox" 
        //                                 checked={this.state.knowsAngular}
        //                                 onChange={this.handleChange}
        //                                 className="form-check-input" 
        //                                 id="angularCheck" 
        //                             />
        //                             <label className="form-check-label" htmlFor="angularCheck">
        //                                 Angular
        //                             </label>
        //                         </div>

        //                         <div className="form-check">
        //                             <input 
        //                                 name="knowsMongo"
        //                                 type="checkbox" 
        //                                 checked={this.state.knowsMongo}
        //                                 onChange={this.handleChange}
        //                                 className="form-check-input" 
        //                                 id="mongoCheck" 

        //                             />
        //                             <label className="form-check-label" htmlFor="mongoCheck">
        //                                 MongoDB
        //                             </label>
        //                         </div>

        //                         <div className="form-check">
        //                             <input 
        //                                 name="knowsExpress"
        //                                 type="checkbox" 
        //                                 checked={this.state.knowsExpress}
        //                                 onChange={this.handleChange}
        //                                 className="form-check-input"
        //                                 id="expressCheck" 
        //                             />
        //                             <label className="form-check-label" htmlFor="expressCheck">
        //                                 Express
        //                             </label>
        //                         </div>
        //                     </div>
        //                 </fieldset>

        //                 <button type="submit" className="btn btn-success">Create Job</button>
        //             </form>
        //         </div>
        //     </div>








        //     {/* {<div class="card my-5">
        //         <div class="card-body">
        //             <h3>Create New Job</h3>

        //             <form onSubmit={this.handleSubmit}>
                        
        //                 <div className="form-group"> 
        //                     <label>Name: </label>
        //                     <input 
        //                         name="name"
        //                         type="text" 
        //                         value={this.state.name}
        //                         onChange={this.handleChange}
        //                         className="form-control"
        //                     />
        //                 </div>

        //                 <div className="form-group"> 
        //                     <label>Job Code: </label>
        //                     <input 
        //                         name="jobCode"
        //                         type="text" 
        //                         value={this.state.jobCode}
        //                         onChange={this.handleChange}
        //                         className="form-control"
        //                     />
        //                 </div>

        //                 <div className="input-group">
        //                     <span className="input-group-text">Desciption</span>
        //                     <textarea 
        //                         name="description"
        //                         value={this.state.description} 
        //                         onChange={this.handleChange}
        //                         className="form-control" 
        //                         aria-label="Description"
        //                     />
        //                 </div>
                                                
        //                 <div className="form-check">
        //                     <input 
        //                         name="knowsReact"
        //                         type="checkbox" 
        //                         checked={this.state.knowsReact}
        //                         onChange={this.handleChange}
        //                         className="form-check-input" 
        //                         id="flexCheckDefault"
        //                     />
        //                     <label className="form-check-label" for="flexCheckDefault">
        //                         ReactJS
        //                     </label>
        //                 </div>

        //                 <div className="form-check">
        //                     <input 
        //                         name="knowsAngular"
        //                         type="checkbox" 
        //                         checked={this.state.knowsAngualr}
        //                         onChange={this.handleChange}
        //                         className="form-check-input" 
        //                         id="flexCheckDefault" 
        //                     />
        //                     <label className="form-check-label" for="flexCheckDefault">
        //                         Angular
        //                     </label>
        //                 </div>

        //                 <div className="form-check">
        //                     <input 
        //                         name="knowsMongo"
        //                         type="checkbox" 
        //                         checked={this.state.knowsMongo}
        //                         onChange={this.handleChange}
        //                         className="form-check-input" 
        //                         id="flexCheckDefault" 

        //                     />
        //                     <label className="form-check-label" for="flexCheckDefault">
        //                         MongoDB
        //                     </label>
        //                 </div>

        //                 <div className="form-check">
        //                     <input 
        //                         name="knowsExpress"
        //                         type="checkbox" 
        //                         checked={this.state.knowsExpress}
        //                         onChange={this.handleChange}
        //                         className="form-check-input"
        //                         id="flexCheckDefault" 
        //                     />
        //                     <label className="form-check-label" for="flexCheckDefault">
        //                         Express
        //                     </label>
        //                 </div>

        //                 <div className="form-group">
        //                     <input type="submit" value="Create Applicant" className="btn btn-primary" />
        //                 </div>

        //             </form>
        //         </div>
        //     </div>} */}
        // </div>}
        )
    }
}

export default CreateJob;