import { Routes, Route } from "react-router-dom"
import GlobalStyle from "./globalStyles";

//pages
import { Portfolio } from "./pages/Portfolio";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Header } from "./components/Header/header";



function App()
{
  return (
    <>
    <GlobalStyle />
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
