import React from "react";
import MyLayout from "../../MyLayout";

function HomeLayout(){

    return (
        <div className="hommWrapper">
            Home
        </div>
    )
}
export default function Home(){

    return (
        <>
            <MyLayout
                container={<HomeLayout/>}
            />
        </>
    )
}