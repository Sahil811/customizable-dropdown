import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Dropdown from "./Dropdown";

const App = (props) => {
  const [val, setValue] = useState("");

  const getDropdownValue = (val) => setValue(val);

  console.log(val);

  return (
    <div style={{ width: "120px", height: "60px", border: "1px solid black" }}>
      <Dropdown
        getDropdownValue={getDropdownValue}
        defaultVal={"abc"}
        values={[
          { value: 1, option: "Starter" },
          { value: "abc", option: "Main Course" },
          { value: 3, option: "Desserts" },
          { value: 4, option: "Berverage" },
          { value: 5, option: "Others" }
        ]}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
