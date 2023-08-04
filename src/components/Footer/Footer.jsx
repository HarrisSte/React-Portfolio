// Here we are importing a CSS file as a dependency
// import React from 'react';
import '../../../src/index.css';
// import 'bootstrap-icons/';

function Footer() {
  return (
    <footer className='footer'>
      <a
        className='bi bi-github'
        href='https://www.github.com'
        target='blank'
      ></a>
      <a
        className='bi bi-linkedin'
        href='https://www.linkedin.com'
        target='blank'
      ></a>
    </footer>
  );
}

export default Footer;
