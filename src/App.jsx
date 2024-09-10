import { Outlet } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';

import './App.css';

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
