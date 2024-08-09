import React from 'react'
import './workexp.css'
const Workexp = () => {
    return (
        <div className='container py-5' >
            <div className="row">

                <div className='col-md-4'>
                    <p className='bar'></p>
                    <h2 className='workexpthead'>Work Experience</h2>
                </div>
                <div className='col-md-8'>
                    <>
                        {/* Section: Timeline */}
                        <section className="pt-5">
                            <ul className="timeline">
                                <li className="timeline-item mb-5">
                                    <h5 className="fw-bold expheadings">Software Developer Intern - </h5>
                                    <p className="expDates">June 2022 - December 2022</p>
                                    <ul>
                                        <li className="expPoints">Contributed in development of an <span> banking ATM application </span>with a features to credit ,withdraw, and manage account balance  for a <span> seamless user experience.</span></li>
                                        <li className="expPoints">Utilized  <span> Java, html,css,and sql</span>  to create a modern and user-friendly interface.</li>
                                    </ul>
                                </li>
                                <li className="timeline-item mb-5">
                                    <h5 className="fw-bold expheadings">Software Developer Intern - Aurasoft digitech</h5>
                                    <p className="expDates">feb 2023 - apr 2023</p>
                                    <ul>
                                        <li className="expPoints">Leveraged <span> HTML, CSS, JavaScript, and Bootstrap </span>to design and implement the frontend of the website.</li>
                                        <li className="expPoints">Collaborated with a team of <span> 5 developers </span>to create a  college councelling platform.</li>
                                        <li className="expPoints">Utilized <span>reactJs, html,css,Redux,and bootstrap</span>  to create a modern and user-friendly interface.</li>
                                    </ul>
                                </li>
                                <li className="timeline-item ">
                                    <h5 className="fw-bold expheadings">Software Developer trainee - Aurasoft digitech</h5>
                                    <p className="expDates">may 2023 - oct 2023</p>
                                    <ul>
                                        <li className="expPoints">developed a <span>E-commerce web application </span> from scrach.</li>
                                        <li className="expPoints">Utilized <span> reactJs,NextJs,Redux, html,css,and bootstrap </span> to create a modern and user-friendly interface.</li>
                                        <li className="expPoints">Utilized <span> NodeJs and Express </span>to build a flexible and easy to understand Backend</li>
                                        <li className="expPoints">Utilized <span> mongoDB</span> to manage and store data</li>
                                    </ul>
                                </li>

                            </ul>
                        </section>
                        {/* Section: Timeline */}
                    </>


                </div>
            </div>
        </div>
    )
}

export default Workexp