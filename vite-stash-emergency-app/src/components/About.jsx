import React from "react"
import {Link} from "react-router"
import LinkButton from "./LinkButton"

export default function About() {



return(
    <>
        <div>
            <LinkButton to="/" btnClass= "homeBtn" label="Home" imgClass="homeImg" imgSrc="src/img/homeButton.png" imgAlt="Home Button"/>
            <LinkButton to="/plan" btnClass= "planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="src/img/planButton.png" imgAlt="Plan Button"/>
            <LinkButton to="/contact" btnClass= "contactBtn" label="Contact Resources" imgClass="contactImg" imgSrc="src/img/contactButton.png" imgAlt="Contact Button"/>
        </div>
    </>
    )
}