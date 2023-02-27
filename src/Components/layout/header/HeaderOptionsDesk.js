import React from 'react'
import { HeaderOptionsDesktop } from './styledHeader';
import UserProfile from './UserProfile';

export default function HeaderOptionsDesk({navigateSingin, navigateLogin, user, urlPath,handleCerrarSesion}) {

  const headerOptions = (urlPath, user) => {
    const login = <button onClick={navigateLogin}>Iniciar sesión</button>;
    const singin = <button onClick={navigateSingin}>Crear Cuenta</button>;

    if (urlPath === "/registro" || urlPath === "/iniciar-sesion")
      return urlPath === "/registro" ? login : singin;
    
    if(user === null)
      return <> {singin} {login} </>;
    else 
      return <UserProfile user={user} handleCerrarSesion={handleCerrarSesion}/>;
  }

  return (
    <HeaderOptionsDesktop>
        {headerOptions(urlPath, user)}
    </HeaderOptionsDesktop>
  )
}
