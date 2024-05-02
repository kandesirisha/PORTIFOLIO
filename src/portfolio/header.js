import React from 'react'
import {Link} from 'react-router-dom'
import './hedaer.css'


const header = () => {
  return (
    <div>
     
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link class="navbar-brand" to="#">sirisha kande</Link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='nav'>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/education">Education</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/experince">Experience</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/project">projects</Link>
        </li>       <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact me</Link>
        </li>       
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default header
