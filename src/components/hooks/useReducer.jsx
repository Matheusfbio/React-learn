// //Primeiro caso de uso
// import { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//       };
//     default:
//       return state;
//   }
// };

// export const UseReducer = () => {
//   const [state, dispatch] = useReducer(reducer, { counter: 0 });

//   return (
//     <div>
//       <p>{state.counter}</p>
//       <button
//         className="flex-1 border-2 p-10  rounded-lg mp-10"
//         onClick={() => dispatch({ type: "increment" })}
//       >
//         Increment
//       </button>
//       <button
//         className="flex-1 border-2 p-10  rounded-lg"
//         onClick={() => dispatch({ type: "decrement" })}
//       >
//         Dencrement
//       </button>
//     </div>
//   );
// };

//Primeiro caso de uso
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-task":
      return {
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
      };
    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((item, index) =>
          index === action.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-task", payload: inputValue });
          setInputValue("");
        }}
      >
        Add Task
      </button>

      {state.tasks.map((task, index) => (
        <h1
          onClick={() => dispatch({ type: "toggle-task", payload: index })}
          style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
          key={task.name}
        >
          {task.name}
        </h1>
      ))}
    </div>
  );
};

export default UseReducer;
