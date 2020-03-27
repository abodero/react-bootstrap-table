import React, { useState, useEffect }  from 'react';
import './App.css';
import db from "./db.json"
import schema from './schema';
import Table from './Table';

function App() {
  const [ data, setData] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(db);
        }, 2000)
    }).then((result) => {
        setData(result);
    })
  });

  return (
    <div className="container p-2">
      <div className="row">
        <div className="col">
          <Table headers={Object.keys(schema)} rows={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
