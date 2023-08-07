// Here we are importing a CSS file as a dependency
import '../Header/Header.css';

function Header() {
  return (
    <header id='container' className='header'>
      <div className='profileImg'>
        <img
          src='../../src/assets/profileImg.jpg'
          alt='Profile image'
          className='img-fluid rounded-circle profile-image'
        />
      </div>
      <h1>Stephanie Harris</h1>
    </header>
  );
}

export default Header;
