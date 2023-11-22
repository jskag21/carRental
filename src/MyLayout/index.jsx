import React from "react";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import '../assets/common/all.css';
import { Banner } from "../components/MyHeader";
import './index.css';

export default function MyLayout(props){

    

    return(
        <div className="mainContainer">
           
            <MyHeader/>
                {props.container}
             <Banner/>
            <MyFooter/>
        </div>
    )
}