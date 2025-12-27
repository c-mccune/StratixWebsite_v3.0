import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LogoWall from './components/LogoWall';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <LogoWall />
      <Footer />
    </div>
  );
}

export default App;
