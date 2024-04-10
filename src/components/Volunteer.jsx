import {useState} from 'react';
import './volunteer.scss'
import {auth} from './firebase';
import {collection, addDoc} from 'firebase/firestore';
function RegistrationForm() {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [position,setPosition] = useState("");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "position"){
            setPosition(value);
        }


    }

    const submitHandler  = () => {
            addDoc(collection(auth, "volunteers"), {
                firstName: firstName,
                lastName: lastName,
                email: email,
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
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="position">Why do you want to be a volunteer?</label>
                    <textarea className="form__input" type="position"  id="position" value={position} onChange = {(e) => handleInputChange(e)} placeholder="Your Answer"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={(submitHandler)} type="submit" class="btn">Submit</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm
