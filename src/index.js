import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import Nav from './nav/Nav';
import Intro from './intro/Intro';
import Aboutme from './aboutme/Aboutme';
import Projects from './projects/Projects';
import Workexp from './workexperience/Workexp';
import Skills from './skills/Skills';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bgblack px-2'>
      <Nav />
      <Intro />
      <Aboutme /> 
      <Workexp/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
