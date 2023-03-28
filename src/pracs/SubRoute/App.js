import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";

export default function App() {
  return (
    <div>
      <Link to="/">home</Link>
      <br />
      <Link to="/about">about</Link>
      <br />
      <Link to="/profiles">프로필</Link>
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
}