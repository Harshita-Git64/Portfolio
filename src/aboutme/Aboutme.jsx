import React from 'react'
import "./aboutme.css"
const Aboutme = () => {
    return (
        <div className='container py-5' id='about'>
            <div className="row">
                <div className='col-md-6'>
                    <span className='aboutmehead'>About Me</span>

                    <h2 className='abouthead pt-4'>Transforming ideas into
                        interactive digital realities.</h2>
                    <p className='aboutdesc'>Welcome to my world of full stack development! I am Harshita Paliwal, a seasoned full stack developer with a passion for crafting innovative digital solutions that seamlessly blend front-end aesthetics with back-end functionality. With the experience of tech industry through internships and projects, I have honed my skills to provide comprehensive, end-to-end web development services.</p>
                </div>
                <div className='col-md-6 pt-4'>
                    <div className="row teckcard py-2 mb-2">
                        <div className="col-2 my-md-auto"><span className='bracket'><img src="/images/braceks.png" alt="" /></span></div>
                        <div className="col-10 texts">
                            <h2> Front-end Technologies</h2>
                            <p>I specialize in crafting captivating user interfaces using HTML5, CSS3, and JavaScript frameworks like React and Next.js. I ensure that every user interaction is smooth and visually engaging.</p>
                        </div></div>
                    <div className="row teckcard py-2 mb-2">
                        <div className="col-2 my-md-auto"><span className='bracket'><img src="/images/braceks.png" alt="" /></span></div>
                        <div className="col-10 texts">
                            <h2>Back-end Development</h2><p>I work with server-side technologies such as Node.js, Express.js and have experience with services like firebase to create efficient and scalable back-end systems.</p></div></div>
                    <div className="row teckcard py-2 mb-2">
                        <div className="col-2 my-md-auto"><span className='bracket'><img src="/images/braceks.png" alt="" /></span></div>
                        <div className="col-10 texts"><h2>Continuous Learning</h2>
                        <p>Staying updated with the ever-evolving tech landscape is my commitment. I'm constantly learning and experimenting with new technologies and trends to provide you with cutting-edge solutions.</p>
                        </div></div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme