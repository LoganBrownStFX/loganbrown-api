import React from "react";
import "./App.css";

import Landing from "./layout/Landing/Landing";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
