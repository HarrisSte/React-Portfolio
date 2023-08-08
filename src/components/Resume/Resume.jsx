import React from 'react';

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
        <div className='col-12 col-lg-3'>
          <h1>
            Resume & <br />
            Proficiencies
          </h1>
        </div>
        <div className='col-12 col-lg-8'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            tenetur maiores, dolor iusto dolorum ullam, natus deleniti
            blanditiis impedit suscipit sed magnam alias in, repellat expedita
            hic explicabo architecto soluta. About us Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Velit voluptate exercitationem
            quaerat pariatur mollitia, excepturi, voluptatem eveniet a dolor
            nobis ex veniam totam nostrum temporibus ad omnis nam rerum
            eligendi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            tenetur maiores, dolor iusto dolorum ullam, natus deleniti
            blanditiis impedit suscipit sed magnam alias in, repellat expedita
            hic explicabo architecto soluta. About us Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Velit voluptate exercitationem
            quaerat pariatur mollitia, excepturi, voluptatem eveniet a dolor
            nobis ex veniam totam nostrum temporibus ad omnis nam rerum
            eligendi.
          </p>
          <button onClick={handleDownload}>Download Resume</button>
        </div>
      </div>
    </div>
  );
}
