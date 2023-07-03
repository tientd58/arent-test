import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';
import { Routes } from './routes/Routes';
import AuthService from "./services/tokenServices";

const App = () => {

  return (
      <BrowserRouter>
        <Routes currentUser={AuthService.getCurrentUser()} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
  );
}

export default App;
