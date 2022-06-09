import React from 'react';
import './index.css';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [shirts, setShirts] = React.useState([]);


  


  React.useEffect(() => {
    const apiUrl = 'https://62961a4e810c00c1cb6f3657.mockapi.io/items';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setShirts(allPersons);
     });

     


  }, [setShirts]);



  return (
    <div className="wrapper">
      <Routes>
      <Route path="/" element={<Home items={shirts} />} />
      <Route path="/about" element={<About items={shirts} />} />
      </Routes>
     
    </div>
  );
}

export default App;
