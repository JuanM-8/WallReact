import { useState } from "react";
import React, { useRef } from "react";
import "../styles/Contador.scss";
function Contador() {
  const codeRef = useRef(null);
  const handleCopy = () => {
    const codeText = codeRef.current.innerText;
    navigator.clipboard.writeText(codeText);
  };

  const[showFirst, setShowFirst] = useState(true);
  const manejarClick = () => {
    setShowFirst(!showFirst);
  };
  

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
      <div className="main">
        <button className="code" onClick={manejarClick}>Code</button>
        {showFirst ? (
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
                <img width={15} src="src/assets/2618245.png" alt="" />
              </button>
            </div>
          </div>
        ) : (
          <div className="copyDiv">
            <button className="buttonCopy" onClick={handleCopy}>
              Copiar
            </button>
            <pre ref={codeRef}>
              <code>
                {`.parent {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: repeat(5, 1fr);
}`}
              </code>
            </pre>
          </div>
        )}
      </div>
    </>
  );
}

export default Contador;
