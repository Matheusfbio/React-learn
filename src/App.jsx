import ThemeContextProvider from "./components/hooks/context/theme-context";
import UseForms from "./components/hooks/useForms";
function App() {
  return (
    <>
      <ThemeContextProvider>
        {/* <UserPage /> */}
        {/* <UseState/> */}
        {/* <UseEffect /> */}
        {/* <UseRef /> */}
        <UseForms />
      </ThemeContextProvider>
    </>
  );
}

export default App;
