import { useState, useMemo, useCallback, useRef } from "react";

export default function Performance() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const renders = useRef(0);
  renders.current++;

  // Simulando cálculo pesado
  const expensiveCalculation = useMemo(() => {
    console.log("Rodando cálculo pesado...");
    let total = 0;
    for (let i = 0; i < 50000000; i++) {
      total += i;
    }
    return total + text.length;
  }, [text]);

  // Função estável com useCallback
  const addItem = useCallback(() => {
    setItems((prev) => [...prev, text]);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Exercício 4 — useMemo + useCallback</h1>

      <h3>Renders: {renders.current}</h3>

      <input
        type="text"
        placeholder="Digite algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addItem}>Adicionar item</button>

      <p>Resultado do cálculo pesado: {expensiveCalculation}</p>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
