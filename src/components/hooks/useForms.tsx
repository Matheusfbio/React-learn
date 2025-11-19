import { useRef, useState } from "react";

export default function useForms() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const name = nameRef.current?.value.trim() || "";
    const email = emailRef.current?.value.trim() || "";

    if (name.length < 3) {
      setError("precisa pelo menos de 3 caracteres");
      return;
    }

    if (!email.includes("@")) {
      setError("Precisa conter o @ no campo email");
      return;
    }

    setError("");
    alert("enviado com sucesso");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Name" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Send</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
