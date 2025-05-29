import React from "react"
import { Link } from "react-router";
import LinkButton from "./LinkButton";



export default function HomePage() {



return(
    <>
        <div className="containerHomeInfo">
            <h3>Welcome!</h3>
                This website is designed to help you prepare for a natural disaster! 
                Find out what to do if one occurs, and provide tools and guidance for 
                you or your loved ones if you or they have been impacted.<br/>You can find 
                useful resources below! 
        </div>
        <div>
            <LinkButton to="/plan" btnClass= "planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="public/img/planButton.png" imgalt="Plan Button"/>
            <LinkButton to="/contact" btnClass= "contactBtn" label="Contact Resources" imgClass="contactImg" imgSrc="public/img/contactButton.png" imgalt="Contact Button"/>
            <LinkButton to="/about" btnClass= "aboutBtn" label="About" imgClass="aboutImg" imgSrc="public/img/aboutButton.png" imgalt="About button"/>
        </div>
    </>
    )
}