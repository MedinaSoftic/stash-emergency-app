import React from "react"
import { Link } from "react-router";


export default function HomePage() {



return(
    <>
        <div className="containerLogo">
            <img className="LOGO" src="./src/components/stashLgLogo.png" alt="STASH LOGO"></img>
                <h1>STASH Emergency</h1>
                    <h2>Supplies, Tools, and Safety Hub</h2>
        </div>
        <div className="containerHomeInfo">
            <h3>Welcome!</h3>
                This website is designed to help you prepare for a natural disaster! 
                Find out what to do if one occurs, and provide tools and guidance for 
                you or your loved ones if you or they have been impacted.<br/>You can find 
                useful resources below! 
        </div>
        <div>
            
            <button className="planButton"><Link to={'./plan'}/></button>
        </div>
    </>
    )
}