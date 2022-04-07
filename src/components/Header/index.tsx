import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Header, Nav } from './style';

export function AppHeader()
{
    return (
        <Header>
            <Nav>
                <Link to="/">Rafael Ribeiro</Link>
                <div className='mobile-menu'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                </div>
                <ul>
                    <li><Link to="portfolio">Portfólio</Link></li>
                    <li><Link to="contato">Contato</Link></li>
                </ul>
                <ul>
                    <a href="https://linkedin.com/in/rafaelribeirodev"><FaLinkedin /></a>
                    <a href="https://github.com/RaffahOlive/"><FaGithub /></a>
                </ul>

            </Nav>
        </Header>
    )
}