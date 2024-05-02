import React from 'react';
import './project.css'; // Import your CSS file for styling
import Img from './alumni.webp'
import todo from './todo1.jpeg'
import Kisan from  './kisan.jpeg'
const ProjectPage = () => {
  return (
    <>
    <div className="project-container">
      <div className="project-card">
        <img src={Img} alt="Project" className="project-image" />
        <div className="project-details">
          <h2 className="project-title">Alumni Portal</h2>
          <p className="project-description">
The objective of Alumni portal application  is to build an interaction
between alumni and the student’s.</p>
          <a href="#" className="project-link">Learn More</a>
        </div>
      </div>
  
    
    <div className="project-card">
      <img src={todo} alt="Project" className="project-image" />
      <div className="project-details">
        <h2 className="project-title">Todo List</h2>
        <p className="project-description">A to-do list is a simple yet powerful tool for organizing tasks and managing time efficiently. It serves as a roadmap for daily productivity, helping individuals prioritize and accomplish their goals.</p>
        <a href="#" className="project-link">Learn More</a>
      </div>
    </div> 
    <div className="project-card">
      <img src={Kisan} alt="Project" className="project-image" />
      <div className="project-details">
        <h2 className="project-title">Kisan Kart</h2>
        <p className="project-description">Kisan Kart is a ecommerce website for farmers where they can purchase their required products such as pesticides,insecticides and seeds etc</p>
        <a href="#" className="project-link">Learn More</a>
      </div>
    </div>
  </div>
  </>
  );
};

export default ProjectPage;