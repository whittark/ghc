import React, { Component } from 'react'

export default class Dev extends Component {
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
          <div className="row site-section " id="reactjs-section">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title" style={{fontSize: '28px'}}>Converting web artifacts into React apps</h2>
              <p style={{fontSize: '13px', fontStyle: 'italic'}}>By Whitney Tarkington</p>
            </div>
            <div className="col-12 text-center" data-aos="fade-up" data-aos-delay>
              <img src="images/reactjs55.png" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-2 text-left" data-aos="fade">
            </div>
            <div className="col-sm-8 text-left" data-aos="fade">     
              <h3>Blockchain basics</h3>
              <p>WT Note: I was not a presenter at GHC, but was so inspired by the presentations 
                given, I decided to build this site as a React application to share my findings 
                from the conference with others. Converting a responsive site into a React app is a great way to get into ReactJS. If you're new to React and are interested in exploring, converting a legacy site is a great way to start.</p>
              <p>Throughout tech, we're seeing a trend in containerizing or componentizing code to make our apps more robust and sustainable. If a bug occurs within a segmented component, it's less likely to impact code up or downstream, easier to identify, and easier to correct.</p>
              <p>This componitization also holds true for our web artifacts as well. React JS frameworks divide code into public and private files with source code segmented into individual components for ease of management.</p>
              <p>In this article, I'll share my process for converting a responsive site into a ReactJS app. This is a fast-as-brass overview; see the resource links at the close of the article for detailed steps. Once you have a sense of how React projects are organized, you can take this further by expanding the project's source repository.</p>
              <h3>JSX: The frontend language for ReactJS</h3>
              <p>JSX is a syntax extension to JavaScript that determines what the rendered UI should look like. JSX may remind you of a template language but allows for JavaScript inclusions and integration. Ultimately, JSX produces React elements that are rendered by the DOM.</p>
              <p>Front-end components within React applications use JSX instead of HTML. New to React and JSX? No worries! You can take existing HTML segments and easily convert them into JSX. See the JSX Converter link in the resources list below convert segments. </p>
              <ul>
                <p>Note that the converter doesn’t do the full job required. You will need to add the render() function and other modifications that we’ll touch upon here. The converter does ensure that legacy HTML can be consumed before you deploy.</p>
                <h3>Start a ReactJS project</h3>
                <p>Add a working folder to your C:/ drive and open it in the code editor of your choice. Before you begin, ensure that you have NPM installed. In the console, run the following command:</p>
                <code>npm install create-react-app</code>
                <p>Add your legacy HTML files in a template folder within the project. Run the following to ensure that the site renders as expected:</p>
                <code>npm install</code>
                <code>npm start</code>
                <p>This will run your site on port 3000 by default. The React default page opens in a browser tab. Replace the default React content with your legacy HTML and ‘npm start’ to test.</p>
                <h3>Break legacy HTML into JSX components</h3>
                <p>Study your legacy HTML code. Identify natural segments in the code that have no dependencies on other segments. For this site, I divided content into loader, navbar, hero, about, and footer JSX components. I also created a separate JSX component for each subject segment as well (AI, BigData, DevOps, et.c) and added these to my source folder.</p>
                <p><img src="images/jsx-components.png" alt="Image" className="img-fluid" /></p>
                <h3>Adding render functions to JSX components</h3>
                <p>At the start of each JSX file, replace the converted render statement with an import React statement and the render function as it appears here. Enter a unique class for the component.</p>
                <p><img src="images/react-class.png" alt="Image" className="img-fluid" /></p>
                <p>You will likely need to adjust the closing brackets and parentheses at the end of your converted files for the code to be valid. In my case, I had an extra closing parenthesis after replacing the converted ‘render’ with the render function above.</p>
                <h3>Update app.js</h3>
                <p>When you created your React project, this generated an app.js file in a src folder. The app.js file is the DOM’s access point to your new JSX components. Make the following modifications to declare your components and define the rendering order.</p>
                <p><img src="images/app-js.png" alt="Image" className="img-fluid" /></p>
                <h3>Add the root element to index.html</h3>
                <p>Ensure that you keep a safety copy of your legacy HTML. In index.htm, remove all legacy HTML segments and replace the body with a root </p><div>. Keep  and dependency links as-is.<p />
                  <p><img src="images/root.png" alt="Image" className="img-fluid" /></p>
                  <h3>Update package.json</h3>
                  <p>If you’re planning to publish your app to GitHub pages, enter the github.io link as your homepage and enter the following pre-deployment and deployment attributes to “scripts.”</p>
                  <p><img src="images/package-json.png" alt="Image" className="img-fluid" /></p>
                  <h3>Deploy to GitHub</h3>
                  <p>Add a deployment folder on the same level as your C:// working folder. In GitHub, create a new repository. Copy the cloning address for the repository.</p>
                  <p>In your GitBash command line, enter:</p>
                  <code>git init</code>
                  <code>git clone (your cloned repository address)</code>
                  <p>This pulls the empty repository down. Paste your project files into the repository and open the deployment version in your code editor. In your terminal, run the following command:</p>
                  <code> npm install gh-pages </code>
                  <p>This bundles your code upon deployment into a GitHub Page resource.</p>
                  <p>Now push the project to GitHub:</p>
                  <code>git add -A</code>
                  <code>git commit -am “Your commit note”</code>
                  <code>git push origin master </code>
                  <p>In your Git repository, navigate to Settings &gt; GitHub Pages. Ensure that this is enabled. Check the GitHub page link to view your success. You are victorious!</p><p><img src="images/gh-pages.png" alt="Image" className="img-fluid" /></p>
                  <h3>Resources</h3>
                  <ul>
                    <li><a href="https://github.com//" target="”_blank”">GitHub</a></li>
                    <li><a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/ " target="”_blank”">Helpfl article 1</a></li>
                    <li><a href="https://medium.com/mobile-web-dev/how-to-build-and-deploy-a-react-app-to-github-pages-in-less-than-5-minutes-d6c4ffd30f14  " target="”_blank”">Helpful article 2</a></li>
                    <li><a href="https://magic.reactjs.net/htmltojsx.htm" target="”_blank”">JSX converter</a></li>
                  </ul>
                </div>
              </ul></div>
          </div></div></section>
    );
  }
};