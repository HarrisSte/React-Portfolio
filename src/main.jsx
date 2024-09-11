import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from './components/Welcome/Welcome.jsx';
import About from './components/About/About.jsx';
import Credentials from './components/credentials/credentials.jsx';
import WebDev from './components/webDevPortfolio/webProjects.jsx';
import Education from './components/eduPortfolio/eduPortfolio.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      {
        path: '/about',
        element: <About />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
