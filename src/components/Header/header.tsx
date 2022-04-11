import { Link } from "react-router-dom";

//icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HeaderNav, IconsDiv, LinksDiv, MainDiv } from "./HeaderStyles";


export function Header(){
    return(
        <HeaderNav>
        <MainDiv>
            <Link to="/">Rafael Ribeiro</Link>
        </MainDiv>

        <LinksDiv>
            <Link to="portfolio">Portfolio</Link>
            <Link to="contato">Contato</Link>
        </LinksDiv>

        <IconsDiv>
            <a href="https://linkedin.com/in/rafaelribeirodev"><FaLinkedin /></a>
            <a href="https://github.com/RaffahOlive/"><FaGithub /></a>
        </IconsDiv>

        </HeaderNav>
    );
}