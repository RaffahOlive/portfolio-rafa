import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Header, Li, Nav, Ul } from './style';

export function AppHeader()
{
    return (
        <Header>
            <Nav>
                <Ul>
                    <Li><Link to="/">Home</Link></Li>
                    <Li><Link to="portfolio">Portfólio</Link></Li>
                    <Li><a href="#">Contato</a></Li>
                    <Li><a href="#"><FaLinkedin /></a></Li>
                    <Li><a href="#"><FaGithub /></a></Li>
                </Ul>
            </Nav>
        </Header>
    )
}