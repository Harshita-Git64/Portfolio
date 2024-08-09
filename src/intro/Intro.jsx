import React from 'react'
import './intro.css'
const Intro = () => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };        
    return (
        <div className='container py-3 '>
            <div className='row mb-2'>
                <div className='col-md-6 align-self-center' >
                    <h2 className='heading '>Hi, I am <br />
                        <span>vishal Sahu</span> </h2> 
                        <p className='introDesc'>
                        A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs / MongoDB and some other cool libraries and frameworks.
                            </p>
                            <button className='resumeBTN p-md-2 mt-3' role="link"
        onClick={() =>openInNewTab('https://drive.google.com/file/d/1z51Lm70QIGE_TupaZNFjqcn6lFlJxQ_A/view?usp=sharing')}>Resume</button>
                            </div>
                <div className='col-md-6 ' >
                    <img className='ProfileImage' src="/images/profile.png" alt="" />
                     </div>
            </div>

        </div>
    )
}

export default Intro
