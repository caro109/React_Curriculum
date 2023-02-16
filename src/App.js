import { Routes, Route} from 'react-router-dom';
import React from 'react';
import {Header} from './components/layout/Header';
import  './App.css';
import { Aboutas } from './components/ui/Aboutas';
import { Contactus } from './components/ui/Contac';
import { FaHome } from 'react-icons/fa';
import { Imgnav } from './components/ui/ImgNav';
import { ContClick } from './components/ui/Contclick';
import { ContSum } from './components/ui/Contsum';


function App() {
  return (
    <div className="App">
      <Header/>
      <Imgnav />
      <Routes>
        <Route path='/' element={<FaHome/>} />
        <Route path='/aboutas' element={<Aboutas/>} />
        <Route path='/contactus' element={<Contactus/>} />
        <Route path='/contclick' element={<ContClick/>}/>
        <Route path='/contsum' element={<ContSum/>}/>
      </Routes>
    </div>
  );
}

export default App;
//path
