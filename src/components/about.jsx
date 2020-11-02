import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <div>
          <a href="#about-section" className="mouse smoothscroll">
            <span className="mouse-icon">
              <span className="mouse-wheel" />
            </span>
          </a>
          <div className="site-section cta-big-image" id="about-section">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12 text-center" data-aos="fade">
                  <h2 className="section-title mb-3" style={{fontSize: '20pt'}}>About GHC and this site</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay>
                  <img src="images/hero_1.jpg" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay={100}>
                  <div className="mb-4">
                    <p>The Grace Hopper Celebration (GHC) is a conference that brings together women in computing to discuss research and career interests. This site captures my learnings from the conference distilled into articles that take five minutes or less to consume. </p>
                    <p><b style={{color: 'rgb(88, 44, 131)'}}>DISCLAIMER: I’m solely responsible for this site and its content, which is not affiliated with athenahealth, anitab.org, or any other organization. </b></p>
                    <p>THANKS TO <b style={{color: 'rgb(88, 44, 131)'}}>athenahealth</b> for financing my attendance. I’m proud to work for a company that values women in tech as athenahealth does. </p>
                    <p>Special thanks to <b style={{color: 'rgb(88, 44, 131)'}}>Bela Labovitch</b> for organizing GHG for athenahealth attendees and <b style={{color: 'rgb(88, 44, 131)'}}>Joe Francoeur</b> for encouraging me to join! </p>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      );
    }
  };