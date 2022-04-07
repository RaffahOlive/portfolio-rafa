import { Routes, Route } from "react-router-dom"

import './App.scss';
import { Portfolio } from "./pages/Portfolio/index";
import { AppMain } from "./pages/Main";
import { Contato } from "./pages/Contato";

import { AppHeader } from "./components/Header"



function App()
{
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={ <AppMain /> } />
        <Route path="portfolio" element={ <Portfolio /> } />
        <Route path="contato" element={ <Contato /> } />
      </Routes>

    </>

  )
}

export default App
