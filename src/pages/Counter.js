import { useState } from 'react';
import '../styles/counter.scss'
const Counter = () => {
    const [count, setCount] = useState(0);
  
    const handleClickPlus = () => {
      setCount(count + 1)
    }
    const handleClickMinus = () => {
     if (count !== 0 && count > 0) {
      setCount(count - 1)
     }
    }
    return ( 
  

 
     <div className="Counter">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={handleClickMinus}>- Минус</button>
        <button className="plus" onClick={handleClickPlus}>Плюс +</button>
      </div>
    </div>

  );
 }


 
export default Counter;