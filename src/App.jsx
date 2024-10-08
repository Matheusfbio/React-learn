import Message from "./components/hooks/context/Messager";
import ThemeContextProvider from "./components/hooks/context/theme-context";
import UseCallback from "./components/hooks/UseCallback";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Message />
        <UseCallback />
      </ThemeContextProvider>
      {/* <UseMemoFunction /> */}
    </>
  );
}

export default App;
