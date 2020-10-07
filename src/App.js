import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import RecommendedVideos from './components/RecommendVideos/RecommendedVideos';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
