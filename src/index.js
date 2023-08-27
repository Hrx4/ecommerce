import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar1 from './Components/NavBar1';
import Footer from './Components/Footer';
import { About } from './about/About';
import SubscribePart from './Components/SubscribePart';
import Products from './Components/Products';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar1/>
        <Routes>
          <Route exact path='/' element={<App/>}/>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/products' element={<Products/>}/>
        </Routes>
        <SubscribePart/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

