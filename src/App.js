import React from 'react';
import './App.css';
import db from "./db.json"
import schema from './schema';
import Table from './Table';

function App() {
  return (
    <div className="container p-2">
      <div className="row">
        <div className="col">
          <Table headers={Object.keys(schema)} rows={db} />
        </div>    
      </div>
    </div>
  );
}

export default App;
