// src/App.js
import React, { useState } from 'react';
import { db } from './firebase';
import { CSVLink } from 'react-csv';
import Papa from 'papaparse';
import { collection, getDocs } from 'firebase/firestore';
import './App.css'
const App = () => {
  const [data, setData] = useState([]);
  const [csvData, setCsvData] = useState('');

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const dataList = querySnapshot.docs.map(doc => doc.data());
    setData(dataList);

    const csv = Papa.unparse(dataList);
    setCsvData(csv);
  };

  return (
    <div className="App">
      <h1>Firestore to CSV <br></br> (Sci-Fi Innovation Club Membership Form)</h1>
      <button type='button' className='btn'onClick={fetchData}>Fetch Data</button>
      {data.length > 0 && (
        <CSVLink data={csvData} filename={"firestore-data.csv"}>
          Download CSV
        </CSVLink>
      )}
    </div>
  );
};

export default App;
