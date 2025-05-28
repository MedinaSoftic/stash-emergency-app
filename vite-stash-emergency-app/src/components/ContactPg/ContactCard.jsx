import React from "react"

export default function ContactCard(props){
    return(
        <div className="ContactCard">
            <p>{props.title}</p>                
            <p>Phone Number: {props.number}</p>    
            <p>Email: {props.email}</p>
            <p>Mailing Address: {props.mail}</p>       
        </div>
    )
}