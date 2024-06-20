import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faDownload,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import HTML from "./svg/html5.svg";
import JS from "./svg/javascript.svg";
import TAILWIND from "./svg/tailwind-css.svg";
import REACT from "./svg/react.svg";
import GIT from "./svg/git.svg";
import NODE from "./svg/node.png";
import EXPRESS from "./svg/express.png";
import MONGODB from "./svg/mongodb.svg"
import CSS from "./svg/css.svg";
import LINKEDIN from "./svg/linkedin.svg";
import GITHUB from "./svg/github.svg";
import FACEBOOK from "./svg/facebook.svg";
import INSTAGRAM from "./svg/instagram.svg";
import PP from "./images/1714827096409.jpg";
import ChatIn from "./images/chatIn.png";
import MegaBlog from "./images/megaBlog.png";
import YoutubeBackend from "./images/youtube-backend.png"

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 + 40 });
  const [fixednav, setFixednav] = useState(false);
  const [hover, setHover] = useState(false);
  const [navShow, setNavShow] = useState(false);
  let navRef = useRef(null);

  // Download resume
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '../public/Resume.pdf'; 
    link.download = 'Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  const navBtns = document.querySelectorAll("nav ul a");
  navBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      setNavShow(!navShow)
    })
  })

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX - 25, y: e.clientY - 25 });
    };
    document.addEventListener("mousemove", (e) => {
      updatePosition(e);
      let cursor = document.getElementById("moving-cursor");
      cursor.style.display = "block";
    });
    
     // Scroll functin
  const handleScroll = (e) => {
    if (window.scrollY  > nav.offsetHeight) {
      setFixednav(true);
    } else if(window.scrollY  < nav.offsetHeight){
      setFixednav(false);
    }
  };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="app">
      <div
        id="moving-cursor"
        style={{ left: position.x, top: position.y }}
      ></div>
      <nav
        ref={navRef}
        id="nav"
        className={`p-3 pl-4 py-3 flex justify-between ${
          fixednav ? "nav-fixed" : "nav-relative"
        }`}
      >
        <div className="italic text-xl ">Bibek's Portfolio</div>
        <div className="big-screen-link links">
          <a href="#home" className=" link">
            Home
          </a>
          <a href="#projects" className="link">
            Projects
          </a>
          <a href="#technology" className="link">
            Technology
          </a>
          <a href="#education" className="link">
            Education
          </a>
        </div>
        <div>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <FontAwesomeIcon
              className="text-xl align-middle pr-6"
              icon={faDownload}
              onClick={handleDownload}
            />
            <p
              className={`resume-text absolute text-xs -left-3 ${
                hover ? "visible" : "hidden"
              }`}
            >
              Resume
            </p>
          </button>
          <button onClick={() => setNavShow(!navShow)}>
            <FontAwesomeIcon
              className={`bar-icon text-xl align-middle pr-2 ${
                navShow ? "hidden" : "visible"
              }`}
              icon={faBars}
            />
            <FontAwesomeIcon
              icon={faXmark}
              className={`bar-icon text-xl align-middle pr-2 ${
                navShow ? "visible" : "hidden"
              }`}
            />
          </button>
        </div>
        <ul
          className={`nav-links absolute right-0 p-2 px-8 -bottom-40 flex flex-col gap-1 ${
            navShow ? "block" : "hidden"
          }`}
        >
          <a href="#home" className="link">
            Home
          </a>
          <a href="#projects" className="link">
            Projects
          </a>
          <a href="#technology" className="link">
            Technology
          </a>
          <a href="#education" className="link">
            Education
          </a>
        </ul>
      </nav>
      <body>
        <div id="home" className="flex justify-between flex-col">
          <section className="info pl-10 pt-20">
            <h1 className="text-xl">I am Bibek Thapa,</h1>
            <h1 className="text-xl font-bold gradiant-text mt-2">
              Frontend developer
            </h1>
            <br/>
            <h1 className="text-xl font-bold gradiant-text">
              Backend developer
            </h1>
          </section>
          <section className="other-info ">
            <p className="info p-4 pl-6 text-sm  w-1/2">
              {" "}
              Seeking to apply development skills with focus on collaboration,
              communication, and passion
            </p>
            <button className="download-btn p-3 ml-6 rounded-xl relative" onClick={handleDownload}>
              Download Resume
            </button>
          </section>
          <div className="pp-container absolute right-1 top-80 home-pic">
            <img
              src={PP}
              alt=""
              className="h-44 rounded-full self-end align-center"
            />
          </div>
          <div className="w-full flex self-center justify-center pb-7">
            <div className="flex align-middle flex-col">
              <h3 className="text-center text-xl font-serif">Scroll down </h3>
              <FontAwesomeIcon className="scroll-down" icon={faAngleDown} />
            </div>
          </div>
        </div>
        <div id="projects" className="p-3">
          <h1 className="text-xl p-4 text-center underline tracking-wide	">
            Projects
          </h1>
          <div className="project-container">
            <div className="project bg-white rounded-md w-full p-2">
              <img
                src={YoutubeBackend}
                alt=""
                className="h-48 w-auto object-cover rounded-xl"
              />
              <div className="project-info ">
                <p className="pt-3">Youtube backend</p>
                <div className="w-full flex justify-evenly pt-3">
                  <button className="project-btn rounded-xl">
                    <a
                      href="https://github.com/BibekThapa1/youtube-backend"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Github
                    </a>
                  </button>
                  {/* <button className="project-btn rounded-xl">
                    <a
                      href="https://chat-in-app.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site
                    </a>
                  </button> */}
                </div>
              </div>
            </div>
            <div className="project bg-white rounded-md w-full p-2">
              <img
                src={ChatIn}
                alt=""
                className="h-48 w-auto object-cover rounded-xl"
              />
              <div className="project-info ">
                <p className="pt-3">Chat-In App</p>
                <div className="w-full flex justify-evenly pt-3">
                  <button className="project-btn rounded-xl">
                    <a
                      href="https://github.com/BibekThapa1/Chat-IN-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Github
                    </a>
                  </button>
                  <button className="project-btn rounded-xl">
                    <a
                      href="https://chat-in-app.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="project bg-white rounded-md min-w-full p-3">
              <img
                src={MegaBlog}
                alt=""
                className="h-48 w-auto object-fill rounded-xl"
              />
              <div className="project-info">
                <p className="pt-3">Blog App</p>
                <div className="w-full flex justify-evenly pt-3">
                  <button className="project-btn rounded-xl">
                    <a
                      href="https://github.com/BibekThapa1/mega-blog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </button>
                  <button className="project-btn rounded-xl">
                    <a
                      href="https://mega-blog-tawny-beta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit site
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="project bg-white rounded-md w-full p-3">
              <img src="" alt="" className="h-48 w-auto object-fill" />
              <div className="project-info">
                {" "}
                <p>Title of the project</p>
              </div>
            </div>
            <div className="project bg-white rounded-md w-full p-3">
              <img src="" alt="" className="h-48 w-auto object-fill" />
              <div className="project-info">
                {" "}
                <p>Title of the project</p>
              </div>
            </div> */}
          </div>
        </div>
        <div id="technology" className="mt-5 p-5">
          <h1 className=" text-xl text-center underline">Technology</h1>
          <div className="technology-list flex">
            <div className="technology ">
              <img src={HTML} alt="" className="h-10" />
              <h3>HTML5</h3>
            </div>
            <div className="technology">
              <img src={CSS} alt="" className="h-10" />
              <h3>CSS</h3>
            </div>
            <div className="technology">
              <img src={JS} alt="" className="h-10" />
              <h3>Javascript</h3>
            </div>
            <div className="technology">
              <img src={REACT} alt="" className="h-10" />
              <h3>React</h3>
            </div>
            <div className="technology">
              <img src={NODE} alt="" className="h-10" />
              <h3>Node.js</h3>
            </div>
            <div className="technology">
              <img src={EXPRESS} alt="" className="h-10" />
              <h3>Express.js</h3>
            </div>
            <div className="technology">
              <img src={MONGODB} alt="" className="h-10" />
              <h3>MongoDB</h3>
            </div>
            <div className="technology">
              <img src={TAILWIND} alt="" className="h-10" />
              <h3>Tailwind</h3>
            </div>
            <div className="technology">
              <img src={GIT} alt="" className="h-10" />
              <h3>Git</h3>
            </div>
          </div>
        </div>
        <div id="education" className="p-4 mt-3">
          <h1 className="text-xl text-center underline">Education</h1>
          <div className="schools">
            <ul>
              <li className="events">
                <h3 className=" left-0 text-lg font-semibold">2021</h3>
                <p>Passed Class 10 and started learning c-programming</p>
              </li>
              <li className="events">
                <h3 className=" left-0 text-lg font-semibold">2023</h3>
                <p>
                  Intrested in web technology and started the journey of
                  frontend. And passed class 12 with some experience
                </p>
              </li>
              <li className="events">
                <h3 className=" left-0 text-lg font-semibold">Present</h3>
                <p>Studying in Sukuna Multiple Campus in BICTE faculty.</p>
              </li>
            </ul>
          </div>
        </div>
      </body>
      <footer>
        <div>&copy; Copyright Rights Reserved</div>
        <div className="icons">
          <a
            className="icon"
            href="https://www.linkedin.com/in/bibek-thapa-62823b288/?trk=opento_sprofile_details"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LINKEDIN} className="footer-icon" alt="" />
          </a>
          <a
            href="https://github.com/BibekThapa1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GITHUB} className="footer-icon" alt="" />
          </a>
          <a
            href="https://www.facebook.com/bibekthapa154"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FACEBOOK} className="footer-icon" alt="" />
          </a>
          <a
            href="https://www.instagram.com/bibek_thapa1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={INSTAGRAM} className="footer-icon" alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
