import ThemeContextProvider from "./components/hooks/context/theme-context";
import { UseEffect } from "./components/hooks/UseEffect";
function App() {
  return (
    <>
      <ThemeContextProvider>
        {/* <UserPage /> */}
        {/* <UseState/> */}
        <UseEffect />
      </ThemeContextProvider>
    </>
  );
}

export default App;
