import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import RoomImage from './RoomImage';

function App() {
  function getPage() {
    const route = window.location.pathname;
    if(route == '/about') return <AboutPage />;
    return <HomePage/>;
  }
  return (
    <div className="container-fluid">
      <Header/>
      { getPage() }
      <RoomImage />
    </div>
  );
}

export default App;
