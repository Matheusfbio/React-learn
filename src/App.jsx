import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { UseState } from './components/hooks/UseState';
import { UseEffect } from './components/hooks/UseEffect';
import UseRef from './components/hooks/useRef';
import UseForms from './components/hooks/useForms';
import UseCallback from './components/hooks/UseCallback';
import UseMemo from './components/hooks/UseMemo';
import UseReducer from './components/hooks/useReducer';
import UserPage from "./features/users/pages/UserPage"

function Home() {
  const { theme } = useTheme();
  return (
    <div style={{ color: theme.text }}>
      <h2>Bem-vindo ao Dashboard de Hooks</h2>
      <p>Selecione um hook no menu para ver o exemplo</p>
    </div>
  );
}

function Dashboard() {
  const { isDark, toggleTheme, theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: theme.bg,
        color: theme.text,
        transition: 'all 0.3s ease'
      }}>
        {/* Sidebar */}
        <nav style={{
          width: sidebarOpen ? '250px' : '60px',
          backgroundColor: theme.sidebar,
          padding: '20px',
          borderRight: `1px solid ${theme.border}`,
          transition: 'width 0.3s ease',
          overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                color: theme.text,
                marginRight: sidebarOpen ? '10px' : '0'
              }}
            >
              {sidebarOpen ? '◀' : '▶'}
            </button>
            {sidebarOpen && <h1 style={{ margin: 0, fontSize: '18px' }}>React Hooks</h1>}
          </div>

          {sidebarOpen && (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: theme.text }}>🏠 Home</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/usestate" style={{ textDecoration: 'none', color: theme.text }}>📊 useState</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/useeffect" style={{ textDecoration: 'none', color: theme.text }}>⚡ useEffect</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/useref" style={{ textDecoration: 'none', color: theme.text }}>🎯 useRef</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/useforms" style={{ textDecoration: 'none', color: theme.text }}>📝 useForms</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/usecallback" style={{ textDecoration: 'none', color: theme.text }}>🔄 useCallback</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/usecallbackTeste" style={{ textDecoration: 'none', color: theme.text }}>🔄 useCallback exemplo</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/usememo" style={{ textDecoration: 'none', color: theme.text }}>💾 useMemo</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/usereducer" style={{ textDecoration: 'none', color: theme.text }}>🔧 useReducer</Link>
              </li>
            </ul>
          )}
        </nav>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '20px' }}>
          {/* Header with theme toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '20px',
            borderBottom: `1px solid ${theme.border}`,
            paddingBottom: '10px'
          }}>
            <button
              onClick={() => toggleTheme()}
              style={{
                background: theme.sidebar,
                border: `1px solid ${theme.border}`,
                color: theme.text,
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {isDark ? '☀️ Claro' : '🌙 Escuro'}
            </button>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usestate" element={<UseState />} />
            <Route path="/useeffect" element={<UseEffect />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/useforms" element={<UseForms />} />
            <Route path="/usecallback" element={<UseCallback />} />
            <Route path="/usecallbackTeste" element={<UserPage />} />
            <Route path="/usememo" element={<UseMemo />} />
            <Route path="/usereducer" element={<UseReducer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
