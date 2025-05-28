import React from "react";
import {Link} from "react-router";

export default function LinkButton(props) {

    return(
        //the aria label allows users using voice over to hear the information on the screen by giving a text description even if my alt fails to load,
        //it will read the label of the button. 
        <Link to={props.to}>
            <button className={props.btnClass} aria-label={props.label}> 
                {props.imgSrc && (
                    <img 
                        className={props.imgClass}
                        src={props.imgSrc}
                        alt={props.imgalt || props.label}
                    />
                )}
                {props.label}
            </button>
        </Link>
    )
}