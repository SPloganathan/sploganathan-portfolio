import marvel from "../assets/marvel.jpeg";
import luv from "../assets/luv.png";
import pwa from "../assets/pwa.png";
import weather from "../assets/weather.png";
import markdown from "../assets/markdown.png";
import cms from "../assets/cms.png";
function Project() {
  return (
    <div className="containers">
      <div className="row m-3">
        <div className="col-md-4 col-lg-4 col-sm-12 mb-3">
          <div className="card">
            <img src={marvel} class="card-img-top" alt="sample" />
            <div className="card-body">
              <h5 className="card-title">MARVEL MOVIE 3000</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                HTML,JavaScript,CSS
              </h6>
              <p className="card-text">
                Marvel-Movies-3000 allows the user to search for movies and
                characters related to the Marvel universe which will in turn
                provide us with a full movie description, movie posters, rating
                of the searched movie and full character details.
              </p>
              <a
                href="https://github.com/SPloganathan/marvel-movies-3000"
                className="card-link"
              >
                GitHub Link
              </a>
              <a
                href="https://sploganathan.github.io/marvel-movies-3000/"
                className="card-link"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12 mb-3">
          <div className="card">
            <img src={luv} class="card-img-top" alt="sample" />
            <div className="card-body">
              <h5 className="card-title">LUV 2 H8</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                HTML,CSS,JavaScript,Node,Express,Sequelize
              </h6>
              <p className="card-text">
                This is an Interactive Full-Stack Application for creating
                negative posts/reviews with complaints regarding any place or
                business. Our motivation was to practice our collaborative
                skills, coding abilitiesthe and knowlege we've built the past
                six modules of the boot camp to create a real-world full-stack
                application. The aim was to create a blog sitesimilar to Yelp,
                where users can publish a claim to anything - this is world for
                the real HATERS. So other haters/users could look through the
                blog and give likes/dislikes to the posts.
              </p>
              <a
                href="https://github.com/SPloganathan/luv-2-h8"
                className="card-link"
              >
                GitHub Link
              </a>
              <a href="https://luv-2-h8.herokuapp.com/" className="card-link">
                Deployed Link
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12 mb-3">
          <div className="card">
            <img src={cms} class="card-img-top" alt="sample" />
            <div className="card-body">
              <h5 className="card-title">CMS STYLE TECH BLOG</h5>
              <h6 className="card-subtitle mb-2 text-muted">Node</h6>
              <p className="card-text">
                Writing about tech can be just as important as making it.
                Developers spend plenty of time creating new applications and
                debugging existing codebases, but most developers also spend at
                least some of their time reading and writing about technical
                concepts, recent advancements, and new technologies and here it
                is....A blog where developers can publish their blog posts and
                comment on other developers posts as well.
              </p>
              <a
                href="https://github.com/SPloganathan/cms-style-tech-blog"
                className="card-link"
              >
                GitHub Link
              </a>
              <a
                href="https://cms-style-tech-blogg.herokuapp.com/"
                className="card-link"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3">
        <div className="col-md-4 col-lg-4 col-sm-12 mb-3">
          <div className="card">
            <img src={markdown} class="card-img-top" alt="sample" />
            <div className="card-body">
              <h5 className="card-title">MARKDOWN README GENERATOR</h5>
              <h6 className="card-subtitle mb-2 text-muted">Node,MARKDOWN</h6>
              <p className="card-text">
                When creating an open source project on GitHub, its important to
                have a high-quality README for the app. This should include what
                the app is for, how to use the app, how to install it, how to
                report issues, and how to make contributions—this last part
                increases the likelihood that other developers will contribute
                to the success of the project.
              </p>
              <a
                href="https://github.com/SPloganathan/markdown-readme-generator"
                className="card-link"
              >
                GitHub Link
              </a>
              <a
                href="https://www.npmjs.com/package/markdown-readme-generator"
                className="card-link"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-12 mb-3">
          <div className="card">
            <img src={weather} class="card-img-top" alt="sample" />
            <div className="card-body">
              <h5 className="card-title">WEATHER FORECAST</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                HTML,Bootstrap,CSS,JavaScript,Weather API
              </h6>
              <p className="card-text">
                The challenge is to build a weather dashboard that will run in
                the browser and feature dynamically updated HTML and CSS. A
                third-party APIs is used to access data and functionality by
                making requests with specific parameters to a URL. Weather
                dashboard is displayed with city name and its current and future
                weather forecast details.
              </p>
              <a
                href="https://github.com/SPloganathan/weather-forecast"
                className="card-link"
              >
                GitHub Link
              </a>
              <a
                href="https://sploganathan.github.io/weather-forecast/"
                className="card-link"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4  col-lg-4 col-sm-12 mb-3">
          <div className="card">
            <img src={pwa} class="card-img-top" alt="sample" />
            <div className="card-body">
              <h5 className="card-title">PWA TEXT EDITOR</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                React,Express,Service Workers
              </h6>
              <p class="card-text">
                This project is to build a text editor that runs in the browser.
                The app will be a single-page application that meets the PWA
                criteria. Additionally, it will feature a number of data
                persistence techniques that serve as redundancy in case one of
                the options is not supported by the browser. The application
                will also function offline.
              </p>
              <a
                href="https://github.com/SPloganathan/pwa-text-editor"
                class="card-link"
              >
                GitHub Link
              </a>
              <a
                href="https://text-text-editor-pwa.herokuapp.com/"
                class="card-link"
              >
                Deployed Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
