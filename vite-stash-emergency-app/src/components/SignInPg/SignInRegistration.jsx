import React from "react";
import {Link} from "react-router";
import LinkButton from "../LinkButton";
import { FaUserAlt } from "react-icons/fa";


export default function SignIn() {

    return (
        <>
        <div className="container">
            <div className="header">
                <div className="text">Register</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src="" alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src="" alt="" />
                    <input type="email" />
            </div>
            <div className="input">
                    <img src="" alt="" />
                    <input type="password" />
                </div>
            </div>
        </div>
        
                <LinkButton to="/" btnClass= "homeBtn" label="Home" imgClass="homeImg" imgSrc="/img/homeButton.png" imgalt="Home Button"/>
                <LinkButton to="/plan" btnClass= "planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="/img/planButton.png" imgalt="Plan Button"/>
                <LinkButton to="/contact" btnClass= "contactBtn" label="Contact Resources" imgClass="contactImg" imgSrc="/img/contactButton.png" imgalt="Contact Button"/>
        </>
    )
}