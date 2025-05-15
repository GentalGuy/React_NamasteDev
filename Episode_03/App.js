import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HtmlElement 

const HeadingComponent = () => {
                    return <h1>Namaste React Functional Component</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />);