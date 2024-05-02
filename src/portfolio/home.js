import React from 'react'
import Gitt  from './git.png'
import Link from './link.png'
import You from './youtube.png'
import Face from './face.png'
import insta from './insta.jpeg'
import { Fade ,Zoom} from "react-reveal";
import pic from './3ce81f802820c8415bfe04415a0bde3a-removebg-preview.png'
import './home.css'
import { Button } from 'react-bootstrap'
const Home = () => {
  return (
    <>
    <Zoom bottom duration={2000} distance="15px">
    <div className='a'>
        <div>
          
        <h1>Sirisha Kande</h1>
      <h2>(Sirisha2003)</h2>
<p>  An aspiring Mernstack Developer and competitive Programmer </p>
<div className='link'>
<img src={Gitt} alt="" width="40px"/>
<img src={Link} alt="" width="40px"/>
<img src={You} alt="" width="40px"/>
<img src={Face} alt="" width="40px"/>
<img src={insta} alt="" width="40px"/>
</div>

<Button>Follow Me On Github</Button>

        </div>
       
        
    <div className='img'>
    <Zoom bottom duration={4100} distance="15px">
<img src={pic} alt=""/></Zoom>
    </div>
    
    </div>
    </Zoom>
 
    </>
  )
}

export default Home
