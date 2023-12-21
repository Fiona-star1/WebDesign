import React from 'react'
import './skills.css';
import Html from '../../../../my-react-app/src/assets/html.png';
import Css from '../../../../my-react-app/src/assets/css.png';
import Js from '../../../../my-react-app/src/assets/js.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate Web Developer. I have knowledge in HTML, CSS, JS & React JS.</span>
        <div className="skillBars">
            <div className="skillBar"></div>
                <img src={Html} alt="Html" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Html</h2>
                    <p>Defines the meaning and structure of web content.</p>
                </div>
        </div>
        <div className="skillBars">
            <div className="skillBar"></div>
               <img src={Css} alt="Css" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Css</h2>
                    <p>Style sheet language used for describing the presentation of a document.</p>
                </div>
        </div>
        <div className="skillBars">
            <div className="skillBar"></div>
                <img src={Js} alt="Js" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Js</h2>
                    <p>Lightweight interpreted programming language with first-class functions.</p>
                </div>
        </div>
    </section>
  )
}

export default Skills;
