import './assets/css/reset.css';
import './assets/css/style.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartScreen from "./Pages/StartScreen";
import MainScreen from './Pages/MainScreen';

function App() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartScreen setName={setName} setStatus={setStatus}/>} />
        <Route path='/main' element={<MainScreen name={name} status={status}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
