// Importing the CSS file as a dependency
import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-auto'>
            <a
              className='bi bi-envelope'
              href='mailto:st3phanie.harris@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </div>
          <div className='col-auto'>
            <a
              className='bi bi-github'
              href='https://github.com/HarrisSte'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </div>
          <div className='col-auto'>
            <a
              className='bi bi-linkedin'
              href='https://www.linkedin.com/in/stephanie-harris-5069aa224/'
              target='_blank'
              rel='noopener noreferrer'
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
