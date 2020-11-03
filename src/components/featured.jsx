import React, { Component } from 'react'

export default class Featured extends Component {
  render() {
    return (
        <div>
          <section className="site-section bg-light" id="feature-section">
            <div className="container">
              <div className="row mb-5">
              </div>
              <div className="row site-section" id="feature-section">
                <div className="col-12 text-center" data-aos="fade">
                  <a name="featured" />
                  <h2 className="section-title" style={{fontSize: '28px'}}>Featured: How automation transformed athenahealth’s</h2>
                  <h2 className="section-title" style={{fontSize: '28px'}}> Clinical Document Services operations</h2>
                  <p style={{fontSize: '13px', fontStyle: 'italic'}}>Authored and presented by Aishwarya M Jagannathan, athenahealth India, Chennai</p>
                </div>
                <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                  <img src="images/featured33.png" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-2 text-left" data-aos="fade">
                </div>
                <div className="col-sm-8 text-left" data-aos="fade">
                  <h3>The high cost of processing medical record exchanges</h3>
                  <p>Despite a 100% adoption of electronic health records (EHR) in the US, 75% of medical record and document exchanges still rely upon faxed transmissions.</p>
                  <p>When a fax is received, clinical staff must manually process these documents and file them within a patient's chart. This job consumes a lion's share of their time, when their focus should be on patient care.</p>
                  <p>To help our clients, athenahealth captures information from faxes and attaches this data patient records. athenahealth also handles the management of faxes on behalf of our clients by training employees to capture information in a timely and accurate manner.</p> 
                  <p>This was not a sustainable model from an operational cost perspective. In addition, costs to continually train employees was a challenge.</p>

                  <h3>Applying machine learning automation to reduce document processing</h3>
                  <p>The best solution was to employ machine learning (ML) automation to reduce operational costs. At the heart of this ML automation was the use of natural language processing (NLP) techniques to read and understand the content of documents. Specifically, our NLP approach utilized deep learning models to identify and extract entities off document, and report these entities back just as a human would. The good news was that in 2018, these techniques were mature enough to be deployed at production scale.</p>
                  <p>athenahealth’s document processing workflow functions like an assembly line model, where each stage represents a part of the entire job to be done and the incoming document is processed in a sequential manner. By studying each stage in the process and applying ML techniques, we were able to considerably reduce processing times that resulted in significant cost savings.</p>
                  <h3>Automated processing stages and results</h3>
                  <p>We applied machine learning techniques at the following process points to significantly reduce manual processing and costs.</p>
                  <ul>
                    <li><b style={{color: 'rgb(88, 44, 131)'}}>Automate categorization:</b> Start with a relatively easy problem to find a class from 39 possible options. Result: Machine learning can deliver at scale, which is 0.5M documents per day. <p style={{color: 'rgb(88, 44, 131)'}}>With automation, we reduced the processing time to <b>2.8M</b> from 2.9M.</p></li>
                    <li><b style={{color: 'rgb(88, 44, 131)'}}>Automate information extraction:</b> Reduce the time taken to capture data by prefilling it for users. Result: High accuracy in the data captured, resulting in faster processing with fewer errors. <p style={{color: 'rgb(88, 44, 131)'}}>This reduced processing hours to <b>2.36M</b> from 2.8M with a savings of 16% in processing time.</p></li>
                    <li><b style={{color: 'rgb(88, 44, 131)'}}>Hide high-confidence information:</b> Hide high confidence automated predictions so that the focus is only on what cannot be automated. Result: Further reduction of time in the data capture and QA processing as users only focus what was not automated.  <p style={{color: 'rgb(88, 44, 131)'}}>This reduced processing time by 11%, bringing it down to <b>2.1M</b> from 2.36M hours.</p></li>
                    <li><b style={{color: 'rgb(88, 44, 131)'}}>Skip manual QA processing:</b> If all fields are captured with high confidence by machine learning, we can skip entire manual QA process and make the processing truly “touchless.” Result: We can get high quality automation with higher accuracy even if no human QA is done. <p style={{color: 'rgb(88, 44, 131)'}}>This saves an additional 23% in processing time with the time reduced to <b>1.6M</b> from 2.1M.</p></li>
                  </ul>
                  <h3>Conclusion</h3>
                  <p>Machine learning can be applied to automate operations and heavy manual quality (QA) processes that ultimately result in reduced processing time and costs. Within the healthcare arena, these savings result in a welcome reduction in healthcare costs and more time focused upon patient care.</p>
                </div>
              </div>
            </div></section>
          <section>
            <div className="row site-section" id="feature-section">
            </div>
          </section>
        </div>
      );
    }
  };