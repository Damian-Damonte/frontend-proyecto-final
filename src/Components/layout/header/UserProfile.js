import React from 'react'
import { ReactComponent as BtnCloseSesion } from "../../../img/cross-black.svg";

export default function UserProfile({user, handleCerrarSesion}) {

  const firstNameLetter = user.firstName.charAt(0).toUpperCase();
  const lastNameLetter = user.lastName.charAt(0).toUpperCase();
  return (
    <div className='profile-container'>
      <BtnCloseSesion className='close-profile-desk' onClick={handleCerrarSesion} />
      <div className='profile-icon-container'>
        <span className='profile-letters'>{`${firstNameLetter}${lastNameLetter}`}</span>
      </div>
      <div className='profile-name-container'>
        <p>Hola,</p>
        <p className='profile-name'>{user.firstName} {user.lastName}</p>
      </div>
    </div>
  )
}
