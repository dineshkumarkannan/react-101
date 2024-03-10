import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HtmlElement

const header = (
    <h1 className="head" tabIndex="1">
        Test Jsx
    </h1>
);

// React Functional Component

// const HeadingComponent = () => {
//     return <h1>Heading from HeadingComponent</h1>;
// };

let number = 1000;

const Title = () => {
    return <h1>Title</h1>;
};

const titleElm = <h2>Title Elm</h2>;

const HeadingComponent = () => (
    <div id="container">
        {1234 + 1234}
        {Title()}
        {<Title />}
        <Title></Title>
        {/* {titleElm} */}
        {/* {number} */}
        {/* {console.log("test from jsx")} */}
        <h2 className="heading">Heading from HeadingComponent</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header);
root.render(<HeadingComponent />);
