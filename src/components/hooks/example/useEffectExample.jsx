import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("The component was updated for:", count);
  }, [count])


  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Aumentar
      </button>
    </div>
  );
}  