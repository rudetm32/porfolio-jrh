import './index.scss';

import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import LogoS from '../../assets/image/logo.png'
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo'to='/'>
        <img src={LogoS} alt="logo"></img>
        <img className='sub-log' src={LogoS} alt="Slogan"></img>
    </Link>
    <nav>
        <NavLink exact="true"
         activeClassname="active" 
         to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink 
        exact="true" 
        activeClassname="active"  
        className='about-link' 
        to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink> 
        <NavLink 
        exact="true" 
        activeClassname="active"  
        className='contact-link' 
        to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a
                target='_blanck'
                rel='noreferrer'
                href='https://www.linkedin.com/in/juan-antonio-ruiz-hernandez-3566a81b7'
            >
                <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
            </a>
        </li>
        <li>
            <a
                target='_blanck'
                rel='noreferrer'
                href='https://www.github.com/rudetm32'
            >
                <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
            </a>
        </li>
    </ul>
</div>
)
export default Sidebar