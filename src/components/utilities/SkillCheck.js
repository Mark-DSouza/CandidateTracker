import React from 'react';
import {Check, X} from 'react-bootstrap-icons';

function SkillCheck(props) {
    return (
        props.bool ? <Check color="green" size={32}/> : <X color="red" size={32}/>
    )
}

export default SkillCheck;