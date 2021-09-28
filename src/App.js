import React from 'react'
import './App.css'
import { Active } from './components/active/inedx';
import {Carousel} from './components/carousel/index'
import { Commits } from './components/commits';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import {Works} from './components/works'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Works />
      <Active />
      <Carousel />
      <Commits />
      <Footer />
    </div>
  );
}

export default App