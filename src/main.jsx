import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
// import Home from './components/Home/Home';
import About from './components/About/About';
// import Portfolio from './components/Portfolio/Project' 
// import Contact from './components/Contact/Contact';

// import Portfolio from './components/Portfolio';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
      {
        path: '/About',
        element: <About />,
      },
        // {
        //   path: '/portfolio',
        //   element: <Portfolio />,
        // },
        // {
        //   path: '/Contact',
        //   element: <Contact />,
        // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
