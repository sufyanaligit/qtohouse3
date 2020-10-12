import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import {
  DownOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../../images/logo.png';

const HeaderTitle = (props) => {
  const { isLoggedIn, loggedInUserName, isAdminLoggedIn } = props;
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e) => {
    const { clearUserSession } = props;
    if (e.key === '3') {
      clearUserSession(loggedInUserName);
      setVisible(false);
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const handleShowLoginModal = (event) => {
    const { setIsLoginState } = props;
    setIsLoginState(true);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='1'>
        <UserSwitchOutlined />
        User Profile
      </Menu.Item>
      <Menu.Item key='3'>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <header className='w-100'>
      <div className='topbar bg-color2 w-100'>
        <div className='container-fluid'>
          <div className='row mrg align-items-center'>
            <div className='col-md-6 col-sm-12 col-lg-6 text-left'>
              <ul className='top-links d-inline-flex mb-0 list-unstyled w-100'>
                <li>
                  <a href={() => false} title=''>
                    Get your free Quantity TakeOff quote now!
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-6 text-right'>
              <ul className='top-links d-inline-flex justify-content-end mb-0 list-unstyled w-100'>
                <li>
                  <a href={() => false} title=''>
                    <i className='fas fa-shopping-cart'></i>Cart
                    <span className='badge'>0</span>
                  </a>
                </li>
                <li>
                  <a href={() => false} title=''>
                    <i className='fas fa-phone-alt'></i>1-718-717-2601
                  </a>
                </li>
                <li>
                  <a href={() => false} title=''>
                    <i className='fas fa-envelope'></i>
                  </a>
                </li>
                <li>
                  {!isLoggedIn ? (
                    <a
                      href={() => false}
                      title=''
                      onClick={handleShowLoginModal}
                    >
                      <i className='fas fa-lock'></i>Login
                    </a>
                  ) : (
                    <Dropdown
                      overlay={menu}
                      onVisibleChange={handleVisibleChange}
                      visible={visible}
                    >
                      <a
                        href={() => false}
                        className='ant-dropdown-link'
                        onClick={(e) => e.preventDefault()}
                      >
                        {loggedInUserName} <DownOutlined />
                      </a>
                    </Dropdown>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='logo-menu w-100'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-2 col-sm-2'>
              <div className='logo'>
                <h1 className='mb-0'>
                  <NavLink className='nav-link' activeClassName='active' to='/'>
                    <img className='img-fluid' src={Logo} alt='Logo' />
                  </NavLink>
                </h1>
              </div>
              <span className='menu-btn'>
                <i className='fas fa-align-center'></i>
              </span>
            </div>
            <div className='col-md-10 col-sm-10'>
              <div className='menu-wrap'>
                <div className='logo'>
                  <h1 className='mb-0'>
                    <NavLink
                      className='nav-link'
                      activeClassName='active'
                      to='/HomePage'
                    >
                      <img className='img-fluid' src={Logo} alt='Logo' />
                    </NavLink>
                  </h1>
                </div>
                <span className='close-btn'>
                  <i className='fas fa-times'></i>
                </span>
                <div className='row'>
                  <div className='col-md-12 col-sm-12 col-lg-5'>
                    <form className='header-search position-relative'>
                      <input type='text' placeholder='Search projects' />
                      <button type='submit'>
                        <i className='fas fa-search'></i>
                      </button>
                    </form>
                  </div>
                  <div className='col-md-12 col-sm-12 col-lg-7'>
                    <nav>
                      <ul className='d-inline-flex mb-0 list-unstyled'>
                        <li>
                          <NavLink
                            className='nav-link'
                            activeClassName='active'
                            to='/projects'
                          >
                            Projects
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className='nav-link'
                            activeClassName='active'
                            to='/Clients'
                          >
                            Clients
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className='nav-link'
                            activeClassName='active'
                            to='/sampleProjects'
                          >
                            Sample Projects
                          </NavLink>
                        </li>
                        {/* <li>
                          <a href={() => false} title="">
                            Coverage Area
                          </a>
                        </li> */}
                        <li>
                          <NavLink
                            className='nav-link'
                            activeClassName='active'
                            to='/aboutUs'
                          >
                            About Us
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className='nav-link'
                            activeClassName='active'
                            to='/contactUs'
                          >
                            Contact Us
                          </NavLink>
                        </li>
                        {isAdminLoggedIn && (
                          <>
                            <li>
                              <NavLink
                                className='nav-link'
                                activeClassName='active'
                                to='/addProject'
                              >
                                Add Project
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                className='nav-link'
                                activeClassName='active'
                                to='/pendingApprovals'
                              >
                                Approvals
                              </NavLink>
                            </li>
                          </>
                        )}

                        <NavLink
                          className={classNames('thm-btn gold-btn-bg')}
                          to='/register'
                        >
                          Register
                        </NavLink>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTitle;
