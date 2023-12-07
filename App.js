// src/App.js
import React from 'react';
import './App.css';
import NewsSegment from './components/News-Segment';
import JournalSegment from './components/JournalSegment';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home Page</h1>
      </header>
      <main>
        <div className="segment-container">
          <NewsSegment />
        </div>
        <div className="segment-container">
          <JournalSegment />
        </div>
      </main>
    </div>
  );
}

export default App;
