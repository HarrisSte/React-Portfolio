import React from 'react';
import '../Resume/Resume.css';

function handleDownload() {
  const link = document.createElement('a');
  link.href = '../../../public/SHarris_Resume.pdf';
  link.download = 'SHarris_Resume.pdf';
  link.click();
}

export default function Resume() {
  return (
    <div className='about'>
      <div className='row'>
        <div className='col-12'>
          <h1>
            Resume & <br />
            Proficiencies
          </h1>
        </div>
        <div className='col-6'>
          <p>Front-End Proficiencies</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className='col-6'>
          <p>Back-End Proficiencies</p>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className='button'>
          <div className='center-button'>
            <button onClick={handleDownload}>Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
