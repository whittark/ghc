import React, { Component } from 'react'

export default class ReactJS extends Component {
  render() {
    return (

      <section>
        <div className="site-section bg-light" id="reactjs-section">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title" style={{fontSize: '40px'}}>ReactJS Development</h2>
          </div>
        </div>
        <div className="container">
          <div className="row-mb">
          </div>
          <div className="row site-section " id="iot-section">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title" style={{fontSize: '28px'}}>Transform your legacy HTML into a React app</h2>
              <p style={{fontSize: '13px', fontStyle: 'italic'}}>By Whitney Tarkington</p>
            </div>
            <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
              <img src="images/reactjs44.png" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-2 text-left" data-aos="fade">
            </div>
            <div className="col-sm-8 text-left" data-aos="fade">     
              <h3 />
              <p style={{color: 'rgb(88, 44, 131)'}}>WT Note: I was not a presenter at GHC but was inspired by the speakers and information presented! It was a privilege to attend. While I built this React site to share my findings, it occurred to me that I could share a little about the site development as well. Converting a responsive site into a React app is a great way to get into ReactJS. If you're new to React and are interested in exploring, read on!</p>
              <p>Here's a synopsis of the process I used to create this site, which includes a brief overview of JSX and React framework basics.</p>
              <h3>JSX: The frontend language for ReactJS</h3>
              <p>JSX is a syntax extension to JavaScript that determines how the content rendered will appear. The front-end components within React applications use JSX instead of HTML. New to React and JSX? Not a problem. You can take existing HTML segments and easily convert them into JSX. See the <a href="https://magic.reactjs.net/htmltojsx.htm" target="”_blank”">JSX converter</a> link here or in the resource list below to convert segments.</p>
              <p style={{color: 'rgb(88, 44, 131)'}}>While the converter won't fully configure your legacy HTML code for perfect rendering, it will ensure that your content is React friendly. I would NOT recommend converting  your legacy HTML to JSX by hand. We'll use the converter in the sections that follow to ensure that React won't take exception to your code.</p>
              <h3>Start a ReactJS project</h3>
              <p>Add a working folder to your C:/ drive and open it in the code editor of your choice. Before you begin, ensure that you have NPM v6 or higher installed. In the console, run the following command:</p>
              <p style={{color: 'rgb(88, 44, 131)'}}><b>npm install create-react-app app-name (for app-name, enter a name for your app; dashes are supported).</b></p>
              <p>Run the following commands in your project terminal to ensure that React is rendering:</p>
              <p style={{color: 'rgb(88, 44, 131)'}}><b>npm install</b></p>
              <p style={{color: 'rgb(88, 44, 131)'}}><b>npm start</b></p>
              <p>This will open the default React index.html on port 3000. Replace the default React index.html with your legacy index.html file and run ‘npm start’ again to test. Your legacy content should appear on port 3000.</p>
              <h3>Break legacy HTML into JSX components</h3>
              <p>Study your legacy HTML code. Identify natural segments in the code that have no dependencies on other segments. For this site, I divided content into loader, navbar, hero, about, and footer components. I also designated a separate component for each content category as well and added these as empty JSX files to my src directory.</p>
              <img src="images/jsx-components.png" alt="Image" className="img-fluid" />
              <h3>Add render functions to JSX components</h3>
              <p>Copy each HTML segment you identified as a JSX component; paste into the <a href="https://magic.reactjs.net/htmltojsx.htm" target="”_blank”">JSX converter</a>. Copy and paste the converted result into each JSX file respectively. At the start of each JSX file, replace the converted render statement with an import React statement and a render function as it appears here. Enter a unique class for each JSX file.</p>
              <img src="images/react-class.png" alt="Image" className="img-fluid" />
              <p>You will likely need to adjust the closing brackets and parentheses at the end of your JSX files for the code to be valid. In my case, I had an extra closing parenthesis after replacing the converted ‘render’ function with the render function above.</p>
              <h3>Update app.js</h3>
              <p>When you created your React project, this generated an app.js file in a src folder. The app.js file is the DOM’s access point to your new JSX components. Make the following modifications to declare your components and define the rendering order for the DOM.</p>
              <img src="images/app-js.png" alt="Image" className="img-fluid" />
              <h3>Add the root element to index.html</h3>
              <p>Ensure that you keep a safety copy of your legacy HTML outside of your project. In index.htm, remove the legacy HTML from the body of the file. Add the following root element to the body. The root element points to app.js to render the content from your JSX components. 
              </p><div> Keep the header and closing dependency links as-is. Run 'NPM Start' in your terminal to test. If you see your pages, then congratulations! Your legacy HTML pages are now a React app.<p/>
              <img src="images/root.png" alt="Image" className="img-fluid" />
              <h3>Update package.json</h3>
              <p>If you’re planning to deploy your app to GitHub pages, enter the github.io link as your homepage and enter the following pre-deployment and deployment attributes to “scripts.”</p>
              <img src="images/package-json.png" alt="Image" className="img-fluid" />
              <h3>Deploy your project</h3>
              <p>To publish the GHC site, I created a deployment directory in C:/ and used the following commands to initialize it for content exhanges between my local machine and Git. If you're new to Git, I recommend that you create an empty folder separate from your project folder specifically for deployment. Run the following commands in your Git command line.</p>
              <p style={{color: 'rgb(88, 44, 131)'}}><b>git init</b></p>
              <p style={{color: 'rgb(88, 44, 131)'}}><b>git clone (your cloned repository address)</b></p>
              <p>Paste your project files into the repository Git added to your deployment folder. Open the deployment folder in your code editor. In your terminal, run the following command:</p>
              <p style={{color: 'rgb(88, 44, 131)'}}><b> npm install gh-pages </b></p>
              <p>This generates a GitHub Page resource from your content. You shouldn't have to run this command again when you check in updates.</p>
              <p>Now push the project to GitHub (since this is a simple project, I'm not using branching commands):</p>
              <p style={{color: 'rgb(88, 44, 131)'}}><b>git add -A</b></p>
              <p style={{color: 'rgb(88, 44, 131)'}}><b>git commit -am “Your commit note”</b></p>
              <p style={{color: 'rgb(88, 44, 131)'}}><b>git push origin master</b></p>
              <p>In your Git repository, navigate to Settings &gt; GitHub Pages. Ensure that the page feature is enabled and points to 'gh-pages.' Check the GitHub page link to view your success. You are victorious! But this is only the beginning. With the framework and a front-end developed, explore adding functionality to your source code, including forms and database associations. MongoDB works best with React but MySQL works well, too. Happy coding!</p><p><img src="images/gh-pages.png" alt="Image" className="img-fluid" /></p>

                <h3>Resources</h3>
                  <ul>
                    <li><a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/ " target="”_blank”">Helpful article 1</a></li>
                    <li><a href="https://medium.com/mobile-web-dev/how-to-build-and-deploy-a-react-app-to-github-pages-in-less-than-5-minutes-d6c4ffd30f14  " target="”_blank”">Helpful article 2</a></li>
                    <li><a href="https://magic.reactjs.net/htmltojsx.htm" target="”_blank”">JSX converter</a></li>
                    <li><a href="https://github.com//" target="”_blank”">GitHub</a></li>
                  </ul>
                </div>
            </div>
          </div></div></section>
    );
  }
};