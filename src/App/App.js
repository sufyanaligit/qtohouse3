import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import HeaderTitle from '../components/HeaderTitle';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Projects from '../components/Projects';
import ProjectDetails from '../components/ProjectDetails';
import AddProject from '../components/AddProject';
import Page404 from '../components/PageNotFound';
import LoginModal from '../components/Modal';
import LoginForm from '../components/Login';
import '../antd.css';

const App = (props) => {
  const { shouldShowLoginModal } = props;
  return (
    <>
      {shouldShowLoginModal && (
        <LoginModal modalStatus={true} login={<LoginForm />} />
      )}
      <HeaderTitle />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/contactUs' component={ContactUs} />
        <Route exact path='/projects' component={Projects} />
        <Route
          exact
          path='/projects/:id'
          render={(props) => <ProjectDetails {...props} />}
        />
        <Route
          exact
          path='/addProject'
          render={(props) => <AddProject {...props} />}
        />
        <Route
          exact
          path='/editProject/:id'
          render={(props) => <AddProject {...props} />}
        />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
