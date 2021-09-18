import React from 'react'
import './App.css'
import { Header } from './components/header';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
