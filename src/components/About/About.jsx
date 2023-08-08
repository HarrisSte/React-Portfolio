import React from 'react';
import '../About/About.css';

// About section.
export default function About() {
  return (
    <div className='about'>
      <div className='row'>
        <div id='about' className='col-md-3'>
          <h1>
            About<br></br>Stephanie
          </h1>
          <img
            src='../../../src/assets/AboutPhoto.jpg'
            alt='Picture of Stephanie'
            className='profile-image'
          />
        </div>
        <div className='col-md-8'>
          <p>
            Over the past ten years, my heart and soul have been dedicated to
            shaping young minds in middle school education. It has been an
            incredible journey, witnessing the growth and progress of my
            students, and knowing I have made a difference in their lives.
            <br></br>
            <br></br>
            However, life had a fascinating twist for me, leading me to explore
            my passion for web development. Embracing the unknown, I decided to
            pursue this new frontier and immerse myself in coding, design, and
            technology.
            <br></br>
            <br></br>
            The transition was challenging, but my decade of experience in
            education taught me the value of perseverance and hard work. I dove
            into online courses, coding boot camps, and self-guided projects,
            constantly seeking to improve my skills and understanding.
            <br></br>
            <br></br>
            As I move forward, I am eager to continue making a positive impact
            and embracing new adventures in education and technology.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
