import React from "react"
import { Link } from 'react-router'
import ContactCard from "./ContactCard"
import LinkButton from "../LinkButton"

export default function Contact() {

    return (
        <>
            <h3>FOR MEDICAL ASSISTANCE: PLEASE CALL 9-1-1 OR YOUR</h3><h3>LOCAL POLICE DEPARTMENT</h3>
            <div className="FlexCard">
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>FEMA</h2>
                            <p></p>
                        </div>
                        <div className="back">
                            <ContactCard title="FEMA" number="1-800-621-3362" email="AskIA@fema.dhs.gov" mail="FEMA P.O. Box 10055 Hyattsville, MD 20782-8055"></ContactCard>
                            <p>Dail 211 to connect with local social services and referrals for emergency housing.</p>
                            <p>To find a FEMA shelter, text SHELTER and your ZIP code to 43362</p>
                            <p>You can also find emergency shelters on the FEMA app.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <div className="front">
                            <h2>USA.Gov</h2>
                            <p></p>
                        </div>
                        <div className="back">
                            <ContactCard title="USAGov" number="1-844-872-4681" email="AskIA@fema.dhs.gov" mail="FEMA P.O. Box 10055 Hyattsville, MD 20782-8055"></ContactCard>                
                            <p>To find a FEMA shelter, text SHELTER and your ZIP code to 43362</p>
                            <p>You can also find emergency shelters on the FEMA app.</p>
                        </div>
                    </div>
                </div>
                <div className="emergency">
                    <div className="card">
                        <div className="card-inner">
                            <div className="front">
                                <h2>Red Cross</h2>
                                <p></p>
                            </div>
                            <div className="back">
                                <ContactCard title="Red Cross" number="1-800-733-2767" email="customercare@redcross.org" mail="430 17th Street, NW, Washington, DC 20006"></ContactCard>
                                <p>To find a FEMA shelter, text SHELTER and your ZIP code to 43362</p>
                                <p>You can also find emergency shelters on the FEMA app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <LinkButton to="/" btnClass="homeBtn" label="Home" imgClass="homeImg" imgSrc="src/img/homeButton.png" imgAlt="Home Button" />
                <LinkButton to="/plan" btnClass="planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="src/img/contactButton.png" imgAlt="Plan Button" />
                <LinkButton to="/about" btnClass="aboutBtn" label="About" imgClass="contactImg" imgSrc="src/img/aboutButton.png" imgAlt="About button" />
            
        </>
    )
}