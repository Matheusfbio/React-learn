import ThemeContextProvider from "./components/hooks/context/theme-context";
import UserPage from "./features/users/pages/UserPage";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <UserPage />
      </ThemeContextProvider>
    </>
  );
}

export default App;
