import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Welcome from './components/Welcome/Welcome.jsx';
import About from './components/About/About.jsx';
import Credentials from './components/Credentials/Credentials.jsx';
import WebDev from './components/WebDevPortfolio/WebProjects.jsx';
import Education from './components/EduPortfolio/EduPortfolio.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/credentials',
        element: <Credentials />,
      },
      {
        path: '/web-dev-portfolio',
        element: <WebDev />,
      },
      {
        path: '/education-portfolio',
        element: <Education />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
