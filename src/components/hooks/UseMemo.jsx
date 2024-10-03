import { useState, useMemo } from "react";

export default function UseMemoFunction() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  // eslint-disable-next-line no-unused-vars
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setNumber(number + 1)}>+</button>
      <p>text: {text}</p>
    </>
  );
}

const slowFunction = (num) => {
  console.log("Slow Function is being called");
  for (let i = 0; i <= 10000; i++) {
    /* empty */
  }
  return num * 2;
};
