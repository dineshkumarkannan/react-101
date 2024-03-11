import React from "react";
import ReactDOM from "react-dom/client";
// Components
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Body />
        </div>
    );
};

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<AppLayout />);
