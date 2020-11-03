import React, { Component } from 'react'

export default class IoT extends Component {
  render() {
    return (
        <section>
          <div className="site-section bg-light" id="iot-section">
            <div className="col-12 text-center" data-aos="fade">
                <h2 className="section-title" style={{fontSize: '40px'}}>Internet of Things</h2>
              </div>
          </div>
          <div className="container">
            <div className="row-mb">
            </div>
            <div className="row site-section " id="iot-section">
              <div className="col-12 text-center" data-aos="fade">
                <h2 className="section-title" style={{fontSize: '28px'}}>IoT + blockchain: Why it matters to you</h2>
                <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Xinlin Wang, Senior Technical Staff Member, IBM &amp; </p>
                <p style={{fontSize: '13px', fontStyle: 'italic'}}>Carole Corley, Senior Technical Staff Member, IBM</p>
              </div>
               <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                 <img src="images/blockchain33.png" alt="Image" className="img-fluid" />
              </div>
              <div className="col-lg-2 text-left" data-aos="fade">
              </div>
              <div className="col-sm-8 text-left" data-aos="fade">     
              <h3>Blockchain basics</h3>
              <p>A blockchain is a distributed ledger of all transactions and the state the items tracked within that ledger. Blockchains contain smart contracts with the business logic for processing transactions. Blockchains are: </p>
              <ul>
                <li><b style={{color: 'rgb(88, 44, 131)'}}>Immutable:</b> The record of all transactions can’t be changed and are easily audited.
                </li>
                  <li><b style={{color: 'rgb(88, 44, 131)'}}>Secure:</b> Transactions are secure, authenticated, and verifiable.</li>
                  <li><b style={{color: 'rgb(88, 44, 131)'}}>Distributed:</b> The transaction ledger and node reside on each chain in the blockchain network, which  circumvents performance and user issues associated with a centralized data store.</li>
                  <li><b style={{color: 'rgb(88, 44, 131)'}}>Transparent:</b> Each member of the blockchain can view all transactions, engendering trust in the network.</li>
                </ul>
                <h3>About the internet of things (IoT)</h3>
                <p>IoTs are physical objects embedded with software, electronics, sensors, and network connectivity, which enables them to collect and exchange data. Smart watches, cars, buildings, and manufacturing machinery can all be considered as IoTs. </p>
                <p>Depending on the object, IoTs can collect data such as physical locations, temperature, acceleration, light sensitivity, security, performance, and user interactions. This includes the ability to track objects through a distribution chain.</p>
                <h3>How these work together</h3>
                <p>IoT blockchains can work together to monitor the movement and security of exchanged goods. Great parings are using IoT blockchain to track goods in a food supply chain, detect and prevent counterfeit operations, or validate the identity and qualifications of a supplier.</p>
                <h3>IoT blockchain example 1: Tracking and tracing in food chains </h3>
                <p>With IoT blockchain, there is transparency in all aspects of food production and its transfer. This transparency extends from the food’s origin to the consumer. With RFID tags, sensors, and cameras in each stop in the chain, vendors and consumers alike can trust that the food is fresh, uncontaminated, and safe to eat. This exponentially reduces food waste.</p>
                <h3>IoT blockchain example 2: Ensuring pharmaceutical compliance</h3>
                <p>Drugs and vaccines produced can also be tagged and tracked at every point in their production and distribution. The transparency in pharma distribution prevents unauthorized distribution or counterfeiting. All aspects of the drug manufacture are visible to all in the chain. This can save billions of dollars that can be reinvested in healthcare.</p>
                <h3>Blockchain networks transform supplier management</h3>
                <ul>
                  <li>Blockchain verifies the identity of the supplier; others in the chain can see this certification.</li>
                  <li>Product information is gathered during production to ensure quality.</li>
                  <li>Products are tagged or coded for tracking.</li>
                  <li>Vendors and consumers can trust the quality of the products, resulting in compliance and less waste.</li>
                </ul>
                <h3>Summary</h3>
                <p>IoT blockchain combinations have far-reaching impacts on how goods are produced, distributed, and consumed, saving businesses and consumers money by ensuring quality and compliance while eradicating waste. This powerful combination is one method for building a better, safer world, both economically and ecologically.</p>
              </div>
            </div>
            <div className="site-section bg-light" id="iot-section">
              <div className="container">
                <div className="row mb-5">
                </div>
                <div className="row site-section" id="iot-section">
                  <div className="col-12 text-center" data-aos="fade">
                    <h2 className="section-title" style={{fontSize: '28px'}}>Living in the material world: Reconciling humans and</h2>
                    <h2 className="section-title" style={{fontSize: '28px'}}>technology through smart materials</h2>
                    <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Aditi Maheshwari, Technology R&amp;D Specialist, Accenture Labs </p>
                  </div>
                  <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                    <img src="images/IOT33.png" alt="Image" className="img-fluid" />
                  </div>
                  <div className="col-sm-2 text-left" data-aos="fade">
                  </div>
                  <div className="col-sm-8 text-left" data-aos="fade">
                    <h3>About smart materials</h3>
                    <p>Smart materials are objects that can store and transmit data. Your car and cell phone are good examples of existing smart materials. As the internet of things grows, smart materials will become more sophisticated and will expand to include everyday textiles and building materials.</p>
                    <p>Example: Smart floors that can detect when an elderly resident has fallen and can communicate with other devices to obtain help.</p>
                    <p>Infrastructures of smart objects that communicate with one another constitute the foundation of a smart city.</p>
                    <h3>Challenges of smart cities</h3>
                    <ul>
                      <li>Privacy and anonymity.
                      </li>
                      <li>The need for human-centric technology.</li>
                      <li>Digital overstimulation.</li>
                      <li>Upkeep of an urban infrastructure.</li>
                    </ul>
                    <h3>How physical materials help</h3>
                    <ul>
                      <li>They can introduce less invasive methods of capturing data to preserve user privacy.
                      </li>
                      <li>They enable personalization in products and services for a more inclusive, human-centric experience.</li>
                      <li>They communicate in more natural and seamless ways to tackle digital overstimulation.</li>
                      <li>They add autonomy to physical objects that lends itself to infrastructure upkeep and sustainability. </li>
                    </ul>
                    <h3>Examples of human-centered smart materials</h3>
                    <ul>
                      <li>Intelligent walls and floors that can tell if someone has fallen and alert others to help.
                      </li>
                      <li>Remote health wearables that can detect symptoms early on.</li>
                      <li>HTI researchers and designers creating building materials that look like wooden panels but that contain the sensors of a smart home.</li>
                      <li>Nanoseptic touchpoints that automatically clean and disinfect surfaces. </li>
                    </ul>
                    <h3>What makes a material smart?</h3>
                    <p>A smart material is any material that can react to external stimuli in a visible or tangible way. They can also be a collection of materials and electronics used to create a responsive system. </p>
                    <p>Additional examples of smart materials and material systems:</p>
                    <ul>
                      <li>The Jackard jacket has embedded sensors that can operate your smart phone. Tap or brush a sleeve to turn your phone on or play music while biking.
                      </li>
                      <li>A collection of products, such as smart watches and smart running shoes, that exchange data to track progress and ensure that an exercise session is healthful and not harmful.</li>
                    </ul>
                    <h3>Wait…this gets crazy… (crazy awesome)!</h3>
                    <ul>
                      <li>Nutritionally-balanced meals that have biodegradable packaging and contain sensors that ensure that the food is safe. </li>
                      <li>Cars with self-healing coats that can repair their own scratches and never need to be washed. These also have self-cleaning textiles. The dash has no distracting buttons; the user touches the dash to control the AC and other controls.</li>
                      <li>Streets have sensors imbedded to detect traffic volumes which users can view from their smart cars.</li>
                      <li>Office buildings are 3D printed with no waste materials. Energy is pulled from coated windows that use solar to power the building.</li>
                      <li>Homes with self-cleaning surfaces had me at ‘hello.’ :-)</li>
                    </ul>
                  </div>
                </div>
              </div></div></div></section>
      );
    }
  };