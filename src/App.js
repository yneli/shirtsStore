import React from 'react';
import './index.css';
import { Main, Header, Content, Footer } from './components';
import axios from 'axios';

function App() {
  const [shirts, setShirts] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setShirts(data.shirts);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header></Header>
      <Main></Main>
      <Content items={shirts}></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
