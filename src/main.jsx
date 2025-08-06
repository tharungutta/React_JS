// acts as a "JS file"
//!".jsx"--> JavaScript XML --> JSX faster than normal JS
//* acts as a entry file

//? Here we have to import 2 main JS library 1) react   2)react-dom
//! Syntax : import variable fom "library"--> default import

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

// ReactDOM.CreateRoot(container).render(content)
//CreateRoot(container) --> document.getElementById("root")
//render(content) --> string,number,JSX,component