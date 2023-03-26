import React from 'react';
import { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState(null);

useEffect(() => {
    const fetchData = async() =>{
      try {
        const res = await fetch('http://localhost:5500/');
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
console.log(data)

if (!data) {
  return <div>Loading...</div>;
}

  return (
    <div> {data.name} {data.action} </div>
  )
}

export default App