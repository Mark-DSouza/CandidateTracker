import React from 'react';

function ErrorPresentation(props) {
    return (
        <div className="container">
            <div className="card my-5 border-info">
                <div className="card-body">
                    Error: {props.error}
                </div>
            </div>
        </div>
    )
}

export default ErrorPresentation;