import React from 'react'
import UserProfile from './UserProfile';

export default function HeaderOptionsDesk({navigateSingin, navigateLogin, user, urlPath,handleCerrarSesion}) {

  const headerOptions = (urlPath, user) => {
    if (urlPath === "/registro")
      return <button className='btn-login' onClick={navigateLogin}>Iniciar sesión</button>;
    if(urlPath === "/iniciar-sesion")
      return <button className='btn-login' onClick={navigateSingin}>Crear Cuenta</button>
    
    if(user === null){
      return (
        <>
        <button className='btn-login' onClick={navigateSingin}>Crear Cuenta</button>
        <button className='btn-login' onClick={navigateLogin}>Iniciar sesión</button>
        </>
      )
    } else {
      return <UserProfile user={user} handleCerrarSesion={handleCerrarSesion}/>
    }

  }

  return (
    <div className='header-options-desk'>
        {headerOptions(urlPath, user)}
      {/* <button className='btn-login' onClick={navigateSingin}>Crear Cuenta</button>
      <button className='btn-login' onClick={navigateLogin}>Iniciar sesión</button> */}
    </div>
  )
}
