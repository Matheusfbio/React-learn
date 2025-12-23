import { useRef } from "react";

export default function Ref() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleFocus} className="ml-3 hover:bg-blue-400 rounded-md p-2">Focar</button>
    </div>
  );
}
