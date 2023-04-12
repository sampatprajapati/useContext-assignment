import React, { useContext } from "react";
import B from "./B";
import { MyContext } from "..";

export default function A() {
    // {} = destructuring/ extracting information
    //2.1 Hooks Aerea
    const x = useContext(MyContext);

    //2.2

    //2.3
    return (
        <>
            <h1>A Component {x.name}</h1>
            <B></B>
        </>
    );
}
