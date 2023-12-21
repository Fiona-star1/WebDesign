import React from 'react'
import './contact.css';
const contact = () => {
  return (
    <section id="contactPage">
    
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <form className='contactForm'>
            <input type="text" className="name" placeholder='Your Name' />
            <input type="email" className="email" placeholder='Your Email' />
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBtn">Submit</button>
            <div className="links"></div>
              
          </form>
        </div>

    </section>
  )
}

export default contact