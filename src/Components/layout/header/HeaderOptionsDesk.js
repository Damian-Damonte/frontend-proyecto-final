import React from "react";
import {
  AdminContainer,
  HeaderOptionsDesktop,
  LineaDivisoria,
  UserProfileContainerDesktop,
} from "./styledHeader";
import UserProfile from "./UserProfile";

export default function HeaderOptionsDesk({
  navigateSingin,
  navigateLogin,
  user,
  urlPath,
  isAdmin,
  toAdminPage,
  handleShowDropDown,
}) {
  const headerOptions = (urlPath, user) => {
    const login = <button onClick={navigateLogin}>Iniciar sesión</button>;
    const singin = <button onClick={navigateSingin}>Crear Cuenta</button>;

    if (urlPath === "/registro" || urlPath === "/iniciar-sesion")
      return urlPath === "/registro" ? login : singin;

    if (!user.token)
      return (
        <>
          {singin} {login}
        </>
      );
    else
      return (
        <UserProfileContainerDesktop onClick={handleShowDropDown}>
          <UserProfile user={user} />
        </UserProfileContainerDesktop>
      );
  };

  return (
    <HeaderOptionsDesktop>
      {isAdmin && (
        <>
          <AdminContainer
            onClick={toAdminPage}
          >
            <p>Administración</p>
          </AdminContainer>
          <LineaDivisoria></LineaDivisoria>
        </>
      )}
      {headerOptions(urlPath, user)}
    </HeaderOptionsDesktop>
  );
}
