import Message from "./components/hooks/context/Messager";
import ThemeContextProvider from "./components/hooks/context/theme-context";
import UseMemoFunction from "./components/hooks/UseMemo";
import UseMemo from "./components/hooks/UseMemo";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Message />
      </ThemeContextProvider>
      <UseMemoFunction />
    </>
  );
}

export default App;
