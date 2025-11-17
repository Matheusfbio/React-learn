import { useEffect, useState } from "react";

export function UseEffect() {
  const [time, setTime] = useState(new Date());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 5) return;
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);

  //Refactory as IA
  function handleIncrement() {
    if (counter === 10) {
      alert("Limite atingido");
      setCounter(0);
      return;
    }
    setCounter((prev) => prev + 1);
  }

  function handleDecrement() {
    if (counter === 0) {
      alert("Contador não pode ser negativo");
      setCounter(0);
      return;
    }
    setCounter((prev) => prev - 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <>
      <h1>UseEffect</h1>

      <div className="ml-12">
        <h1>clock: {time.toLocaleTimeString()}</h1>
        <h1>counter {counter}</h1>
        <div>
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleDecrement}>-1</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

// const UseEffect = () => {
//   const [items, setItems] = useState([]);
//   const [resourceType, setResourceType] = useState("Posts");

//   useEffect(() => {
//     const FetchResourceTypes = async () => {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/${resourceType}`
//       );
//       const responseJson = await response.json();
//       setItems(responseJson);
//       console.log(responseJson);
//     };
//     FetchResourceTypes();
//   }, [resourceType]);

//   const changeResourceType = (resourceType) => {
//     setResourceType(resourceType);
//   };
//   return (
//     <div>
//       <h1>{resourceType}</h1>
//       <div>
//         <button
//           className="flex-1  px-3 flex-row border-3 border-black rounded-full justify-between"
//           onClick={() => changeResourceType("posts")}
//         >
//           Posts
//         </button>
//         <button
//           className="flex-1  px-3 flex-row border-3 border-black rounded-full justify-between"
//           onClick={() => changeResourceType("comments")}
//         >
//           Comments
//         </button>
//         <button
//           className="flex-1  px-3 flex-row border-3 border-black rounded-full justify-between"
//           onClick={() => changeResourceType("todos")}
//         >
//           Todos
//         </button>
//       </div>
//       {items.map((item) => (
//         <>
//           <div className="bg-red-500">
//             <p>{item.id}</p>
//             <p>{item.title}</p>
//             <p>{item.name}</p>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };

// export default UseEffect;
