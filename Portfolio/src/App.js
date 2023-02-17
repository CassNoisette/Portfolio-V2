import './App.css';
import React, {useState } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {

  const [currentTab, setCurrentTab] = useState('About');
  
  const renderTab = () => {
    switch(currentTab) {
      case 'About': return <About />;
      case 'Contact': return <Contact />;
      case 'Portfolio': return <Portfolio />;
      case 'Resume': return <Resume />;
      default: return <About />;
    }
  }

  return (
    <div>
      <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
      <div>{renderPage(currentTab)}</div>
      <main> 
      </main>
    <Footer />
    </div>
  );
}

export default App;
