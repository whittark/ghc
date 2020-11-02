import React, { Component } from 'react'

export default class CyberSecurity extends Component {
  render() {
    return (
        <section>
          <div className="site-section bg-light" id="cybersecurity-section">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title" style={{fontSize: '40px'}}>Cyber Security</h2>
            </div>
          </div>
          <div className="container">
            <div className="row-mb">
            </div>
            <div className="row site-section " id="cybersecurity-section">
              <div className="col-12 text-center" data-aos="fade">
                <h2 className="section-title" style={{fontSize: '28px'}}>Identity theft &amp; protection: Safeguard your identities</h2>
                <h2 className="section-title" style={{fontSize: '28px'}}>in professional &amp; personal lives</h2>
                <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Evelyn Lam, Identity and Access Management (IAM) Security Architect, Morgan Stanley</p>
              </div>
              <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                <img src="images/cyber_security33.png" alt="Image" className="img-fluid" />
              </div>
              <div className="col-lg-2 text-left" data-aos="fade">
              </div>
              <div className="col-sm-8 text-left" data-aos="fade">     
                <h3>User behavior and security</h3>
                <p>The speaker was preparing for a trip to New York when she found a cheat sheet of her husband’s passwords in a drawer. When she confronted him asking why he would write this information down, his response was that he couldn’t remember all of the passwords he had. </p>
                <p>She saw this as a part of a larger, more common problem that shouldn’t be solved by changing user behavior. Until safer solutions that don’t rely on user workarounds are developed, Evelyn recommends using a password safe to store encrypted user name and password pairs. </p>
                <h3>Security risks during COVID-19</h3>
                <p>Security risks are further exacerbated by the majority of us working from home, shifting our work network into our home network. Our home PC and network is less likely to have the latest security applications installed. The cybercriminal sees opportunities in this shift with an objective of financial gain.</p>
                <h3>Tips to stay safe </h3>
                <p>Beware of public networks. For example, a cybercriminal parked outside of a busy Starbucks and tapped into the free Wi-Fi to intercept all encrypted data.  The presenter urged to think twice before using public Wi-Fi (when in doubt, don't use it).</p>
                <p>Additional tips from Evelyn: </p>
                <ul>
                  <li>Secure your home router. Ensure that security is up to date, change the password regularly, and set up a guest password for visitors that’s also changed regularly.</li>
                  <li>Be vigilant of phishing emails. There will be more of these during this time. Many will be warnings that your account will shut down if you don’t log in. Always verify the source of an email. Key logger is the worst kind, which can pick up the keystrokes used to log in, thus picking up your user name and password.</li>
                  <li>Invest in a password manager to generate a password for all of your accounts. You don’t have to remember all of the passwords; you only need to remember the password for the password manager.</li>
                  <li>Never reuse a password. While many online entities disallow password reuse, some still allow this. Ensure that you use a different password each time.</li>
                </ul>
              </div>
            </div>
          </div></section>
      );
    }
  };