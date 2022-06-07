import React from 'react';
import './index.css';
import { Main, Header, Content, Footer } from './components';
import axios from 'axios';

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
      <Header items={shirts}></Header>
      {/* <Main></Main> */}
      {/* <Content items={shirts}></Content> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
