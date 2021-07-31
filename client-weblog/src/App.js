import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/blogLayout/Navbar";
import Homepage from "./components/blogLayout/Homepage";
const App = () => (
  <Fragment>
    <Navbar />
    <Homepage />
  </Fragment>
);

export default App;
