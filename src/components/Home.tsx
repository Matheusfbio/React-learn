export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Bem-vindo ao React Hooks Dashboard
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem' }}>
        Selecione um hook no menu lateral para ver os exemplos práticos
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        <div style={{ backgroundColor: '#eff6ff', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e3a8a', marginBottom: '0.5rem' }}>
            Hooks Básicos
          </h3>
          <p style={{ color: '#1d4ed8' }}>
            useState, useEffect, useRef - Os fundamentos do React
          </p>
        </div>
        <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#14532d', marginBottom: '0.5rem' }}>
            Hooks Avançados
          </h3>
          <p style={{ color: '#15803d' }}>
            useCallback, useMemo, useReducer - Otimização e estado complexo
          </p>
        </div>
      </div>
    </div>
  );
}