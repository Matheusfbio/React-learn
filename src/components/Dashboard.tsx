import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const hooks = [
    {
      name: "useState",
      path: "/usestate",
      description: "Gerenciamento de estado local",
    },
    {
      name: "useEffect",
      path: "/useeffect",
      description: "Efeitos colaterais e ciclo de vida",
    },
    {
      name: "useRef",
      path: "/useref",
      description: "Referências a elementos DOM",
    },
    {
      name: "useForms",
      path: "/useforms",
      description: "Formulários com validação",
    },
    {
      name: "useCallback",
      path: "/usecallback",
      description: "Memoização de funções",
    },
    { name: "useMemo", path: "/usememo", description: "Memoização de valores" },
    {
      name: "useReducer",
      path: "/usereducer",
      description: "Estado complexo com reducer",
    },
    {
      name: "Lab",
      path: "/lab",
      description: "Laboratorio",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      <nav
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "1rem",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            textDecoration: "none",
            color: "#111827",
          }}
        >
          React Hooks Dashboard
        </Link>
      </nav>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.5rem",
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <div style={{ width: "300px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              padding: "1.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                marginBottom: "1rem",
              }}
            >
              Hooks Disponíveis
            </h3>
            <nav>
              {hooks.map((hook) => (
                <Link
                  key={hook.path}
                  to={hook.path}
                  style={{
                    display: "block",
                    padding: "0.75rem",
                    marginBottom: "0.5rem",
                    borderRadius: "0.375rem",
                    textDecoration: "none",
                    color: "#374151",
                    backgroundColor: "#f9fafb",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>{hook.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                    {hook.description}
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              padding: "1.5rem",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
