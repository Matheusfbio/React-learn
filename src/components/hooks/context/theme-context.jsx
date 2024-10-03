import { useState, createContext } from "react";

/**
 * Description placeholder
 *
 * @type {*}
 */
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

/**
 * Description placeholder
 *
 * @param {{ children: any; }} param0
 * @param {*} param0.children
 * @returns {*}
 */

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    }

    return setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
