import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameErr, setFirstnameErr] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameErr, setLastnameErr] = useState("");
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const newUser = { username, email, password } = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password };
        console.log("Welcome", newUser);
        // inside of the createUser function
        // setUsername("");
    };

    const handleFirstname = (e) => {
        setFirstname(e.target.value)
        if(e.target.value.length < 2){
            setFirstnameErr("First Name must be at least 2 characters")
        }else {
            setFirstnameErr("")
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value)
        if(e.target.value.length < 2){
            setLastnameErr("Last Name must be at least 2 characters")
        } else {
            setLastnameErr("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 5){
            setEmailErr("Email must be at least 5 characters long")
        } else {
            setEmailErr("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
        if (e.target.value.length < 8){
            setPasswordErr("Password must be at least 8 characters");
        }else if (e.target.value !== confirmPassword){
            setPasswordErr("Passwords must match");
        }else{
            setPasswordErr("")
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        console.log(e.target.value);
        if (e.target.value.length < 8){
            setPasswordErr("Password must be at least 8 characters");
        }else if (e.target.value !== password){
            setPasswordErr("Passwords must match");
        }else{
            setPasswordErr("")
        }
    }

    return (
        <fieldset>
            <legend>form</legend>
            <form onSubmit={createUser}>
                <div>
                    <label>Firstname: </label>
                    <input type="text" onChange={ handleFirstname} name="firstname" value={firstname} />
                </div>
                <div>
                    <label>Lastname: </label>
                    <input type="text" onChange={ handleLastname } name="lastname" value={lastname} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ handleEmail } name="email" value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } name="password" value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handleConfirmPassword } name="confirmPassword" value={confirmPassword} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>
                    {firstnameErr}
                </p>
                <p>
                    {lastnameErr}
                </p>
                <p>
                    {emailErr}
                </p>
                <p>
                    {passwordErr}
                </p>
            </div>
        </fieldset>

    );
};

export default UserForm;