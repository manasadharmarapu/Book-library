import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddBook from './AddBook';
import ViewBook from './ViewBook';
import EditBook from './EditBook';
import Home from './Home';
import Welcome from './Welcome';
import Latest from './Latest';
import Footer from './Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/add",
    element:<AddBook/>
  },
  {
    path: "/view",
    element:<ViewBook title="Books" />
  },
  {
    path: "/edit/:id",
    element:<EditBook/>
  },
  {
    path: "/home",
    element:<Home/>
  },
  {
    path: "/welcome",
    element:<Welcome/>
  },
  {
    path: "/latest",
    element:<Latest/>
  },
  {
    path: "/footer",
    element:<Footer/>
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
