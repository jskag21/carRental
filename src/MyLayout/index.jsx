import React from "react";
import Home from "../pages/Home";
export default function MyLayout(props){


    return(
        <div className="mainContainer">
            {props.container}
        </div>
    )
}