import { useState } from "react";
import "../styles/Contador.scss";
import BotonCode from "./botoncode";
import ShowCode from "./showCode";

function Contador() {
  const [showC, setShowC] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrease = () => count > 0 && setCount(count - 1);
  const reset = () => setCount(0);


  const contadorCode = `
  import { useState } from "react";
  import "../styles/Contador.scss";
  import BotonCode from "./botoncode";
  import ShowCode from "./showCode";
  
  function Contador() {
    const [showC, setShowC] = useState(false);
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrease = () => count > 0 && setCount(count - 1);
    const reset = () => setCount(0);
  
    return (
      <div className="main">
        <BotonCode showC={showC} setShowC={setShowC} />
        <div className="container_contador">
          <h1>Contador React</h1>
          <h2>{count}</h2>
          <div className="buttons">
            <button className="increment" onClick={increment}>+</button>
            <button className="decrease" onClick={decrease}>-</button>
            <button className="reset" onClick={reset}>
              <img width={15} src="src/assets/2618245.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contador;
    `;

  return (
    <div className="main">
      {/* boton "Mostrar Codigo" */}
      <BotonCode showC={showC} setShowC={setShowC} />

      {/* {Contador} */}
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

      {/* Mostrar ShowCode*/}
      {showC && <ShowCode setShowC={setShowC} code={contadorCode} />}
    </div>
  );
}

export default Contador;
