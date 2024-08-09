import React from 'react'
import './projects.css'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
const Projects = () => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };


    return (
        <div className='container py-5' id='project'>
            <div className="row">
                <div className='col-md-4'>
                    <p className='bar'></p>
                    <h2 className='projecthead'>Projects</h2>
                </div>
                <div className='col-md-8'>
                    <p className='projectdesc'>
                        Explore my portfolio of diverse web projects, showcasing my full-stack development expertise. From stunning front-end designs to powerful back-end functionality, these examples demonstrate my commitment to crafting seamless digital experiences.</p>
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
                        }}
                    >
                        <SplideSlide>
                            <section className="row">
                                <div className="col-md-6 order-2 order-md-1 align-self-center ">
                                    <h2 className="heading5 mb-md-4">Get Your Gollege </h2>
                                    <p className="paragraph" >
                                        Unlock Your Academic Potential with 'Get Your College' – Your Passport to Success. Experience a world of tailored guidance, expert insights, and transformative resources meticulously designed for your educational journey. Embrace excellence with us and redefine your path to higher education.
                                    </p>
                                    <p className="paragraph">
                                        Built using{" "}
                                        <span className="techs">
                                            Next.js ,Html,css,bootstrap and redux
                                        </span>
                                    </p>
                                    <div >
                                        <a

href='/'onClick={() => openInNewTab("https://getyourcollege.in/")}
                                            className="demoButton items-center gap-3 px-3 py-1 "

                                        >
                                            Live
                                            <img src="/images/share.png" alt="demo" className="align-self-center" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1vorder-md-2">
                                    <img className='projectImage' src="/images/GYC_project.png" alt="card" />
                                </div>
                            </section>
                        </SplideSlide>
                        <SplideSlide>
                            <section className="row">
                                <div className="col-md-6">
                                    <img className='projectImage' src="/images/TakingForward.png" alt="card" />
                                </div>
                                <div className="col-md-6 align-self-center ">
                                    <h2 className="heading5 mb-md-4">Taking Forward</h2>
                                    <p className="paragraph" >
                                        Taking Forward: Where Stocks Become Your Story. Dive into the world of stock market courses with our innovative web app. Unlock the secrets of financial success and trade your way to a brighter future."
                                    </p>
                                    <p className="paragraph">
                                        Built using{" "}
                                        <span className="techs">
                                            Html,css,bootstrap and JavaScript
                                        </span>
                                    </p>
                                    <div >
                                        <a

href='/'onClick={() => openInNewTab("https://www.takingforward.com/")}
                                            className="demoButton items-center gap-3 px-3 py-1 "
                                        >
                                            Live
                                            <img src="/images/share.png" alt="demo" className="align-self-center" />
                                        </a>
                                    </div>
                                </div>

                            </section>
                        </SplideSlide>
                        <SplideSlide>
                            <section className="row">
                                <div className="col-md-6 align-self-center order-2 order-md-1 ">
                                    <h2 className="heading5 mb-md-4">Minesweeper</h2>
                                    <p className="paragraph" >
                                        Minesweeper: The classic puzzle game that challenges your wit and logic. Safely navigate the grid, avoid hidden mines, and uncover the treasures of strategic thinking.
                                    </p>
                                    <p className="paragraph">
                                        Built using{" "}
                                        <span className="techs">
                                            ReactJs,HTML,CSS,Bootstrap
                                        </span>
                                    </p>
                                    <div >
                                        <a
                                        href='/'
                                          onClick={() =>openInNewTab("https://mines-xr4w.onrender.com/")}
                                            className="demoButton items-center gap-3 px-3 py-1 "
                                        >
                                            Live
                                            <img src="/images/share.png" alt="demo" className="align-self-center" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <img className='projectImage' src="/images/minesweeper.png" alt="card" />
                                </div>
                            </section>
                        </SplideSlide>
                        <SplideSlide>
                            <section className="row">
                                <div className="col-md-6">
                                    <img className='projectImage' src="/images/newsapp.png" alt="card" />
                                </div>
                                <div className="col-md-6 align-self-center ">
                                    <h2 className="heading5 mb-md-4">News Seeker </h2>
                                    <p className="paragraph" >
                                        News Seeker, your ultimate source for curated, real-time news. Stay magnetically connected to the world's stories with our sleek and user-friendly app. Instant updates and diverse categories make sure you're always at the center of what matters most."
                                    </p>
                                    <p className="paragraph">
                                        Built using{" "}
                                        <span className="techs">
                                            React.js ,Html,css,bootstrap
                                        </span>
                                    </p>
                                     <div >
                                        <a
                                            href="https://newsseeker.onrender.com/"
                                            className="demoButton items-center gap-3 px-3 py-1 "
                                        >
                                            Live
                                            <img src="/images/share.png" alt="demo" className="align-self-center" />
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </SplideSlide>
                        <SplideSlide>
                            <section className="row">
                                <div className="col-md-6 align-self-center order-2 order-md-1">
                                    <h2 className="heading5 mb-md-4">FashionFlow - Shopping App</h2>
                                    <p className="paragraph" >
                                        Your Gateway to Limitless Shopping Bliss. Experience the pinnacle of e-commerce with a world of products at your fingertips. Unleash your desires, explore boundless choices, and elevate your retail experience like never before.
                                    </p>
                                    <p className="paragraph">
                                        Built using{" "}
                                        <span className="techs">
                                            Next.js ,Html,css,bootstrap and redux
                                        </span>
                                    </p>
                                    <div >
                                        <a
                                        href='/'
                                          onClick={() =>openInNewTab("https://fashionflow.vercel.app/")}
                                            className="demoButton items-center gap-3 px-3 py-1 "
                                        >
                                            Live
                                            <img src="/images/share.png" alt="demo" className="align-self-center" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <img className='projectImage' src="/images/FashionFlow.png" alt="card" />
                                </div>
                            </section>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    )
}

export default Projects
