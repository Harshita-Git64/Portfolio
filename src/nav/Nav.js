import React from 'react'
import './nav.css'
const Nav = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light text-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        onClick={() => document.getElementById("myNav").style.width = "100%"}
                                       >
                        <img src='/images/menu.svg' alt='' />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarRightAlignExample">
                        {/* Left links */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item navText me-4">
                                <a className="nav-link active" aria-current="page" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item navText me-4">
                                <a className="nav-link active" aria-current="page" href="#project">
                                    Project
                                </a>
                            </li>
                            <li className="nav-item navText me-4">
                                <a className="nav-link active" aria-current="page" href="#skills">
                                    Skills
                                </a>
                            </li>
                            <li className="nav-item navText me-4">
                                <a className="nav-link active" aria-current="page" href="#contact">
                                    Contact
                                </a>
                            </li>


                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>

            <div id="myNav" className="overlay">
                <a href="javascript:void(0)" class="closebtn" onClick={() => document.getElementById("myNav").style.width = "0%"}>&times;</a>
                
                {/* Button to close the overlay navigation */}
                {/* Overlay content */}
                <div className="overlay-content">
                    <a onClick={() => document.getElementById("myNav").style.width = "0%"} href="#about">About</a>
                    <a onClick={() => document.getElementById("myNav").style.width = "0%"} href="#project">Project</a>
                    <a onClick={() => document.getElementById("myNav").style.width = "0%"} href="#skills">Skills</a>
                    <a onClick={() => document.getElementById("myNav").style.width = "0%"} href="#contact">Contact</a>
                </div>
            </div>


        </div>
    )
}

export default Nav