import React, { Component } from 'react'

export default class BigData extends Component {
  render() {
    return (
        <div>
          <section>
            <div className="site-section bg-light" id="bigdata-section">
              <div className="col-12 text-center" data-aos="fade">
                <h2 className="section-title" style={{fontSize: '40px'}}>Big Data</h2>
              </div>
            </div>
            <div className="container">
              <div className="row-mb">
              </div>
              <div className="row site-section " id="bigdata-section">
                <div className="col-12 text-center" data-aos="fade">
                  <h2 className="section-title" style={{fontSize: '28px'}}>What You Need to Know About Quantum Computing</h2>
                  <h2 className="section-title" style={{fontSize: '28px'}}>for Scientists, Engineers, and Developers</h2>
                  <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Kate Waimey Timmerman, Executive Director, Chicago Quantum Exchange</p>
                  <p style={{fontSize: '13px', fontStyle: 'italic'}}>Anastasia Marchenkova, Quantum Researcher, Belximo
                  </p><p style={{fontSize: '13px', fontStyle: 'italic'}}>K. Birgitta Whaley, Director, Berkeley Quantum Information</p>
                  <p style={{fontSize: '13px', fontStyle: 'italic'}}>Sophia Economou, Professor of Physics, Virginia Tech</p>
                  <p style={{fontSize: '13px', fontStyle: 'italic'}}>&amp; Sarah Sheldon, Quantum Computing Manager, IBM Research</p>
                </div>
                <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                  <img src="images/quantum44.png" alt="Image" className="img-fluid" />
                </div>
                <div className="col-lg-2 text-left" data-aos="fade">
                </div>
                <div className="col-sm-8 text-left" data-aos="fade">
                  <h3>Quantum computing and data processing</h3>
                  <p style={{color: 'rgb(88, 44, 131)'}}>WT Note: I added this to big data as initial applications will likely be to process massive data stores for data with more than one state. One potential use may be to process public health information, which can have responses of both yes (1) and no (0) simultaneously. Example: A patient's smoking status may be no (0) but they were previously a smoker (1) and both answers impact the patient’s health (X).</p>
                  <p style={{color: 'rgb(88, 44, 131)'}}>Here's what I gathered from this session.</p>
                  <p>Quantum computing is the development of computer technologies based on the principles of quantum theory, which explains the behavior of energy and material on atomic and subatomic levels.</p>
                  <p>The computers that we use today encode information in bits that take values of 1 or 0. This restricts their ability. Quantum computing uses quantum bits (or ‘qubits’), which recognize more than one state, such as a states of 1 and 0 at the same time. This empowers quantum computers to operate at speeds exponentially higher than conventional computers with far less energy consumption. </p>
                  <h3>Quantum computing goals</h3>
                  <ul>
                    <li>The ultimate goal for quantum computing is to build a fault-tolerant quantum computer for Shor’s algorithm and factoring. Shor's algorithm consists of two parts: using classical computing to define the problem and then a quantum algorithm to solve the problem. </li>
                    <li>Near-term goals are to move out of the physics lab and into industry. This will promote development over the next five to ten years, which will likely include hybrid solutions that combine classical and quantum computing. </li>
                    <li>Early quantum computers introduced commercially will need to be less noisy and more robust than they currently are. Initial quantum chips will contain fewer qubits and entanglements (quantum bits and connections) than those required for a fully fault-tolerant quantum solution. </li>
                  </ul>
                  <h3>Broadening the playing field</h3>
                  <p>The panel expressed a need for greater commercial involvement in the development of quantum computing. There was also a call to bring non-traditional thinkers into this field. They stressed that you don’t have to be a physicist to get involved. Those with a background in machine learning and advanced algebraic mathematics may find inroads within this burgeoning field.</p>
                  <p>Near-term goals:</p>
                  <ul>
                    <li>Enhancing the computers built out of quantum systems. Currently, they are very sensitive and noisy. To start, the idea is to do something on a smaller scale and with fewer qubits that’s still useful.</li>
                    <li>The panel expressed that it would take a long time to develop a fault-tolerant quantum computer (a computer that can process on a quantum level without interrupting when anomalies are detected).</li>
                    <li>Another challenge is to determine the correct problems to solve. Quantum computing cannot be used to solve every type of problem. The commercial sector can help with this by introducing real-world problems that would be aided by quantum solutions.</li>
                    <li>The future of quantum is collaborative. Quantum chips are now available from within cloud sandboxes that allow non-physicists to access and play. This is exciting, as it expands the circle of this science to the commercial sector. See links below to access IBM's Qiskit.</li>
                  </ul>
                  <h3>Favorite line from the session</h3>
                  <p style={{fontStyle: 'italic'}}>“Conveying the excitement and beauty of quantum to the next generation is important to get them interested. We all have the classical instincts surrounding physics, such as what goes up must come down. But quantum is getting people to think in terms of a thing being in two places at the same time and that the world we live in isn’t as it appears.” - K. Birgitta Whaley</p>
                  <h3>Resources recommended by the panel</h3>
                  <ul>
                    <li><a href="https://www.ibm.com/quantum-computing/?p1=Search&p4=43700050385922762&p5=b&cm_mmc=Search_Google-_-1S_1S-_-WW_NA-_-%2Bqiskit_b&cm_mmca7=71700000061253571&cm_mmca8=kwd-830086343180&cm_mmca9=Cj0KCQjw5eX7BRDQARIsAMhYLP8acppM5gIaO8rpFuoLXfnSKMyYBpj51pjiaDJH7p5PN8VKkDMArlEaAhqKEALw_wcB&cm_mmca10=427775155101&cm_mmca11=b&gclid=Cj0KCQjw5eX7BRDQARIsAMhYLP8acppM5gIaO8rpFuoLXfnSKMyYBpj51pjiaDJH7p5PN8VKkDMArlEaAhqKEALw_wcB&gclsrc=aw.ds" target="”_blank”">IBM Qiskit</a></li>
                    <li style={{fontStyle: 'italic'}}>"Quantum Computing and Applied Approach," by Jack Hidary </li>
                  </ul>
                </div></div></div></section>
          <section>
            <div className="site-section bg-light" id="bigdata-section">
              <div className="container">
                <div className="row mb-5" />
              </div>
              <div className="row site-section" id="bigdata-section">
                <div className="col-12 text-center" data-aos="fade">
                  <h2 className="section-title" style={{fontSize: '28px'}}>Leveraging data science</h2>
                  <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Temiloluwa Priolu, Assistant Professor of Computer Science, Dartmouth College</p>
                </div>
                <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                  <img src="images/leveraging_data_science44.png" alt="Image" className="img-fluid" />
                </div>
                <div className="col-sm-3 text-left" data-aos="fade">
                </div>
                <div className="col-sm-6 text-left" data-aos="fade">
                  <h3>Discovering our call to action</h3>
                  <p>Data science is the ability to take data, process it, analyze it, and communicate findings. In November 2020, COVID-19 is still impacting people across the globe. </p>
                  <p>This raised the question. “What is my role as a computer and data scientist in the midst of this pandemic? How can I use my skills to make a positive impact?” As an educator, Temiloluwa turned to her students to crowd-source solutions. Here is a summary of their project and its findings.</p>
                  <h3>Developing c19Insider.com</h3>
                  <p>There were many unanswered questions about COVID-19 and limited data sets available despite the number of people affected. </p>
                  <p>For example, for every ten people exposed, eight out of ten have mild symptoms with two requiring hospitalization.</p>
                  <p>Temiloluwa and her students developed the c19Insider site to capture information from COVID-19 survivors to provide greater insight into the virus. The site provides a place for survivors to post information and insights.</p>
                  <p>C19Insider goals:</p>
                  <ul>
                    <li>Leverage data from survivors to further research.</li>
                    <li>Design and deploy a data platform to collect data from survivors from various communities.</li>
                    <li>Collect data from survivors by using an online survey, with questions developed by the CDC and the National Institute of Health (NIH). </li>
                  </ul>
                  <h3>Survey demographics</h3>
                  <p>The site went live in May 2020 and collected data from 50 participants first with various states represented and who had had a positive test results. Ages of participants ranged from 20-72 years. More females than males participated and 36% of participants had preexisting conditions.</p>
                  <h3>Care received</h3>
                  <p>The majority managed their symptoms at home (48%). 35% were outpatient but did consult with a healthcare professional. 17% fell under the more serious category, with continued consultation and hospitalization. The more serious cases resulting in hospitalizations already had data collected. The goal was to collect data from undocumented cases.</p>
                  <h3>Infection sources</h3>
                  <p>Only 22% of participants knew the definite source of their infection. 67% had a likely source. The top source of transmission was in the household between family members. </p>
                  <h3>Symptoms</h3>
                  <p>At the time, the CDC was reporting eleven symptoms. The c19Insider site identified over 40 symptoms. Less documented symptoms included brain fog, memory loss, and sinus pain or pressure. More than half were not yet documented. </p>
                  <ul>
                    <li>75% had a fever with 25% having no fever. Since healthcare providers were using fever as an indicator at the time, a quarter of cases did not register as affected when they were actually positive.</li>
                    <li>The average recovery time was believed to be two weeks. The survey results indicated that the actual recovery time averaged from four to seven weeks.</li>
                    <li>Some had symptoms for one to two days; others had symptoms for up to 12 weeks.</li>
                  </ul>
                  <h3>Post recovery</h3>
                  <p>More than half reported lingering symptoms even after recovery, including fatigue, chest pain, anxiety, and depression. Over half experienced stigma, including shaming, name calling, blame for spreading, and blame for economic shutdowns.</p>
                  <h3>Lessons learned</h3>
                  <p>Findings from the study identified new insights not yet reported. It was noted that it doesn’t take rocket science to make a difference. A simple web presence can make a difference.</p>
                  <p>Bottlenecks included recruiting a diverse representative pool of participants. Participants were anonymous to protect their health protected data.</p>
                  <h3>Site advancements</h3>
                  <ul>
                    <li>Built an automated process that uses natural language processing (NLP) to scrape websites for data from first-hand survivors. This created a second pool of data from reputable sources (CNN, New York Times).</li>
                    <li>Transformed unstructured, distributed data into a machine-readable format that could be used for research.</li>
                  </ul>
                  <h3>Conclusion</h3>
                  <p>The group is now investigating differences in the impact of COVID-19 in communities disproportionally affected.</p>
                  <p>In closing, the presenter asked, “What is your role in the fight against COVID-19 to make a positive impact?” An excellent question. </p>
                  <h3>Access c19Insider.com</h3>
                  <ul>
                    <li><a href="https://www.c19insider.com/" target="”_blank”">C19Insider.com</a></li>
                  </ul>
                </div>
              </div></div></section>
          <section>
            <div className="row site-section" id="bigdata-section">
              <div className="container">
                <div className="row mb-5">
                </div>
                <div className="row site-section" id="bigdata-section">
                  <div className="col-12 text-center" data-aos="fade">
                    <h2 className="section-title" style={{fontSize: '28px'}}>Accelerating Apache Spark ETL workflows on GPUs:</h2>
                    <h2 className="section-title" style={{fontSize: '28px'}}>A cross-cultural open source initiative</h2>
                    <p style={{fontSize: '13px', fontStyle: 'italic'}}>Presented by Kuhu Shukla, Senior Software Developer, Nvidia</p>
                  </div>
                  <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
                    <img src="images/apache_spark_gpu333.png" alt="Image" className="img-fluid" />
                  </div>
                  <div className="col-sm-2 text-left" data-aos="fade">
                  </div>
                  <div className="col-sm-8 text-left" data-aos="fade">
                    <h3>CPU vs. GPU processing</h3>
                    <p>Kuhu raised a critical question. When grooming data for AI and machine learning use, when is the best time to introduce a graphic processing unit (GPU) for processing? Introducing it too early isn’t cost effective, as GPU processing is expensive. Introduce it too late and the process is expensive in terms of engineering time. Kuhu proposed a model for preparing data that uses GPU processing at an optimized point in the data refining process. </p>
                    <h3>About ETL</h3>
                    <p>ETL stands for Extract, Transform, and Load, which are foundational points within the data transformation process. In this process, data is pulled from cold storage, transformed through a series of automated filtering and sorting jobs, and is then added back to storage for AI and machine learning use. </p>
                    <h3>The ETL process on GPUs</h3>
                    <p>The ETL process is typically slow. GPUs are fast. You can leverage GPUs to speed up the ETL process. </p>
                    <h3>Using Apache Spark to move the ETL from CPUs to GPUs</h3>
                    <p>Apache Spark is a framework that executes batches using Spark SQL. Spark SQL runs on the CPU to feed data from cold storage into the GPU at the processing point you determine.</p>
                    <p>The customary process is to start a cluster, perform your ETL, and then move your data to storage for AI and machine learning access. In an optimized process, transfer processing from the CPU to the GPU at a strategic point to make processing faster while mitigating GPU usage costs.</p>
                    <h3>Understanding Apache Spark</h3>
                    <p>To pinpoint the process phase in which to move processing from the CPU to the GPU, it’s helpful to understand Spark processing.</p>
                    <ul>
                      <li>A Spark job consists of a driver (scheduler) and executor to perform computations.</li>
                      <li>A Spark Shuffle is a map task that results in reduced tasks. By allowing upstream tasks to send data to downstream tasks, you can automatically reduce the number of tasks required and ultimately reduce processing time and effort.</li>
                      <li>Use a dataframe with SUM to collect the data and write it to storage. </li>
                      <li>Use an iterator to go through rows within the CSV schema.</li>
                    </ul>
                    <h3>CPU to GPU processing design</h3>
                    <p>To use Spark SQL on a GPU, use a RAPIDS framework. RAPIDS allows you to accelerate workflows on GPUs by using existing dataframe libraries. </p>
                    <ul>
                      <li> <b style={{color: 'rgb(88, 44, 131)'}}>Begin on the CPU.</b> When aggregating, Spark converts the data into a logical plan, optimizes it, and then generates the physical plan.</li>
                      <li><b style={{color: 'rgb(88, 44, 131)'}}>Transition to the GPU.</b> Once you have the physical plan, move to the GPU to complete processing. </li>
                    </ul>
                    <h3>Replacing the CPU plan with a GPU plan</h3>
                    <p>To transition processing to the GPU, replace the CPU plan with a GPU plan. The GPU plan performs the following:</p>
                    <ul>
                      <li>Aggregates and partitions the data.</li>
                      <li>Applies round robin partitioning two times.</li>
                      <li>Applies partition filters.</li>
                    </ul>
                    <p>If the GPU processing fails, it falls back on the CPU to complete this work.</p>
                    <h3>Ensure that your GPU is well fed</h3>
                    <p>Moving data between the CPU and GPU is not cheap. It’s just as expensive to process less data as it is to process more. Add the following to your GPU plan to ensure that transfers to the GPU are robust: </p>
                    <ul>
                      <li>Add coalesce batches with large target sizes.</li>
                      <li>Aggregate all columnar data for GPU processing.</li>
                    </ul>
                    <h3>Design summary</h3>
                    <ul>
                      <li>Use the RAPIDS API to talk to the GPU.</li>
                      <li>Determine the layer of the plan to replace for GPU execution. The presenter recommends implementing once you have a physical plan.</li>
                      <li>Ensure that the translation of operations is not one-to-one. If the GPU fails, operations fall back on the CPU.</li>
                      <li>Ensure that the GPU plan is designed to feed the GPU more data rather than less. It is the same cost to process a small batch as it is to process a large one. Process in large batches.
                      </li>
                      <li>Determine processing points still best met by the CPU, such as I/O serialization or producing sample translations for small data sets.</li>
                    </ul>
                  </div>
                </div></div></div></section>
        </div>
      );
    }
  };