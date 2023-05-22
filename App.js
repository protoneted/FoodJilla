import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component";

const App = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);