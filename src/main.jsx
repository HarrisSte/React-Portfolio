import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Welcome from './components/welcome/welcome';
import About from './components/about/about';
import Credentials from './components/credentials/credentials';
import WebDev from './components/webDevPortfolio/webProjects';
import Education from './components/eduPortfolio/eduPortfolio';
import Contact from './components/contact/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/About',
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
