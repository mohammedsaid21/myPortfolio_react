import React, { useState } from 'react'
import CTA from './CTA'
import MEP  from '../../assets/person.png'
import './header.css'
const Header = () => {

  return (
    <header id='header'>
      <div className='container header_container'>
        <div className='info'>
        <h5>Hello I'm</h5>
        <h2>Mohamed Said</h2>
        <h5 className='text-light'>Frontend Developer</h5>

        <CTA />
        </div>

        <div className='me'>
          <img src={MEP} alt='me' />
        </div>


        <a href='#contact' className='scroll_down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header