import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { Switch, Route } from 'react-router-dom';
import IdleTimer from 'react-idle-timer';
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
import Register from '../components/Register';
import PendingApprovals from '../components/PendingApprovals';
import UserProfile from '../components/UserProfile';
import NotAuthorized from '../components/NotAuthorized';
import IdleTimeOutModal from '../components/IdleTimeOutModal';
import '../antd.css';

const App = (props) => {
  const {
    shouldShowLoginModal,
    getLoggedInUserInfoBegin,
    isRoleAdmin,
    isError,
    isLoggedIn,
  } = props;

  const isSessionValid = !!localStorage.getItem('QTOUserId');
  const [timeout] = useState(120000); // 5 Min timeout session
  const [showModal, setShowModal] = useState(false);
  const [isTimedOut, setTimeout] = useState(false);
  let idleTimer;

  useEffect(() => {
    if (isSessionValid)
      getLoggedInUserInfoBegin(localStorage.getItem('QTOUserId'));
  }, [getLoggedInUserInfoBegin, isSessionValid]);

  const onAction = (e) => {
    setTimeout(false);
  };

  const onActive = (e) => {
    setTimeout(false);
  };

  const onIdle = (e) => {
    if (isTimedOut) {
      setShowModal(true);
    } else {
      idleTimer.reset();
      setTimeout(true);
    }
  };

  const handleClose = (e) => {
    setShowModal(false);
  };

  const handleLogout = (e) => {
    setShowModal(false);
    const { clearUserSession } = props;
    clearUserSession();
  };
  return (
    <>
      {isError &&
        message.error(
          'There is something wrong with the network request. Please try again',
          5
        )}
      {shouldShowLoginModal && (
        <LoginModal modalStatus={true} login={<LoginForm />} />
      )}
      {isSessionValid && (
        <IdleTimer
          ref={(ref) => {
            idleTimer = ref;
          }}
          element={document}
          onActive={onActive}
          onIdle={(e) => onIdle(e)}
          onAction={onAction}
          debounce={250}
          timeout={timeout}
        />
      )}
      {showModal && (
        <IdleTimeOutModal
          showModal={showModal}
          handleClose={handleClose}
          handleLogout={handleLogout}
        />
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
          render={(props) => {
            return isRoleAdmin ? <AddProject {...props} /> : <NotAuthorized />;
          }}
        />
        <Route
          exact
          path='/editProject/:id'
          render={(props) => {
            return isRoleAdmin ? <AddProject {...props} /> : <NotAuthorized />;
          }}
        />
        <Route
          exact
          path='/register'
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path='/userProfile'
          render={(props) => {
            return isLoggedIn ? <UserProfile {...props} /> : <NotAuthorized />;
          }}
        />
        <Route
          exact
          path='/pendingApprovals'
          render={(props) => {
            return isRoleAdmin ? (
              <PendingApprovals {...props} />
            ) : (
              <NotAuthorized />
            );
          }}
        />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
