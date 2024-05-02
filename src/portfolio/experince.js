import React from 'react'
import girl from './girl.png'
import Img from './face.png'
import './experince.css'
import { TypeAnimation } from 'react-type-animation';
import html from './html-removebg-preview.png'
import css from './css-removebg-preview.png'
import js from './js-removebg-preview.png'
import boot from './boot-removebg-preview.png'
import jquery from './jquery-removebg-preview.png'
import react from './react-removebg-preview.png'
import node from './node-removebg-preview.png'
import express from './express-removebg-preview.png'
import db from './db-removebg-preview.png'
import c from './c-removebg-preview.png'
import python from './py-removebg-preview.png'
import java from './java-removebg-preview.png'
const experince = () => {
  return (
    <>
    <div className='main'>
    <div className='skill'>
        <h2>Hi,Iam <span style={{"color":"blueviolet"}}>Sirisha Kande</span></h2>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Iam a  Python Developer',
        1000, 
        
        'Iam  a Web Developer',
        1000,
        'Iam a Mernstack Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2.4em', display: 'inline-block',color:'rebeccapurple' }}
      repeat={Infinity}
    />

    </div>
    <img src={girl} alt=""/>
    </div>
<h1>Skills And Languages</h1>
  <div className='row1'> 
    <img src={html} alt="html" width="200px" height="200px" className='js'/>
    <img src={css} alt="css" width="200px" height="200px" className='js'/>
    <img src={js} alt="js" width="200px" height="200px" style={{"backgroundColor":"yellow"}} className='js'/>
  </div>
  <div className='row1'>
  <img src={boot} alt="bootstrap" width="200px" height="200px" className='js' style={{"backgroundColor":"purple"}}/>
    <img src={jquery} alt="jqury" width="200px" height="200px" className='js'/>
    <img src={react} alt="react" width="200px" height="200px" className='js'/>
  </div>
  <div className='row1'>
  <img src={node} alt="html" width="200px" height="200px" className='js'/>
    <img src={db} alt="css" width="200px" height="200px" className='js'/>
    <img src={express} alt="js" width="200px" height="200px"  className='js'/>
  </div>
  <div className='row1'>
  <img src={python} alt="html" width="200px" height="200px" className='js'/>
    <img src={c} alt="css" width="200px" height="200px" className='js'/>
    <img src={java} alt="js" width="200px" height="200px"  className='js'/>
  </div>
    </>
  )
}

export default experince
