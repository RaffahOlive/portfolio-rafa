import { Link } from "react-router-dom";

//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HeaderNav, IconsDiv, MainDiv } from "./HeaderStyles";


export function Header(){
    return(
        <HeaderNav>
        <MainDiv>
            <Link to="/">Home</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="contato">Contato</Link>
        </MainDiv>

        <IconsDiv>
            <a href="https://linkedin.com/in/rafaelribeirodev"><FaLinkedin /></a>
            <a href="https://github.com/RaffahOlive/"><FaGithub /></a>
        </IconsDiv>

        </HeaderNav>
    );
}