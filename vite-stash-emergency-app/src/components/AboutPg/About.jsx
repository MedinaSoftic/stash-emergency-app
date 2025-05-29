import React from "react";
import {Link} from "react-router";
import LinkButton from "../LinkButton";
import "./About.css";
import founderImg from "../../img/founder.jpeg";

export default function About() {



return(
    <>
    <div className="pg">   
    <h4>ABOUT OUR SERVICES</h4>
    <p>
        STASH Emergency is a free online hub to assist people in preproration for natural disasters such as Tornados,
        Earthquakes, and Wildfires. People can get cought off guard and be unprepared for these disasters 
        so a centralized location for logging supplies, understanding the tools availible and knowing the
        proper saftey protocalls is important. People who prepare are more likley have less issues during
        these unpredicaple situations. We source our information from reputable and trusted sources such as
        FEMA, USA.Gov and Red Cross and bring it to one centralized location. You can learn more about these
        sources in the Contact Resources section.
    </p>
    <p>
        Don't take a chance of being unprepared and start to STASH
        your supplies now!
    </p> 
    <div className="founderBlock">
    <h4>Learn more about our founder</h4>
    <p>Medina Softic was born in Lengefeld, Germany, and immigrated to the United States with her family at a young age. 
    From an early age, she was driven by a passion for helping others, which led her to pursue a career in the medical field. 
    She began her journey in general then pediatric care, but over time, felt the need to expand her skill set and impact.
    Her transition into physical therapy—initially as a front desk coordinator—opened unexpected doors. As the clinics software
     and hardware systems required increasing attention, she naturally evolved into a systems administrator, managing both technical 
     operations and IT upgrades. It was here that she discovered her second passion: technology.
    Eager to combine her drive to help others with her growing interest in tech, Medina found LaunchCode—an opportunity to enter the 
    tech world and contribute on a larger, more technical scale.
    While attending LaunchCode, she witnessed an alarming increase in local disasters and storms. Friends and neighbors were being impacted,
     often unprepared. Motivated to take action, Medina began developing STASH Emergency, a solution to help communities stay ready and resilient in times of crisis.</p>
    <p></p>
    </div>
    <div className="founderLink">
    <a href="https://www.linkedin.com/in/medina-softic-363015200/">Linkedin</a>
   
    <img className="founder" src="./public/img/founder.jpeg" alt="Founder Img"/>

    
    <a href="https://github.com/MedinaSoftic">GitHub</a>
    </div>
    </div>
        <LinkButton to="/" btnClass= "homeBtn" label="Home" imgClass="homeImg" imgSrc="public/img/homeButton.png" imgalt="Home Button"/>
        <LinkButton to="/plan" btnClass= "planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="public/img/planButton.png" imgalt="Plan Button"/>
        <LinkButton to="/contact" btnClass= "contactBtn" label="Contact Resources" imgClass="contactImg" imgSrc="public/img/contactButton.png" imgalt="Contact Button"/>
    </>
    )
}