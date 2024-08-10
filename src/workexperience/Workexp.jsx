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
                                    <h5 className="fw-bold expheadings">Software Developer - Winlancer Technologies</h5>
                                    <p className="expDates">August 2023 - Febuary 2024</p>
                                    <ul>
                                        <li className="expPoints">Implemented <span>cross-platform features for Android and iOS </span> mobile applications using <span>Xamarin and C# within .NET framework</span> ,ensuring seamless integration and optimal performance.
                                        </li>
                                       
                                        <li className="expPoints">Designed and developed user interfaces (UI) to deliver a seamless and user-friendly experience.</li>

                                        <li className="expPoints"> Collaborated with teams to enhance <span>project efficiency and achieve project goals.</span></li>

                                        <li className="expPoints">Performed comprehensive debugging to identify and resolve issues in program execution.</li>
                                          
                                        <li className="expPoints">Actively participated in <span>code reviews </span>to provide and receive constructive feedback, identifying and implementing improvements. </li>

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