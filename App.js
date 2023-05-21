import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./src/component";

const App = () => {
    return (
        <>
        <h1>hello</h1>
        <Component/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);