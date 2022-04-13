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
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/portfolio" element={ <Portfolio /> } />
        <Route path="/contato" element={ <Contato /> } />
      </Routes>
    </>
  )
}

export default App
