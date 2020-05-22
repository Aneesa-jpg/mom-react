import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [advice, setAdvice] = useState('');

  useEffect(() => {
    console.log('useEffect');
    getAdvice();
  }, [])

  async function getAdvice(){
    try {
     const res = await axios.get('https://api.adviceslip.com/advice');
     console.log(res.data.slip.advice);
     const advice = res.data.slip.advice;
     setAdvice(advice);
     

    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className = "app">
      <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={getAdvice}><span>Mom!</span></button>
      </div>     
    </div>
  );
}

export default App;
