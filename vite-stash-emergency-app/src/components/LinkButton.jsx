import React from "react";
import {Link} from "react-router"

export default function LinkButton(props) {

    return(
        <Link to={props.to}>
            <button className={props.btnClass}>
                {props.imgSrc && (
                    <img 
                        className={props.imgClass}
                        src={props.imgSrc}
                        alt={props.imgAlt || ''}
                    />
                )}
                {props.label}
            </button>
        </Link>
    )
}