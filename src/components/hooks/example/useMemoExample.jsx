import { useMemo, useState } from "react";

export default function UseMemoExample() {
  const [number, setNumber] = useState(1);

  const result = useMemo(() => {
    console.log("Calculando...");
    return number * 1000;
  }, [number])

  return (
    <div>
      <p>Resultado: {result}</p>
      <button onClick={() => setNumber(number + 1)}>Calcular</button>
    </div>
  );
}