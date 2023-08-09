// Importing necessary files for the Resume section.
import '../Resume/Resume.css';

//Allows resume to be downloaded on user click.
function handleDownload() {
  const link = document.createElement('a');
  link.href = '../../../public/SHarris_Resume.pdf';
  link.download = 'SHarris_Resume.pdf';
  link.click();
}

//Content for the resume section.
export default function Resume() {
  return (
    <div className='about'>
      <div className='row'>
        <div className='col-10'>
          <h1>
            Resume & <br />
            Proficiencies
          </h1>
        </div>

        <div className='col-6'>
          <p>Front-End</p>
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
          <p>Back-End</p>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL and Sequelize</li>
            <li>MongoDB and Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className='center-button'>
          <button onClick={handleDownload}>Download Resume</button>
        </div>
      </div>
    </div>
  );
}
