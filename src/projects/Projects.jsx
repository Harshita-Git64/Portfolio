import React from "react";
import "./projects.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="container py-5" id="project">
      <div className="row">
        <div className="col-md-4">
          <p className="bar"></p>
          <h2 className="projecthead">Projects</h2>
        </div>
        <div className="col-md-8" style={{marginBottom:'50px'}}>
          <p className="projectdesc">
            Explore my portfolio of diverse web projects, showcasing my
            full-stack development expertise. From stunning front-end designs to
            powerful back-end functionality, these examples demonstrate my
            commitment to crafting seamless digital experiences.
          </p>
        </div>

        <div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Splide
            aria-label="Projects"
            options={{
              wheel: true,
              waitForTransition: true,
              wheelSleep: false,
              wheelMinThreshold: 5,
              releaseWheel: true,
              arrows: false,
              pagination: true,
            }} >

            {/* Chat Application */}
            <SplideSlide>
              <section className="row">
                <div className="col-md-6 order-2 order-md-1 align-self-center">
                  <h2 className="heading5 mb-md-4">Chat Application</h2>
                  <p className="paragraph">
                  Developed a high-performance chat application with seamless real-time communication capabilities, ensuring seamless interactions between users and secure user authentication and authorization processes. Ensured efficient server operations and reliable, bidirectional messaging. Managed application state effectively for a smooth user experience and implemented scalable data handling, resulting in a secure and user-friendly chat platform.
                  </p>
                  <p className="paragraph">
                    Tech Stack : {" "}
                    <span className="techs">
                      React, Node.js, Express.js, MongoDB, WebSocket, Tailwind CSS
                    </span>
                  </p>
                  <div style={{marginBottom:"10px"}}>
                    <a
                      href="/"
                      onClick={() => openInNewTab("https://chat-application-7raa.onrender.com/")}
                      className="demoButton items-center gap-3 px-3 py-1 "
                    >
                      Live
                      <img
                        src="/images/share.png"
                        alt="demo"
                        className="align-self-center"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 order-1vorder-md-2">
                  <img
                    className="projectImage"
                    src="/images/ChatApp.png"
                    alt="card"
                  />
                </div>
              </section>
            </SplideSlide>

             {/* Food-Ordering Application */}
            <SplideSlide>
              <section className="row">
                <div className="col-md-6 align-self-center order-2 order-md-1 ">
                  <h2 className="heading5 mb-md-4">FoodCraze - Food Ordering Application</h2>
                  <p className="paragraph">
                  Developed a dynamic food ordering application featuring real-time restaurant browsing, menu viewing, and cart management.Optimized user experience with smooth state management ensuring a seamless and engaging interface.
                  </p>
                  <p className="paragraph">
                    Tech Stack:{" "}
                    <span className="techs">React, Tailwind CSS, Redux</span>
                  </p>
                  <div>
                    <a
                      href="/"
                      onClick={() =>
                        openInNewTab("https://foodcraze.onrender.com/")
                      }
                      className="demoButton items-center gap-3 px-3 py-1 "
                    >
                      Live
                      <img
                        src="/images/share.png"
                        alt="demo"
                        className="align-self-center"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <img
                    className="projectImage"
                    src="/images/FoodCraze.png"
                    alt="card"
                  />
                </div>
              </section>
            </SplideSlide>

             {/* Blog Application */}
            <SplideSlide>
              <section className="row">
                <div className="col-md-6">
                  <img
                    className="projectImage"
                    src="/images/BlogApp.png"
                    alt="card"
                  />
                </div>
                <div className="col-md-6 align-self-center ">
                  <h2 className="heading5 mb-md-4">Blog Application</h2>
                  <p className="paragraph">
                  Developed a full-stack blog application with robust features like user authentication, post management, and commenting. Enhanced user engagement by allowing followers and implementing search functionality, creating an interactive and community-driven platform.
                  </p>
                  <p className="paragraph">
                    Tech Stack : {" "}
                    <span className="techs">
                      Python, Django, MySqlite, HTML, CSS, JavaScript, Bootstrap
                    </span>
                  </p>
                  <div>
                    <a
                      href="/"
                      onClick={() =>
                        openInNewTab("https://github.com/Harshita-Git64/Blog-Application")
                      }
                      className="demoButton items-center gap-3 px-3 py-1 "
                    >
                      Live
                      <img
                        src="/images/share.png"
                        alt="demo"
                        className="align-self-center"
                      />
                    </a>
                  </div>
                </div>
              </section>
            </SplideSlide>
             
              {/* BubbleGame */}
            <SplideSlide>
              <section className="row">
                <div className="col-md-6 align-self-center order-2 order-md-1">
                  <h2 className="heading5 mb-md-4">
                    BubbleMatch - Gaming Application 
                  </h2>
                  <p className="paragraph">
                  Created an interactive game where players score by tapping bubbles with matching values, while incorrect taps reduce points. Integrated a timer to challenge players, with the game ending when time runs out, offering an engaging and competitive experience.
                  </p>
                  <p className="paragraph">
                    Tech Stack :{" "}
                    <span className="techs">
                      React, HTML, CSS
                    </span>
                  </p>
                  <div>
                    <a
                      href="/"
                      onClick={() =>
                        openInNewTab("https://fluffy-cascaron-3c08d8.netlify.app/")
                      }
                      className="demoButton items-center gap-3 px-3 py-1 "
                    >
                      Live
                      <img
                        src="/images/share.png"
                        alt="demo"
                        className="align-self-center"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <img
                    className="projectImage"
                    src="/images/BubbleGame.png"
                    alt="card"
                  />
                </div>
              </section>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Projects;
