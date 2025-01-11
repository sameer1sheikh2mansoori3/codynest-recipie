import React from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureList from './components/FeatureList';
import Footer from './components/Footer';
import Marketing from './components/Marketing';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Marketing />
      <FeatureList />
      <Footer />
    </div>
  );
}

export default App;
