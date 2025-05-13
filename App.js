const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    [React.createElement("h1", {}, "Hey i am H1"),React.createElement("h2", {}, "Hey i am H2")]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);