import { useState } from "react";

export function UseState({ nameComponent }: { nameComponent: string }) {
  const [counter, setCounter] = useState(0);

  //My logic initial
  // if (counter < 0) setCounter(0);

  // if (counter === 11) {
  //   alert("Limite atingido");
  //   setCounter(0);
  //   return;
  // }

  // if (counter === -1) {
  //   alert("Contador não pode ser negativo");
  //   setCounter(0);
  //   return;
  // }

  //Refactory as IA
  function handleIncrement() {
    if (counter === 10) {
      alert("Limite atingido");
      setCounter(0);
      return;
    }
    setCounter(counter + 1);
  }

  function handleDecrement() {
    if (counter === 0) {
      alert("Contador não pode ser negativo");
      setCounter(0);
      return;
    }
    setCounter(counter - 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <>
      <div>
        <h1 className="p-4 flex">{nameComponent}</h1>
      </div>

      <div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <h1>{counter}</h1>
      </div>
    </>
  );
}
