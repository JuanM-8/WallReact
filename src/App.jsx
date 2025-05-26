import { useState } from "react";
import Header from "./components/header";
import Contador from "./components/contador";
import Soon from "./components/Soon";



import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="main_container">
        <Contador />
        <Soon />
        <Soon />

        <Soon />
        <Soon />
        <Soon />
        <Soon />
        <Soon />
      

      </div>
    </>
  );
}

export default App;
