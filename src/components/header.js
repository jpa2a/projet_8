
import {NavLink} from 'react-router-dom';

export function Header(){
    return <>
        <header>
            <img src='../images/logo/LOGO.svg' alt='Logo'/>
            <nav>
                <NavLink to='/' className='navBtn'>Acceuil</NavLink>
                <NavLink to='/apropos' className='navBtn'>A propos</NavLink>
            </nav>
        </header>
     
        </>
  }