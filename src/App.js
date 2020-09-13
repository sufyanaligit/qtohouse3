import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import HeaderTitle from "./components/HeaderTitle";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Page404 from "./components/PageNotFound";
import "./antd.css";

function App() {
  return (
    <>
      <HeaderTitle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/contactUs" component={ContactUs} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
