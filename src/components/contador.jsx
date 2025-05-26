import { useState } from 'react';
import '../styles/Contador.css'
function Contador() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="container_contador">
        <h1>Contador React</h1>
        <h2>{count}</h2>
        <div className="buttons">
          <button className="increment" onClick={increment}>
            +
          </button>
          <button className="decrease" onClick={decrease}>
            -
          </button>
          <button className="reset" onClick={reset}>
            <img width={15}
              src="src/assets/2618245.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Contador;
