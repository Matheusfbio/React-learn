import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const [value, setValue] = useState("");

  // 1. Referência do input
  const inputRef = useRef(null);

  // 2. Guardar quantas vezes o componente renderizou (não causa re-render)
  const renderCount = useRef(1);

  // 3. Atualizar o contador de renders
  useEffect(() => {
    renderCount.current += 1;
  });

  // 4. Focar automaticamente no primeiro render
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleFocusInput() {
    inputRef.current.focus();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Exercício useRef</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Digite algo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: 8 }}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={handleFocusInput}>Focar no Input</button>
      </div>

      <h2 style={{ marginTop: 20 }}>
        Renderizações: {renderCount.current}
      </h2>

      <button onClick={() => setValue(value + "!")}>
        Causar Re-render
      </button>
    </div>
  );
}

//estrutura basica
// export function UseRef() {
//   const [name, setName] = useState("");

//   const renders = useRef(0);

//   useEffect(() => {
//     renders.current = renders.current + 1;
//   });

//   return (
//     <div>
//       <input
//         className="bg-black"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>welcome</p>
//       <p>{name}</p>
//       <p>Renders: {renders.current}</p>
//     </div>
//   );
// }

//Uso mais comum
// export function UseRef() {
//   const [name, setName] = useState("");

//   const inputRef = useRef();

//   const focusInputRef = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <div>
//       <input
//         className="bg-black"
//         ref={inputRef}
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>welcome {name}</p>
//       <button onClick={focusInputRef} type="button">
//         Focus input
//       </button>
//     </div>
//   );
// }

//Para guardar  um estado anterior

// export function UseRef() {
//   const [name, setName] = useState("");

//   const inputRef = useRef();
//   const previousName = useRef();

//   const focusInputRef = () => {
//     inputRef.current.focus();
//   };

//   useEffect(() => {
//     previousName.current = name;
//   }, [name]);
//   return (
//     <div>
//       <input
//         className="bg-black"
//         ref={inputRef}
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>welcome {name}</p>
//       <p>My previous name is {previousName.current}</p>
//       <button onClick={focusInputRef} type="button">
//         Focus input
//       </button>
//     </div>
//   );
// }
