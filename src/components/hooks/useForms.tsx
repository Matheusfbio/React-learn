import { useRef, useState } from "react";

export default function useForms() {
  const formRef = useRef<{
    name: HTMLInputElement | null;
    email: HTMLInputElement | null;
    password: HTMLInputElement | null;
  }>({
    name: null,
    email: null,
    password: null,
  });

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
  } | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const name = formRef.current.name?.value.trim() || "";
    const email = formRef.current.email?.value.trim() || "";
    const password = formRef.current.password?.value.trim() || "";

    if (name.length < 3) {
      setError("precisa pelo menos de 3 caracteres");
      return;
    }
    if (password.length < 6) {
      setError("precisa pelo menos de 6 caracteres");
      return;
    }

    if (!email.includes("@")) {
      setError("Precisa conter o @ no campo email");
      return;
    }

    setError("");
    setFormData({ name, email, password });
    alert("enviado com sucesso");
  }

  return (
    <>
      {}
      <form
        onSubmit={handleSubmit}
        className="flex space-y-2 flex-col items-center"
      >
        <input
          ref={(el) => (formRef.current.name = el)}
          type="text"
          placeholder="Name"
        />
        <input
          ref={(el) => (formRef.current.email = el)}
          type="email"
          placeholder="Email"
        />
        <input
          ref={(el) => (formRef.current.password = el)}
          type="password"
          placeholder="Senha"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-green-600 px-20 rounded-lg"
        >
          Send
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* render the current input values instead of the DOM nodes */}
        {/* <p>{formRef.current.name?.value}</p>
        <p>{formRef.current.email?.value}</p>
        <p>{formRef.current.password?.value}</p> */}
        {formData && (
          <>
            <p>{formData.name}</p>
            <p>{formData.email}</p>
            <p>{formData.password}</p>
          </>
        )}
      </form>
    </>
  );
}
