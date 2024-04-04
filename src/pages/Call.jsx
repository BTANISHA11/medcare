import React from "react";
import { Link } from "react-router-dom";

const Call = () => {
    return (
    <>
    <div className="details">
        <h3>You can reach out to us:</h3>
        <p>+91 9999999999</p>
        <p>+91 88888888888</p>
        <hr />
        <p>Or You can leave your contact details here: </p>
        <button><Link to="/contact">Contact</Link></button>
        </div>
    </>
    );
};

export default Call;