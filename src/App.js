import './App.css';
import './component/component.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [question, setQuestion] = useState('');
  const [stop, setStop] = useState(false);
  const [time, setTime] = useState(0);

  const handleReset = () => {
    setTime(0);
    setStop(!stop);
    setQuestion('');
  };
  const handleClick = () => {
    setStop(!stop);
  };
  useEffect(() => {
    if (time % 5 === 1) {
      fetch('https://catfact.ninja/fact')
        .then((res) => res.json())
        .then((data) => setQuestion(data));
    }
  }, [time]);

  useEffect(() => {
    if (stop === true) {
      const timerId = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [stop]);

  return (
    <div className="App">
      <h1>Vi du UseEffect() Hook</h1>
      <p>{time}</p>
      <div className="button">
        <button type="button" className="inside" style={{ backgroundColor: stop ? 'red' : 'green', width: '120px', height: ' 30px' }} onClick={handleClick}>
          <p>{stop ? 'Stop' : 'Start'}</p>
        </button>
      </div>
      <div className="button">
        <button type="button" className="inside" style={{ backgroundColor: '#FFE4E1', width: '120px', height: ' 30px' }} onClick={handleReset}>
          Reset
        </button>
      </div>
      <h1>{question.fact}</h1>
    </div>
  );
}
