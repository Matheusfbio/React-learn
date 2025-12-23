import { createContext, useContext } from "react";
import Ref from "./ref";

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
      <Ref />
      <Header />
      <Footer />
    </UserContext.Provider>
  );
}
