// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Nav/NavLinks';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

// Render only single instances of Header, Footer, and Navbar
// These are the components that will stay stationary on the app.
function App() {
  return (
    <>
      <div>
        <Header />
        <Navigation />
        <Footer />
        <Outlet />
      </div>
    </>
  );
}

export default App;
