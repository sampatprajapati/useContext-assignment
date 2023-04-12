// Import Area
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import A from "./pages/A";

export const MyContext = createContext();

let info = {
    name: "Pratham",
    surname: "Solanki",
    mobno: "9462342567",
};

console.log(info.name);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MyContext.Provider value={info}>
            <A />
        </MyContext.Provider>
    </React.StrictMode>
);

reportWebVitals();
