// Render only single instances of Header, Footer, and Navbar
// These are the components that will stay stationary on the app.

import { Outlet } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Nav/NavLinks.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        <main className='mx-3'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
