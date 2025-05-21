import React from "react"
import {Link} from 'react-router'
import LinkButton from "./LinkButton"

export default function Contact() {




    return(
        <>
        <div>
            <LinkButton to="/" btnClass= "homeBtn" label="Home" imgClass="homeImg" imgSrc="src/img/homeButton.png" imgAlt="Home Button"/>
            <LinkButton to="/plan" btnClass= "planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="src/img/contactButton.png" imgAlt="Plan Button"/>
            <LinkButton to="/about" btnClass= "aboutBtn" label="About" imgClass="contactImg" imgSrc="src/img/aboutButton.png" imgAlt="About button"/>
        </div>
        </>
    )
}