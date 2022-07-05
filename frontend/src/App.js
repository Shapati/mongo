import React from "react";
import { createRef } from "react";
import Pdf from "react-to-pdf";
import { Data } from "./components/Data";
import { Login } from "./components/LoginCongtext/Login";
import { Template } from "./components/Template/Template";


const ref = createRef();

function App() {
  return (
    <div className="App">
     <Template />
      <Data  />
      <Login />
    </div>
  );
}

export default App;
