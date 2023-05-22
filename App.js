import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./src/component";

const App = () => {
    return (
        <>
        <Component/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);