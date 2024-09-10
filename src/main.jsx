// Importing items to allow routes to work properly.
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Welcome from './components/welcome/welcome';
import About from './components/about/about';
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
