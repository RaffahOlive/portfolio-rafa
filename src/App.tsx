import { Routes, Route } from "react-router-dom"

import './App.scss';
import { Portfolio } from "./pages/Portfolio/portfolio";
import { Main } from "./pages/Main";

import { Header } from "./components/Header"


function App()
{
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="portfolio" element={ <Portfolio /> } />
      </Routes>

    </>

  )
}

export default App
