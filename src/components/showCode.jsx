import { useState, useRef } from "react";
import "../styles/ShowCode.scss";

function ShowCode({ code, setShowC }) {
  const codeRef = useRef(null);
  const [clickCopy, setClickCopy] = useState(false);

  const handleCopy = () => {
    // Copia el texto del código directamente desde la prop 'code'
    navigator.clipboard.writeText(code);
    setClickCopy(true);
    setTimeout(() => setClickCopy(false), 2000);
  };

  const handleClose = () => {
    setShowC(false);
  };

  return (
    <div className="copyDiv">
      <button className="buttonCopy" onClick={handleCopy}>
        {clickCopy ? "✔️" : "Copiar"}
      </button>
      <button className="buttonClose" onClick={handleClose}>
        ❌
      </button>
      <pre ref={codeRef}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default ShowCode;
