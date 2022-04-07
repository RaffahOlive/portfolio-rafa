import './style.scss';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Header()
{
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="portfolio">Portfólio</Link></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#"><FaLinkedin /></a></li>
                    <li><a href="#"><FaGithub /></a></li>
                </ul>
            </nav>
        </header>
    )
}