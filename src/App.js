import React from 'react';
import {About , Footer, Header , Skills , Work } from './container';
import { Navbar } from './components';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App