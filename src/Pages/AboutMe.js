import React from 'react'
import '../styles/AboutMe.css';

function AboutMe({setPage}) {
  const handleOpenPdf = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank'); // Replace with your PDF file path
  };
  return (
    <div className="about-me">
        
        <div className='intro'>
          <p className="title">&#129305; Hi, I'm Jason Chen!</p>
          <p className="description">I am an aspiring Software Engineer and a Junior studying Computer Science at the University of Minnesota - Twin Cities.</p>
          <br></br>
          <p className="description">I am passionate about developing software that makes a positive impact for people. Besides coding, my hobbies include playing team strategy video games, basketball, and watching Minnesota sports. (it's been rough &#x1F614;)</p>
          <br></br>
          <p className="description">Here is my <b onClick={handleOpenPdf} style={{cursor: 'pointer'}}>resume</b> and some of there cool <b onClick={() =>{setPage("experience")}}  style={{cursor: 'pointer'}}>projects</b> I made.</p>
        </div>
        <img className="portrait" src={`${process.env.PUBLIC_URL}/portrait.png`} alt="Me"></img>
    </div>
  );
}

export default AboutMe;
