import React from 'react';
import './App.css';
import db from "./db.json"
import Table from './Table';

function App() {
  return (
    <div className="App">
      { db.map((item, key) =>
        <li key={item.id}>{item.name}</li>
      )}
    </div>
  );
}

export default App;
