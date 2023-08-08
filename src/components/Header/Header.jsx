// Importing necessary styles and files.
import './Header.css';
import profileImg from '../../assets/profileImg.jpg';

function Header() {
  return (
    <header id='container' className='header'>
      <div className='profile'>
        <img
          src={profileImg}
          alt='Profile image'
          className='img-fluid rounded-circle profile-image'
        />
      </div>
      <h1>Stephanie Harris</h1>
    </header>
  );
}

export default Header;
