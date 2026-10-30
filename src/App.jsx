import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css';

function App() {
  
  return (
    
    <div className="app-container">
      <Header /> 
      <div className="app-middle">
        <Sidebar />
        <MainContent /> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
