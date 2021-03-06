import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './about.css'
const About = () => {
  return (
    <section id='about'    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
          <img src='https://raw.githubusercontent.com/mohammedsaid21/mohammedsaid21/main/image/giphy.webp' />
          </div>
        </div>

        <div className='about_content'>
            <div className='about_cards'>
              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
              
              <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Clients</h5>
                <small>5+ &nbsp; World wide</small>
              </article>
              
              <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>

              <p>
                I love turning beautiful designs into usable websites that are responsive to various devices as well as being scalable.learn new skills and work with new technologies is important to me for developing my self.And I do this by learning and keeping up with new tools by reading documentation and following MDN.
              </p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>

    </section>
  )
}

export default About