import React from 'react'
import Geek from './geek.png'
import code from './code.png'
import chef from './chef.png'

import './education.css'
import Zpgh from './zpgh-removebg-preview.png'
import ong from './ong-removebg-preview.png'
import leet from './leet.png'
import { Fade, Zoom} from "react-reveal";
import img from './graduation-neon-sign-graduation-cap-diploma-night-bright-advertisement_1262-13489-removebg-preview.png'
const education = () => {

  return (
    <>
    <div className='head'>
     <Zoom bottom duration={2000} distance="15px">
      <img src={img} alt=" " width="560px"/>
      </Zoom>
    <div className='head2'>
    <Zoom bottom duration={3520} distance="15px">     <h1>Education</h1>  </Zoom>
    <Zoom bottom duration={3850} distance="15px">
        <h2>Basic Qualification and Certifcations</h2>
        </Zoom>
        <div classaName='head3' style={{"padding":"50px","display":"flex","justifyContent":"space-between"}}>
        <Zoom bottom duration={4550} distance="15px">
       <img src={leet} alt="" width="50px"/>
       <img src={code} alt="" width="50px"/>
       <img src={chef} alt="" width="50px"/>
       <img src={Geek} alt="" width="50px"/>
       </Zoom>
        </div>
    </div>
    </div>
 <Fade bottom duration={3000} distance="15px"> <center><h1>Education and Degreee</h1></center></Fade>  
 <Fade bottom duration={4000} distance="35px"> 
<div className='main'>
<img className='ong' src={ong} alt=""/>
<div className='edu'>
  <div className='edu2'>
 <h3>  Bachelor of Technology <br/> Information Technology</h3>

  </div>
  <div className='edu3'>
<ul >

⚡ Stuying  B.Tech in IIIT ONOGOLE in the stream of computer science of engineering<br/>

  
  ⚡ Won few coding contest hosted by the Tech Club of College, and will win more<br/>
  ⚡2021 - 2025
 
</ul>
  </div>
</div>
</div>
</Fade>
<Fade bottom duration={5000} distance="25px"> 
<div className='main'>

  <img className='ong' src={ong} alt=""/>
<div className='edu'>
  <div className='edu2'>
 <h3>  PRE-UNIVERSITY <br/> PUC-I && II</h3>

  </div>
  <div className='edu3'>
    
<ul >

⚡ I had completed my pre university course in RGUKT ONGOLE<br/>

  
  ⚡ I got 99.6% in my PUC<br/>
  ⚡2019-2020
 
</ul>
  </div>
</div>
</div>
</Fade>
<Fade bottom duration={6000} distance="25px"> 
<div className='main'>
  <img className='high' src={Zpgh} alt=""/>
<div className='edu'>
  <div className='edu2'>
 <h3> HIGH SCHOOL <br/></h3>

  </div>
  <div className='edu3'>
<ul >

⚡ I Did my SSC in ZPGHs Koyyalgudem<br/>

  
  ⚡I Got 10 GPA  <br/>
  ⚡2014-2018
 
</ul>
  </div>
</div>
</div>
</Fade>

    </>
  )
}

export default education
