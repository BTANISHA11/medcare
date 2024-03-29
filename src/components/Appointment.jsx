import React from "react";
import {auth} from './firebase';
import {collection, addDoc} from 'firebase/firestore';
import { useState } from 'react';

function Appointment() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [position,setPosition] = useState("");
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
        if(id === "position"){
            setPosition(value);
        }
    }

    const submitHandler  = () => {
        addDoc(collection(auth, "appointment"), {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            position:position
        });
        alert("Registration Successful");
    
}

return(
    <div className="form">
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="firstName">First Name </label>
                <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
            </div>
            <div className="lastname">
                <label className="form__label" for="lastName">Last Name </label>
                <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
            </div>
            <div className="phone">
                <label className="form__label" for="phone">Phone </label>
                <input  type="phone" id="phone" className="form__input" value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone Number"/>
            </div>
            <div className="password">
                <label className="form__label" for="position">Your Problem</label>
                <textarea className="form__input" type="position"  id="position" value={position} onChange = {(e) => handleInputChange(e)} placeholder="Your Answer"/>
            </div>
        </div>
        <div class="footer">
            <button onClick={(submitHandler)} type="submit" class="btn">Submit</button>
        </div>
    </div>
   
)       
};


export default Appointment;
