import React, { Component } from 'react'

export default class DevOps extends Component {
  render() {
    return (
        <div>
          <section>
            <div className="site-section bg-light" id="devops-section">
              <div className="col-12 text-center" data-aos="fade">
                <h2 className="section-title" style={{fontSize: '40px'}}>DevOps</h2>
              </div>
            </div>
            <div className="container">
              <div className="row-mb">
              </div>
              <div className="row site-section " id="devops-section">
                <div className="col-12 text-center" data-aos="fade">
                  <h2 className="section-title" style={{fontSize: '28px'}}>How Kubernetes operators can rescue DevSecOps</h2>
                  <h2 className="section-title" style={{fontSize: '28px'}}> in the midst of a pandemic</h2>
                  <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Shikha Srivastava, Distinguished Engineer, Master Inventor</p>
                  <p style={{fontSize: '13px', fontStyle: 'italic'}}>&amp; Swati Nair, Developer (IBM)</p>
                </div>
                <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                  <img src="images/kubernetes_133.png" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-2 text-left" data-aos="fade">
                </div>
                <div className="col-sm-8 text-left" data-aos="fade">     
                  <h3>DevSecOps challenges</h3>
                  <p>Shikha and Swati shared that as application development expands within the cloud, the responsibilities of DevSecOps teams also increases. The use of microservices overlaps with operations such as upgrades and downgrades, which is also overlapped by security measures to ensure that applications and data are not at risk. </p>
                  <p style={{color: 'rgb(88, 44, 131)'}}>WT Note: While the presenter mentions Kubernetes and Docker, which are open source container systems and services, the concepts presented apply to other containerized app platforms as well, such as Azure App Service.</p>
                  <p>Imposed upon this is the challenge of getting applications to market quickly, as well as ensuring performance. </p>
                  <p>The solution proposed is to break legacy code into containers. Maintain the code with services to automate processes.</p>
                  <h3>Breaking monoliths into containers</h3>
                  <p>When translating a legacy application into a cloud application, the first steps are easy. Review the code to find logical break points for containerization. Containers can run in any compute environment and are isolated, which improves security.</p>
                  <p>The challenge occurs once the application is containerized and requires ongoing upgrade, downgrade, or service maintenance.</p>
                  <h3>Using Kubernetes to automate maintenance tasks </h3>
                  <p>Kubernetes is an open-source container and service manager application. With Kubernetes, you can easily scale, implement services, and upgrade or download with simple commands. These tasks are more easily maintained by grouping nodes into master nodes.</p>
                  <h3>Nodes and master nodes</h3>
                  <p>Once nodes are grouped into master nodes, you can monitor and control changes more easily across an application. You can also use operators, custom Kubernetes controllers, that manage applications and their components.</p>
                  <h3>Defining operators</h3>
                  <p>Operators help DevOpsSec teams to create a design pattern of controllers that maintain nodes and master nodes. Operators take knowledge of an application’s lifecycle to automate checks that were previously completed as manual processes by DevOpsSec teams. </p>
                  <p>Access features to build or customize operators for horizonal or vertical scaling of your application or to provide updates that were previously applied manually.</p>
                  <p>Prerequisites to building an operator:</p>
                  <ul>
                    <li>Have a basic knowledge of Golang and Kubernetes</li>
                    <li>Know your application well</li>
                    <li>Have Kubernetes and the Operator-SDK installed</li>
                  </ul>
                  <h3>Building operators</h3>
                  <ul>
                    <li>Create a new project</li>
                    <li>Add the Memcached API</li>
                    <li>Define the configurable types in _types.go that you need the operator to control</li>
                  </ul>
                </div>
              </div>
              <div className="site-section bg-light" id="devops-section">
                <div className="container">
                  <div className="row mb-5">
                  </div>
                  <div className="row site-section" id="devops-section">
                    <div className="col-12 text-center" data-aos="fade">
                      <h2 className="section-title" style={{fontSize: '28px'}}>Infrastructure as code: Equip yourself  </h2>
                      <h2 className="section-title" style={{fontSize: '28px'}}>for the changing world</h2>
                      <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Sonali Kalgaonkar, Senior Product Development Manager, Intuit</p>
                      <p style={{fontSize: '13px', fontStyle: 'italic'}}>&amp; Swati Nair, Developer (IBM)</p>
                    </div>
                    <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                      <img src="images/infrastructure_as_code33.png" alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-sm-2 text-left" data-aos="fade">
                    </div>
                    <div className="col-sm-8 text-left" data-aos="fade">
                      <h3>Optimizing infrastructure</h3>
                      <p>Sonali expressed that as engineers, we work hard to get quality, stable solutions to customers in a timely manner. An optimized infrastructure can get quality software to market faster with limited human error.</p>
                      <h3>Scrapping manual processes</h3>
                      <p>With CI/CD, key IT infrastructure tasks from 'racking and stacking' to deployment can be automated. The more automation there is, the less chance there is of human error and the faster an organization can deploy.</p>
                      <p>Cloud development lends itself to this automation.</p>
                      <h3>Challenges in cloud computing </h3>
                      <p>In the cloud, we can easily scale for our application needs. But the cloud can’t currently help with configuration inconsistencies. Even if your systems are in the cloud, they can still be configured inconsistently.</p>
                      <p>Here are the challenges Sonali identified:</p>
                      <ul>
                        <li><b style={{color: 'rgb(88, 44, 131)'}}>Server sprawl:</b> Now that we can easily spawn servers with the click of a button, we can over-generate servers. This can create inconsistencies between servers.</li>
                        <li><b style={{color: 'rgb(88, 44, 131)'}}>Snowflake servers:</b> This model lends to ‘snowflake servers’ – fragile servers that no one is supposed to touch. Over time, this can result in a pool of ‘snowflakes.'</li>
                        <li><b style={{color: 'rgb(88, 44, 131)'}}>Automation fear</b></li>
                        <li><b style={{color: 'rgb(88, 44, 131)'}}>Mismatched configuration across servers</b></li>
                      </ul>
                      <h3>Best practices</h3>
                      <ul>
                        <li>Version control your infrastructure-as-code files</li>
                        <li>Continually test systems and processes</li>
                        <li>Rely upon CI/CD</li>
                        <li>Use self-documenting systems and implement code reviews</li>
                        <li>Monitor continuously</li>
                        <li>Collaborate continuously</li>
                        <li>Apply incremental changes</li>
                        <li>Be agile and strict</li>
                      </ul>
                    </div>
                  </div>
                  <div className="site-section" id="devops-section">
                    <div className="container">
                      <div className="row mb-5">
                      </div>
                      <div className="row site-section" id="devops-section">
                        <div className="col-12 text-center" data-aos="fade">
                          <h2 className="section-title" style={{fontSize: '28px'}}>DevOps + data science: Reduce time to </h2>
                          <h2 className="section-title" style={{fontSize: '28px'}}>data driven decisions</h2>
                          <p style={{fontSize: '13px', fontStyle: 'italic'}}>Koel Ghosh, Data Scientist &amp;</p>
                          <p style={{fontSize: '13px', fontStyle: 'italic'}}>Jacob Yunker, Software Engineering Coach, Target</p>
                        </div>
                        <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                          <img src="images/reduce_time_data_decisions33.png" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-sm-2 text-left" data-aos="fade">
                        </div>
                        <div className="col-sm-8 text-left" data-aos="fade">
                          <h3>Sharing data with stakeholders in real time</h3>
                          <p>Real time feedback is more important than ever for smooth operations and deployment in our current climate. Koel and Jacob used opensource technology and data science to enhance the DevOps dashboard and share data with stakeholders in real time.</p>
                          <h3>Data Science for DevOps and roadblocks</h3>
                          <p>For DevOps, the data science used must translate to the DevOps dashboard.</p>
                          <ul>
                            <li>Sharing the dashboard with a business partner can be challenging. Any changes to the dashboard have to be sent again.</li>
                            <li>For the experience to be interactive, data must be fully accessible and live from the user’s end; nor should there be a software download requirement. Data should be accessed from a link that the user bookmarks.</li>
                          </ul>
                          <p>Challenges to using commercial dashboard services:</p>
                          <ul>
                            <li>There can be limitations within commercial dashboard use. They tend to be inflexible.</li>
                            <li>Changes to the dashboard may not properly update for business partners</li>
                            <li>There can be scalability and rendering issues as the data store increases</li>
                          </ul>
                          <p>To overcome this, the dashboard must be connected to the actual application and its data stores.</p>
                          <h3>Consequences </h3>
                          <p>Outdated information results and business partners not getting the updates they need or in wasted development time used to refresh the content.</p>
                          <h3>Solution objectives</h3>
                          <ul>
                            <li>Instead of using a commercial dashboard, begin by using lightweight, scalable microservices that react in real time to changes in data.</li>
                            <li>Find out exactly what your end-user audience needs to remain informed and accessible. Build a small app based on that. It doesn’t have to be beautiful or elaborate to start. Start small and build from there to develop a useful dashboard for visualization.</li>
                            <li>Use the coding languages your organization employs for data science as a platform.</li>
                          </ul>
                          <h3>Solution</h3>
                          <ul>
                            <li>Use Docker to containerize the application dashboard. It’s lightweight and always runs consistently. This creates a space of control for endless customization within the dashboard.</li>
                            <li>Add data pipelines to the dashboard application with auto refresh.</li>
                            <li>Trigger an automated build for CI/CD to always publish the latest.</li>
                            <li>Use GitHub to trigger iterative builds.</li>
                            <li>Use Drone as a continuous integration delivery service. Each time a change is detected, Drone updates the docker image in a new container, automatically removes the old container, and deploys.</li>
                            <li>Use Kubernetes Autoscale as demand increases or decreases.</li>
                          </ul>
                          <h3>Summary</h3>
                          <p>This solution creates an automated dashboard that is agile, scalable, and reflects data in real-time. It also leaves room for customization and design.</p>
                        </div>
                      </div>
                    </div></div></div></div></div></section>
          <section>
            <div className="row site-section" id="devops-section">
            </div>
          </section>
        </div>
      );
    }
  };