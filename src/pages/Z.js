import React, { useContext } from "react";
import { MyContext } from "../index";

export default function Z() {
    const myinfo = useContext(MyContext);
    return (
        <>
            {console.log(myinfo)}
            <h1>
                Z Component {myinfo.name + " "}
                {myinfo.surname}
            </h1>
        </>
    );
}
