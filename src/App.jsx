import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [counter, setCounter] = useState(0); // Estado del contador

  if (counter < 0) {
    alert("No puedes decrementar más");
    setCounter(0);
    return; // Este return es para que no se siga ejecutando el render.
  }

  const aumentar = () => {
    // Función para aumentar el contador
    setCounter(counter + 1);
  };

  const decrementar = () => {
    // Función para decrementar el contador
    setCounter(counter - 1);
  };

  const reset = () => {
    // Función para resetear el contador
    setCounter(0);
  };

  return (
    /*
    <div className="flex h-screen justify-center items-center">
      <Card />
    </div>
    */

    <section className="bg-gray-900 h-screen text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl">CONTADOR</h1>
      <div className="text-center flex gap-3 p-7 items-center">
        <Button title="Decrementar" onClick={decrementar} />
        <p className="text-3xl">{counter}</p>
        <Button title="Aumentar" onClick={aumentar} />
      </div>
      <Button title="Resetear" onClick={reset} />
    </section>
  );
}

export default App;
