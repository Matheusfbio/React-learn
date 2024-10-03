import { useState, useEffect, useRef } from "react";
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

export function UseRef() {
  const [name, setName] = useState("");

  const inputRef = useRef();
  const previousName = useRef();

  const focusInputRef = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    previousName.current = name;
  }, [name]);
  return (
    <div>
      <input
        className="bg-black"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>welcome {name}</p>
      <p>My previous name is {previousName.current}</p>
      <button onClick={focusInputRef} type="button">
        Focus input
      </button>
    </div>
  );
}
