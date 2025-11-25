/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState, useCallback } from "react"

const ThemeProviderContext = createContext()

function getSystemTheme() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [rawTheme, setRawTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  )

  const resolveTheme = useCallback(() => {
    return rawTheme === "system" ? getSystemTheme() : rawTheme
  }, [rawTheme])

  useEffect(() => {
    const root = window.document.documentElement

    const apply = () => {
      const applied = resolveTheme()
      root.classList.toggle("dark", applied === "dark")
      root.classList.toggle("light", applied === "light")
      try {
        root.setAttribute("data-theme", applied)
      } catch (e) {
        // ignore
      }
      console.debug(`[ThemeProvider] applied=${applied} classes=${root.className}`)
    }

    apply()

    // Listen to system changes when using 'system'
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (rawTheme === "system") apply()
    }

    if (mql && mql.addEventListener) mql.addEventListener("change", handleChange)
    else if (mql && mql.addListener) mql.addListener(handleChange)

    return () => {
      if (mql && mql.removeEventListener) mql.removeEventListener("change", handleChange)
      else if (mql && mql.removeListener) mql.removeListener(handleChange)
    }
  }, [rawTheme, resolveTheme])

  const setTheme = (t) => {
    localStorage.setItem(storageKey, t)
    setRawTheme(t)
  }

  const toggleTheme = () => {
    const current = resolveTheme()
    const next = current === "dark" ? "light" : "dark"
    setTheme(next)
  }

  const applied = resolveTheme()

  const theme = {
    bg: "hsl(var(--background))",
    text: "hsl(var(--foreground))",
    sidebar: "hsl(var(--card))",
    border: "hsl(var(--border))",
  }

  const value = {
    theme,
    rawTheme,
    isDark: applied === "dark",
    toggleTheme,
    setTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}