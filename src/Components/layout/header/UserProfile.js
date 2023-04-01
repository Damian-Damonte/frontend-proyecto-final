import React, { useState } from "react";
import { ReactComponent as BtnCloseSesion } from "../../../img/cross-black.svg";
import {
  ProfileIcon,
  ProfileNameContainer,
  UserProfileContainer,
} from "./styledHeader";

export default function UserProfile({ user, handleCerrarSesion }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!setShowMenu);
  };

  const firstNameLetter = user.firstName.charAt(0).toUpperCase();
  const lastNameLetter = user.lastName.charAt(0).toUpperCase();

  return (
    <UserProfileContainer onClick={handleShowMenu}>
      <BtnCloseSesion onClick={handleCerrarSesion} />
      <ProfileIcon>{firstNameLetter + lastNameLetter}</ProfileIcon>
      <ProfileNameContainer>
        <p>Hola,</p>
        <p>
          {user.firstName} {user.lastName}
        </p>
      </ProfileNameContainer>
    </UserProfileContainer>
  );
}
