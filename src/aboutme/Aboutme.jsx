import React from 'react'
import "./aboutme.css"
const Aboutme = () => {
    return (
        <div className='container py-5' id='about'>
            <div className="row">
                <div className='col-md-6'>
                    <span className='aboutmehead'>About Me</span>

                    <h2 className='abouthead pt-4'>Designing and Developing Engaging Digital Realities</h2>
                    <p className='aboutdesc'>Step into the realm of full stack development with me! I’m Harshita Paliwal, a committed Full Stack Developer passionate about transforming ideas into engaging digital solutions. With the experience of tech industry through internships and projects, I have honed my skills to provide comprehensive, end-to-end web development services. I’m driven by a passion for creating impactful web applications and continuously seek to innovate and enhance my craft. Let’s connect and explore how I can bring your digital vision to life!</p>
                </div>
                <div className='col-md-6 pt-4'>
                
                <div className="row teckcard py-2 mb-2">
                        <div className="col-2 my-md-auto"><span className='bracket'><img src="/images/braceks.png" alt="" /></span></div>
                        <div className="col-10 texts">
                            <h2>Relentless Problem-Solving</h2>
                            <p>I face every challenge with determination and a positive attitude. When I encounter tough problems, I use creativity and persistence to find the best solutions. My dedication to solving issues motivates me to keep learning and adapting.</p>
                        </div></div>

                    <div className="row teckcard py-2 mb-2">
                        <div className="col-2 my-md-auto"><span className='bracket'><img src="/images/braceks.png" alt="" /></span></div>
                        <div className="col-10 texts">
                            <h2>Passion for Innovation</h2>
                            <p>My passion for technology fuels my drive to explore new ideas and push the boundaries of what's possible. I am always excited to experiment with novel approaches and technologies, striving to create unique and impactful digital experiences. This enthusiasm for innovation keeps my work dynamic and forward-thinking.</p>
                        </div></div>

                    <div className="row teckcard py-2 mb-2">
                        <div className="col-2 my-md-auto"><span className='bracket'><img src="/images/braceks.png" alt="" /></span></div>
                        <div className="col-10 texts">
                            <h2>Technical Expertise and Project Experience</h2><p>I possess strong proficiency in key technologies including React, Node.js,  Express.js, MongoDB, and SQL. My hands-on experience with these tools has been deepened through the development of various projects, allowing me to apply and refine my skills. These projects have provided me with a comprehensive understanding of full-stack development, enabling me to deliver robust and scalable solutions across different aspects of web development.</p></div></div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme