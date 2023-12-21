import React from 'react';
import './intro.css';
import bg from '../../../../my-react-app/src/assets/image.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className='introText'>I'm <span className="introName">Fiona</span> <br />Web Developer</span>
            <p className="introPara">I have a love for creating beautiful and functional websites.<br/>
            I'm thrilled to be part of the dynamic world of web development<br/>
            and can't wait to bring your digital visions to life!</p>

        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>

  )
}

export default Intro;