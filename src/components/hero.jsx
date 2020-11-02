import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
        <div className="site-blocks-cover overlay" style={{backgroundImage: 'url(images/hero_2.jpg)'}} data-aos="fade" id="home-section">
          <div className="container">
            <div className="row align-items-center justify-content-right">
              <div className="col-sm-1 col-sm-11 mt-sm-5 text-right">
                <h1 data-aos="fade-up">GHC in under 5</h1>
                <p id="purple-h">Access snapshot coverage of</p>
                <p id="purple-h"><b>anitab.org's Grace Hopper 2020</b>
                </p><p id="purple-h"><b>Celebration</b> for women in</p>
                <p id="purple-h">tech and their allies. </p>
                <p id="purple-i"><b>Review presentation highlights </b></p>
                <p id="purple-h"><b>in five minutes or less per article. </b></p>
                <div data-aos="fade-up" data-aos-delay={100}>
                  <a href="https://anitab.org/" target="_blank" className="btn smoothscroll btn-primary mr-2 mb-2">Visit anitab.org</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };