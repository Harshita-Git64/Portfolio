import React from 'react'
import './footer.css'
import { socialMedia } from '../Contstant'
const Footer = () => {
    return (
        <>
            <div className="container my-5">
                <footer className=" text-center text-white">
                    <div className="container p-4 pb-0">
                        <div className="col-3 mx-auto" >

                            <div className="row">
                                <div className="col-md-3 my-2"><a href='#about'>About</a></div>
                                <div className="col-md-3 my-2"><a href='#project'>Project</a></div>
                                <div className="col-md-3 my-2"><a href='#skills'>Skills</a></div>
                                <div className="col-md-3 my-2"><a href='#contact'>Contact</a></div>
                            </div>
                        </div>
                        <section className="mb-4">
                            {/* Instagram */}


                            {socialMedia.map((social, index) => (
                                <a
                                    href={social.link}
                                    key={index}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mx-2"
                                        height={20}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d={social.pathD} />
                                    </svg>
                                </a>
                            ))}

                        </section>
                    </div>
                    <hr />
                    <div
                        className="text-center p-3"

                    >
                        © 2023 Copyright :
                        <a className="text-white" href="/">
                            Created by Vishal Sahu <span className='text-danger'> &#9829;</span>
                        </a>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Footer