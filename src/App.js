import React from "react";
import SideBar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./components/pages/home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HistoryPage from "./components/pages/home/HistoryPage";

function App() {
  return (
      <Router>
        <div className="container">
          <SideBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/history" component={HistoryPage}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
