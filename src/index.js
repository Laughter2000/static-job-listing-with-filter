import React from "react";
import { render } from "react-dom";
import Listing from "./Listings";
import "./style.css";

const App = () => {
  return (
    <div>
      <Listing />
    </div>
  );
};

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
