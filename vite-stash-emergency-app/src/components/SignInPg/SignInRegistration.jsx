import React, {useState} from "react";
import {Link, useNavigate} from "react-router";
import axios from "axios";
import LinkButton from "../LinkButton";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import "./SignInRegistration.css"



export default function SignIn() {

    const navigate = useNavigate();
    const [register, setRegister] = useState("Sign Up");

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (register === "Sign Up") {
                console.log("Sending formData:", formData);
                await axios.post("http://localhost:8080/api/auth/register", formData);
            } else {
                await axios.post("http://localhost:8080/api/auth/login", {
                    email: formData.email,
                    password: formData.password,
                });
            }
            navigate("/dashboard"); // redirect to dashboard on success
            } catch (err) {
            console.error("Error during auth:", err);
            alert("Login/Register failed. Check console for details.");
        }
    };
    

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="container">
            <div className="header">
                <div className="text">{register}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    {register === "Login" ? <div></div> : (
                    <div>
                        <div className="img"><span><FaUser /></span></div>
                        <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                    </div>
                    )}
                </div>
                <div className="input">
                    <div className="img"><span><MdEmail /></span></div>
                    <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
                </div>
                <div className="input">
                    <div className="img"><span><RiLockPasswordLine /></span></div>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                </div>
            </div>
            <div className="submit-contaier">
                <div className={register==="Login"?"Submit gray":"Submit"} onClick={()=>{setRegister("Sign Up")}}>Sign Up</div>
                <div className={register==="Sign Up"?"Submit gray":"Submit"} onClick={()=>{setRegister("Login")}}>Login</div>
            <button 
                type="submit" 
                className="Submit"
                disabled={!formData.email || !formData.password || (register !== "Login" && !formData.name)}>
                Submit
            </button>
            </div>
        </div>
        </form>
                <LinkButton to="/" btnClass= "homeBtn" label="Home" imgClass="homeImg" imgSrc="/img/homeButton.png" imgalt="Home Button"/>
                <LinkButton to="/plan" btnClass= "planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="/img/planButton.png" imgalt="Plan Button"/>
                <LinkButton to="/contact" btnClass= "contactBtn" label="Contact Resources" imgClass="contactImg" imgSrc="/img/contactButton.png" imgalt="Contact Button"/>
                <LinkButton to="/about" btnClass="aboutBtn" label="About" imgClass="aboutImg" imgSrc="/img/aboutButton.png" imgalt="About button" />
                
        </>
    )
}
