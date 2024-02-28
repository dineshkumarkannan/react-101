//   const root = document.getElementById("root");
//   const header = document.createElement("h1");
//   header.innerText = "Hello world!";
//   root.appendChild(header);

// const header = React.createElement("h1", {}, "Hello from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

/**
 * <div id="parent">
 *   <div id="child">
 *       <h2> Hello from Parent Child 1</h2>
 *       <h2> Hello from Parent Child 2</h2>
 *   </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "Hello from Parent Child 1"),
    React.createElement("h2", {}, "Hello from Parent Child 2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
