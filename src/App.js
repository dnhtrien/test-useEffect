import './App.css';
import './component/component.css';
import { useEffect, useState } from 'react';
//----------------------------------------------
//----------------------------------------------

export default function App() {
  const [color, setColor] = useState('green');

  const [time, setTime] = useState(0);
  const handleReset = () => {
    setTime(0);
    setColor('green');
  };

  const handleStartTime = () => {
    setTime(time + 1);
    setColor('red');
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     handleStartTime();
  //   }, 1000);
  // }, [time]);

  return (
    <div className="App">
      <h1>Vi du UseEffect() Hook</h1>
      <p>{time}</p>
      <div className="button">
        <button type="button" className="inside" style={{ backgroundColor: color, width: '120px', height: ' 30px' }} onClick={handleStartTime}>
          Start
        </button>
      </div>
      <div className="button">
        <button type="button" className="inside" style={{ backgroundColor: '#FFE4E1', width: '120px', height: ' 30px' }} onClick={handleReset}>
          Reset
        </button>
      </div>
      <h1>Cau hoi truyen len</h1>
    </div>
  );
}
