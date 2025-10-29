import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Hello React from JSX!</h1>;

const FunctionalComponent = () => {
  return (
    <div>
      {jsxHeading}
      <h1>Hello React from FunctionalComponent!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
