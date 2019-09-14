import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import Landing from "./layout/Landing/Landing";
import Navbar from "./layout/Navbar/Navbar";
import Education from "./components/education/Education";
import Github from "./components/github/Github";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/github" component={Github} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
