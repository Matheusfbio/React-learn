import ThemeContextProvider from "./components/hooks/context/theme-context";
import { UseState } from "./components/hooks/UseState";

function App() {
  return (
    <>
      <ThemeContextProvider>
        {/* <UserPage /> */}
        <UseState/>
      </ThemeContextProvider>
    </>
  );
}

export default App;
