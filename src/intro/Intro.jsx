import React from "react";
import "./intro.css";
const Intro = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="container py-3 ">
      <div className="row mb-2">
        <div className="col-md-6 align-self-center">
          <h2 className="heading ">
            Hi, I am <br />
            <span>Harshita Paliwal</span>{" "}
          </h2>
          <p className="introDesc">
            A passionate Full Stack Web Developer with experience in creating
            both front-end and back-end parts of web applications. I enjoy
            solving problems and delivering high-quality software that works
            well for users. My love for learning and tackling new challenges
            helps me keep improving and staying up-to-date in web development.
          </p>
          <button
            className="resumeBTN p-md-2 mt-3"
            role="link"
            onClick={() =>
              openInNewTab(
                "https://drive.google.com/file/d/1kUxTBvLA2vK2jVrIX3r-XQLCx3jdJcBW/view?usp=sharing"
              )
            }
          >
            Resume
          </button>
        </div>
        <div className="col-md-6 ">
          {/* <img className='ProfileImage' src="/images/next.png" alt="" /> */}
          <img
            className="ProfileImage"
            src="https://images.lemonly.com/wp-content/uploads/2018/08/07150313/Homebase_Thumb_v01.gif"
            alt="harshita-git64"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
