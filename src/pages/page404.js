import {  NavLink } from 'react-router-dom';


export function Page404(){
    return <>
        <div className="page404">
            <h1>404</h1>
            <p>Oups! La page que vous avez demandez n'existe pas.</p>
        </div>
        <NavLink to='/' className="page404__link">Retourner sur la page d'acceuil</NavLink>
     
    </>
  }