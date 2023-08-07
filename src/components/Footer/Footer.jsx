// Importing the CSS file as a dependency
import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <a
        className='bi bi-github'
        href='https://github.com/HarrisSte'
        target='blank'
      ></a>
      <a
        className='bi bi-linkedin'
        href='https://www.linkedin.com/in/stephanie-harris-5069aa224/'
        target='blank'
      ></a>
    </footer>
  );
}

export default Footer;
