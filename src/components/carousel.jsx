import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
        <section className="site-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay style={{fontSize: '40px'}}>Let's dive in!</h2>
                <p className="lead" data-aos="fade-up" data-aos-delay={100}>Browse a collection of the innovations presented by women in technology at this year's GHC conference.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay>
                <div className="owl-carousel slide-one-item-alt">
                  <img src="images/featured.jpg" alt="Image" className="img-fluid" />
                  <img src="images/human_centered_ai.png" alt="Image" className="img-fluid" />
                  <img src="images/leveraging_data_cscience.jpg" alt="Image" className="img-fluid" />
                  <img src="images/talent_pipelines.jpg" alt="Image" className="img-fluid" />
                  <img src="images/cyber_security.jpg" alt="Image" className="img-fluid" />
                  <img src="images/infrastructure_as_code.jpg" alt="Image" className="img-fluid" />
                  <img src="images/IOT.jpg" alt="Image" className="img-fluid" />
                  <img src="images/react55.png" alt="Image" className="img-fluid" />
                </div>
                <div className="custom-direction">
                  <a href="#" className="custom-prev"><span><span className="icon-keyboard_backspace" /></span></a><a href="#" className="custom-next"><span><span className="icon-keyboard_backspace" /></span></a>
                </div>
              </div>
              <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay={100}>
                <div className="owl-carousel slide-one-item-alt-text">
                  <div>
                    <h2 className="section-title mb-3">Featured: Machine learning solutions in healthcare </h2>
                    <p className="lead">Tap into machine learning automation to reduce healthcare costs and improve patient outcomes.</p>
                    <p><a href="#feature-section" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                  </div>
                  <div>
                    <h2 className="section-title mb-3">Artificial intelligence</h2>
                    <p className="lead">Learn how women in engineering are designing next-gen super computers. Explore ethics in AI.</p>
                    <p><a href="#ai-section" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                  </div>
                  <div>
                    <h2 className="section-title mb-3">Big data</h2>
                    <p className="lead">Leverage data science in the fight against COVID-19. Discover quantum's role in next-gen data processing.</p>
                    <p><a href="#bigdata-section" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                  </div>
                  <div>
                    <h2 className="section-title mb-3">Culture</h2>
                    <p className="lead">Exradicate racism and sexism in the workplace and in cyberspace.</p>
                    <p><a href="#culture-section" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                  </div>
                  <div>
                    <h2 className="section-title mb-3">Cyber security</h2>
                    <p className="lead">Protect yourself from cyber security attacks in changing times.</p>
                    <p><a href="#cybersecurity-section" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                  </div>
                  <div>
                    <h2 className="section-title mb-3">DevOps</h2>
                    <p className="lead">Accelerate decision processes in deployment to assist during a pandemic. </p>
                    <p><a href="#devops-section" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                  </div>
                  <div>
                    <h2 className="section-title mb-3">Internet of things</h2>
                    <p className="lead">Explore the social and ecological benefits of blockchain. Glimpse cities of the future as envisioned by women in tech. </p>
                    <p><a href="#iot-section" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                  </div>
                  <div>
                    <h2 className="section-title mb-3">ReactJS Development</h2>
                    <p className="lead">Transform a legacy site into a ReactJS app. </p>
                    <p><a href="#reactjs-section" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };
