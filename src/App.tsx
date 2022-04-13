import { Routes, Route } from "react-router-dom"

//pages
import { Portfolio } from "./pages/Portfolio";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Header } from "./components/header";

function App()
{
  return (
    <>
    <Header />
      <Home />
    </>
  )
}

export default App
