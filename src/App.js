import React from 'react'
import './App.css'
import {Carousel} from './components/carousel/index'
import { Commits } from './components/commits';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Carousel />
      <Commits />
      <Footer />
    </div>
  );
}

export default App;
