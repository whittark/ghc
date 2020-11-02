import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-5">
                    <h2 className="footer-heading mb-4">About Me</h2>
                    <p>I'm a technical writer at athenahealth who is exploring technologies to optimize product communications.</p>
                    <p>I built this site to share my findings from GHC 2020 and also to practice developing within a React framework.</p>
                    <p>React uses JS6, which is translated into JS5 for browsers. I need a lot of practice. :-)</p>
                    <p>It was my pleasure to develop the site and an honor to attend GHC!</p>
                  </div>
                  <div className="col-md-3 ml-auto">
                    <h2 className="footer-heading mb-4">Quick Links</h2>
                    <ul className="list-unstyled">
                      <li><a href="#feature-section" className="smoothscroll">Featured</a></li>
                      <li><a href="#ai-section" className="smoothscroll">AI</a></li>
                      <li><a href="#bigdata-section" className="smoothscroll">Big Data</a></li>
                      <li><a href="#culture-section" className="smoothscroll">Culture</a></li>
                      <li><a href="#cybersecurity-section" className="smoothscroll">Cyber Security</a></li>
                      <li><a href="#devops-section" className="smoothscroll">DevOps</a></li>
                      <li><a href="#iot-section" className="smoothscroll">IoT</a></li>
                      <li><a href="#reactjs-section" className="smoothscroll">ReactJS</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row pt-5 mt-5 text-center">
                <div className="col-md-12">
                  <div className="border-top pt-5">
                  </div>
                </div>
              </div>
            </div>
          </div></footer>
      );
    }
  };