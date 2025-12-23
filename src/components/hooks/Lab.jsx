import { createContext, useContext } from "react";
import Ref from "./example/ref";
import UseEffectExample from "./example/useEffectExample";
import UseMemoExample from "./example/useMemoExample";

export const UserContext = createContext();

function Header() {
  const user = useContext(UserContext)
  return <h1>Ola, {user} </h1>

}

function Footer() {
  const user = useContext(UserContext)
  return <h1>Usuario logado: {user}</h1>;
}

export default function Lab() {
  return (
    <UserContext.Provider value="Matheus">
      <p>useMemoExample</p>
      <UseMemoExample />
      <p>useEffectExample</p>
      <UseEffectExample />
      <p>useRef Example</p>
      <Ref />
      <p>useContext Example</p>
      <Header />
      <Footer />
    </UserContext.Provider>
  );
}
