import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

function App() {
  const pages = import.meta.globEager('./pages/**/!(*.test.[jt]sx)*.([jt]sx)')
  return (
    <BrowserRouter>
      <Routes pages={pages} />
    </BrowserRouter>
  );
}

export default App;
