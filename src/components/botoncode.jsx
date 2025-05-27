import "../styles/BotonCode.scss"


function BotonCode({ showC, setShowC }) {
  const manejarClick = () => {
    setShowC(!showC);
    
  };

  return (
    <>
      {!showC && (
        <button className="code" onClick={manejarClick}>
          Mostrar código
        </button>
      )}
    </>
  );
}

export default BotonCode;
