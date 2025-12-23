Perfeito. Agora vamos **botar a mão na massa**, do jeito certo:
exercícios **progressivos**, simples, **com cara de vida real**, pensados pra ensinar até quem nunca foi técnico.
Nada acadêmico. Isso aqui é **treinamento de chão de fábrica**.

👉 **Regra dos exercícios**

- Sempre **1 hook por vez**
- Um objetivo claro
- Dá pra mostrar rodando no navegador
- A pessoa entende _por que_ está usando o hook

---

# 🧩 EXERCÍCIO 1 — `useState`

### 🟢 Tema: Contador simples

**Objetivo**
Criar um contador com:

- botão de aumentar
- botão de diminuir
- valor não pode ficar negativo

**O que a pessoa aprende**

> “Quando o valor muda, a tela muda.”

### Regras

- Começa em `0`
- Nunca pode ser menor que `0`

### Template inicial

```jsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Valor: {count}</p>

      <button>Aumentar</button>
      <button>Diminuir</button>
    </div>
  );
}
```

---

# 🧩 EXERCÍCIO 2 — `useEffect`

### 🟢 Tema: Aviso quando o valor muda

**Objetivo**
Mostrar uma mensagem no console sempre que o contador mudar.

**O que aprende**

> “React reage a mudanças.”

### Regras

- O efeito só roda quando o valor mudar
- Não roda infinitamente

### Template inicial

```jsx
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  );
}
```

---

# 🧩 EXERCÍCIO 3 — `useContext`

### 🟢 Tema: Usuário logado

**Objetivo**
Exibir o nome do usuário em dois componentes diferentes.

**O que aprende**

> “Dados globais evitam repetição.”

### Regras

- Criar um `UserContext`
- Usar o mesmo nome em mais de um componente

### Template inicial

```jsx
import { createContext } from "react";

export const UserContext = createContext();

function Header() {
  return <h1>Header</h1>;
}

function Footer() {
  return <p>Footer</p>;
}

export default function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
```

---

# 🧩 EXERCÍCIO 4 — `useRef`

### 🟢 Tema: Foco automático no input

**Objetivo**
Ao clicar no botão, o cursor vai direto para o input.

**O que aprende**

> “Referência direta ao elemento.”

### Regras

- Não usar `document.querySelector`
- Usar `useRef`

### Template inicial

```jsx
import { useRef } from "react";

export default function App() {
  return (
    <div>
      <input />
      <button>Focar</button>
    </div>
  );
}
```

---

# 🧩 EXERCÍCIO 5 — `useMemo`

### 🟢 Tema: Cálculo pesado

**Objetivo**
Simular um cálculo pesado que só roda quando o número mudar.

**O que aprende**

> “Evitar trabalho desnecessário.”

### Regras

- Usar `useMemo`
- Mostrar no console quando recalcular

### Template inicial

```jsx
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <p>Número: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Calcular</button>
    </div>
  );
}
```

---

# 🧩 EXERCÍCIO 6 — `useCallback`

### 🟢 Tema: Função estável

**Objetivo**
Criar uma função de incrementar que não muda a cada render.

**O que aprende**

> “Funções também precisam de estabilidade.”

### Regras

- Usar `useCallback`
- Usar atualização com valor anterior

### Template inicial

```jsx
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button>Aumentar</button>
    </div>
  );
}
```

---

# 🧩 EXERCÍCIO 7 — `useReducer`

### 🟢 Tema: Contador organizado por ações

**Objetivo**
Controlar o contador usando ações.

**O que aprende**

> “Ações claras → mudanças previsíveis.”

### Regras

- Criar um reducer
- Usar `dispatch`

### Template inicial

```jsx
export default function App() {
  return (
    <div>
      <p>0</p>
      <button>Aumentar</button>
      <button>Diminuir</button>
    </div>
  );
}
```

---

# 🧩 EXERCÍCIO FINAL — COMBINAÇÃO

### 🟢 Tema: Mini app de perfil

**Objetivo**
Criar uma tela que tenha:

- nome do usuário (`useContext`)
- contador de cliques (`useState`)
- log quando clicar (`useEffect`)
- botão que foca input (`useRef`)

**Aprendizado**

> React não é magia. É composição.

---

## Como aplicar isso didaticamente

- Um exercício por aula
- Sempre rodando no navegador
- Mostrar antes e depois
- Perguntar: **“o que mudou na tela?”**

Se quiser, no próximo passo eu:

- resolvo **todos os exercícios**
- crio **versões comentadas**
- monto um **desafio final estilo teste técnico**
- ou transformo isso num **curso fechado passo a passo**

Isso aqui já é conteúdo de treinamento pago.
