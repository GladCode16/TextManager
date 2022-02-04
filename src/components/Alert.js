import React from "react";

function Alert(props) {
    return (
        props.alert && <div>
            <div className="alert alert-success alert-dismissible fade show position-absolute" role="alert">
                <strong>{props.alert.msg}</strong>
            </div>
        </div>
    );
}

export default Alert;
