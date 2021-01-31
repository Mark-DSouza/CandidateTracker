import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import ApplicantPagePresentation from './../presentation/ApplicantPagePresentation';



function ApplicantPage(props) {
    const {id} = useParams();
    const [applicant, setApplicant] = useState({})
    const [isEditingApplicant, setIsEditingApplicant] = useState(false)

    useEffect(() => {
        if (isEditingApplicant === false) {
            axios.get(`http://localhost:5000/api/v1/applicants/${id}`)
            .then(response => setApplicant(response.data.data.applicant))
            .catch(error => console.log(error));
        }
    }, [isEditingApplicant, id])

    function handleClickEdit() {
        setIsEditingApplicant(true)
    }

    function handleClickDelete() {
        axios.delete(`http://localhost:5000/api/v1/applicants/${id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    return (
        <React.Fragment>
            <ApplicantPagePresentation 
                applicant={applicant} 
                isEditingApplicant={isEditingApplicant}
                setIsEditingApplicant={setIsEditingApplicant}
                handleClickEdit={handleClickEdit}
                handleClickDelete={handleClickDelete}
                id={id}
            />
            
        </React.Fragment>
    )
}

export default ApplicantPage