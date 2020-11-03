import React, { Component } from 'react'

export default class AI extends Component {
  render() {
    return (
        <div>
          <section>
            <div className="site-section bg-light" id="ai-section">
              <div className="col-12 text-center" data-aos="fade">
                <h2 className="section-title" style={{fontSize: '40px'}}>AI</h2>
              </div>
            </div>
            <div className="container">
              <div className="row mb-5">
              </div>
              <div className="row site-section" id="feature-section">
                <div className="col-12 text-center" data-aos="fade">
                  <h2 className="section-title" style={{fontSize: '28px'}}>Building an AI supercomputer: How we did it!</h2>
                  <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Kaoutar El Maghraoui, Principal Research Staff Member, AI Platforms and Runtimes, IBM Research</p>
                </div>
                <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                  <img src="images/ai_super_computer33.png" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-2 text-left" data-aos="fade">
                </div>
                <div className="col-sm-8 text-left" data-aos="fade">
                  <h3>Where we are with AI technologies</h3>
                  <ul>
                    <li><b style={{color: 'rgb(88, 44, 131)'}}>Narrow AI:</b> Narrow AI is centered on performing specific tasks, such as predicting successful advertising based on user input. This is what we experience widely today.</li>
                    <li><b style={{color: 'rgb(88, 44, 131)'}}>Broad AI – Disruptive and pervasive:</b> These are collections of AI tasks that share data stores across domains. An example might be a population health AI task accessing larger data sets used by census AI to predictively map infection rates based on population density.</li>
                    <li><b style={{color: 'rgb(88, 44, 131)'}}>General AI:</b> Extensive cross-domain data sharing by AI tasks. This results in learning and reasoning. This could be data consumed by multiple, cross-domain AI tasks that result in an alert to local government agencies to quarantine areas identified as burgeoning pandemic hotspots. This could also integrate with cellular APIs to notify  users of hotspots via text.</li>
                  </ul>
                  <h3>Steps to implement general AI</h3>
                  <ul>
                    <li>Understand the AI tasks that are needed</li>
                    <li>Build the ability for AI tasks to access cross-domain data stores</li>
                    <li>Build security and robustness around AI tasks and data</li>
                    <li>Develop the capability for tasks to share results and build reasoning </li>
                  </ul>
                  <p>This requires innovations on both algorithmic and hardware levels. As data grows and is shared, compute demands can double or triple over a three month period. This is unsustainable without hardware and software innovations.</p>
                  <p>IBM’s current goal is to expand the computational infrastructure required to support broad and general AI (analog AI, accelerator cores, and hardware investments).</p>
                  <h3>Introducing the AI Hardware Center Testbed</h3>
                  <p>IBM has developed a testbed to explore AI task development and evaluate the robustness, security, and performance of broad and general AI solutions.</p>
                  <p>The state-of-the-art AI supercomputer (AiMOS) is at the core of the testbed. AiMOS has the computational horsepower to conduct general AI testing, including new cross-domain tasks related to COVID-19 response.</p>
                </div>
              </div>
              <div className="site-section bg-light" id="ai-section">
                <div className="container">
                  <div className="row mb-5">
                  </div>
                  <div className="row site-section" id="ai-section">
                    <div className="col-12 text-center" data-aos="fade">
                      <h2 className="section-title" style={{fontSize: '28px'}}>The ethics of AI</h2>
                      <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Haerin Shin, Assistant Professor, Dept. of English/Cinema &amp; Media, Vanderbilt University</p>
                    </div>
                    <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                      <img src="images/ethics_of_ai33.png" alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-lg-2 text-left" data-aos="fade">
                    </div>
                    <div className="col-sm-8 text-left" data-aos="fade">
                      <h3>Post-Human Microaggressions: Algorithmic bias in media representations</h3>
                      <p>AI now permeates our everyday lives, from book and product suggestions on Amazon, to the online content we’re exposed to. Because it’s so pervasive, we may not even notice the biases we may be developing based on the media we’re delivered.</p>
                      <p style={{color: 'rgb(88, 44, 131)'}}>WT Note: Consider the staggering implications of microaggressions. These are the subtle messages we're innundated with countless times in a given day. They change how we see ourselves and others. If unchecked, these microaggressions result in widespread bias.</p>
                      <h3>Sexism in virtual assistants</h3>
                      <p>Microsoft’s AI bot Tay was quickly removed after being introduced because it began recycling racist and sexist comments that had collected uncurated in the AI’s data store. Other AI assistants, like Alexa and Siri, are perceived as female (have female names and voices). They are also servants. This further ingrains damaging stereotypes about women, assuming that women belong in servile roles within our culture.</p>
                      <h3>Damaging stereotypes and general AI </h3>
                      <p>For narrow AI, there is no reasoning or computation. For example, if you ask a virtual assistant for the weather, the assistant responds with data from a curated data store, such as NOAA cloud storage.</p>
                      <p>General AI presents a challenge. It takes data from potentially uncurated data stores and repurposes that data. This means that if the data store contains racist or sexist ideology, we could inadvertently be recycling these damaging tropes on a significant scale. Similarly, if the algorithm used is not developed with sensitivity, it can have wide-ranging negative impacts on society and culture.</p>
                      <p>As we move into general AI, it’s vital that our algorithms and data stores are monitored for damaging biases so they’re not propagated going forward. </p>
                      <h3>Example</h3>
                      <p>An algorithm in an e-book app detects that a user is a woman based on indicators within the  user’s profile and generalized marketing data targeting women. Even before the user begins to search, the algorithm returns titles it assumes that the user will prefer and hides scientific or technical titles. Enough of these messages accumulated over time reinforce the idea that the user—a woman—has no place in STEM.</p>
                    </div>
                  </div>
                  <div className="site-section bg-light" id="ai-section">
                    <div className="container">
                      <div className="row mb-5">
                      </div>
                      <div className="row site-section" id="ai-section">
                        <div className="col-12 text-center" data-aos="fade">
                          <h2 className="section-title" style={{fontSize: '28px'}}>Human-Centered AI</h2>
                          <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Alice Wroe, Creative Director, Magic Leap &amp; Joelle Zimmerman, Behavioral Scientist, Magic Leap</p>
                        </div>
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                          <img src="images/human_centered_ai33.png" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-sm-2 text-left" data-aos="fade">
                        </div>
                        <div className="col-sm-8 text-left" data-aos="fade">
                          <h3>About Mica</h3>
                          <p>Mica is a realistic digital human rendered in virtual reality and developed by Magic Leap. The creative director and a behavioral scientist at Magic Leap shared their journey in developing a virtual human that doesn’t propagate damaging stereotypes about women.</p>
                          <p style={{color: 'rgb(88, 44, 131)'}}>WT Note: In the presentations, slides depicted test users donning virtual reality headsets to see Mica. When worn, Mica would appear in the room seated accross from them. Test users would then interact.</p>
                          <h3>Creating a digital human within a feminist framework</h3>
                          <p>When Alice first met Mica, she was able to interact as she pleased. This caused Alice to walk away with concerns that this would continue stereotypes of women as passive and objectified. 
                          Magic Leap agreed with this analysis. They enlisted Alice’s help to do something empowering with the virtual human they had created. Alice’s takeaways:
                          </p><ul>
                            <li><b style={{color: 'rgb(88, 44, 131)'}}>Why were people so insistent that Mica be an assistant?</b> For generations, women have been in supportive roles. Alice was not interested in bringing the past forward in virtual human development and asks that we rewrite the script for the future.</li>
                            <li><b style={{color: 'rgb(88, 44, 131)'}}>Writing the future narrative.</b> I loved that Alice turned to art and culture to envision the future for human-to-AI interactions. She gathered inspiration from the Dada movement in art, which uses collage as a medium.
                            Alice wanted to ‘cut and stick’ a newer and better way of communicating. Instead of objectified interactions, Mika worked with users to create a piece of collage art. Users became vulnerable. They wanted it to be a good outcome and were respectful and collaborative. This proved that there can be human-system communications that are positive and collaborative.
                            </li>
                            <li>
                              <b style={{color: 'rgb(88, 44, 131)'}}>Bottom line.</b> Alice stated that we owe it to humanity to throw our highest scrutiny into our development of virtual humans and in all forms of human-representative AI.
                            </li>
                          </ul>
                          <p />
                          <h3>Human-AI interaction</h3>
                          <p>Joelle and her team collected data from 500 users that wore head, posture, and hand moving sensors to collect data during their sessions with Mika. Joelle reported the following findings from her test sessions:</p>
                          <ul>
                            <li>For head direction studies, Mika was able to shift user’s gazes by focusing on a shared object of interest. This indicates a social bond and empathy.</li>
                            <li>Over 50% of users mirrored Mika’s postures and gestures, also indicating empathy.</li>
                            <li>Reciprocity of facial expressions and smile reciprocity was noted. Users responded to Mika’s smiling 70% of the time, also indicating a bond and empathy. </li>
                            <li>Mika was greeted much as any human would be greeted, which shows great promise for human-system interactions.</li>
                          </ul>
                          <h3>Conclusion</h3>
                          <p>How we treat digital humans in the future will impact how we treat one another. Now is the time to carefully construct a virtual paradigm that will make our world a better one.</p>
                        </div>          
                      </div>   
                    </div></div></div></div></div></section>
          <div className="row site-section" id="ai-section">
          </div>
        </div>
      );
    }
  };