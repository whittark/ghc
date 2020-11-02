import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div className="site-wrap">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle" />
              </div>
            </div>
            <div className="site-mobile-menu-body" />
          </div>
          <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6 col-xl-2">
                  <h1 className="mb-0 site-logo"><a href="https://github.com/whittark" target="_blank" className="h2 mb-0">wtgit<span className="text-primary" style={{color: 'rgb(88, 44, 131)'}}>.</span> </a></h1>
                </div>
                <div className="col-12 col-md-10 d-none d-xl-block">
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                      <li><a href="#feature-section" className="nav-link">Featured</a></li>
                      <li><a href="#ai-section" className="nav-link">AI</a></li>
                      <li><a href="#bigdata-section" className="nav-link">Big Data</a></li>
                      <li><a href="#culture-section" className="nav-link">Culture</a></li>
                      <li><a href="#cybersecurity-section" className="nav-link">Cyber Security</a></li>
                      <li><a href="#devops-section" className="nav-link">DevOps</a></li>
                      <li><a href="#iot-section" className="nav-link">IoT</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style={{position: 'relative', top: '3px'}}><a href="#" className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3" /></a></div>
              </div>
            </div>
          </header>
        </div>
      );
    }
  };