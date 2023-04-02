import React, { useState, useContext } from "react";
import UserContext from "../../../context/user.context";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../img/logo-desk.svg";
import { ReactComponent as BtnMenu } from "../../../img/menu.svg";
import Drawer from "./drawer/Drawer";
import { routes } from "../../../Routes";
import { useLocation } from "react-router-dom";
import HeaderOptionsDesk from "./HeaderOptionsDesk";
import { HeaderStyled, LogoContainer } from "./styledHeader";
import DropDown from "./dropDown/DropDown";

export default function Header() {
  const [showDrawer, setShowDrawer] = useState(false);
  const { user, setUser, setFavs } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const urlPath = location.pathname;

  const handleBtnDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const navigateSingin = () => {
    navigate(routes.singin);
    setShowDrawer(!showDrawer);
  };

  const navigateLogin = () => {
    navigate(routes.login);
    setShowDrawer(!showDrawer);
  };

  const navigateHome = () => {
    navigate(routes.home);
  };

  const handleCerrarSesion = () => {
    setShowDrawer(!showDrawer);
    localStorage.removeItem("userData");
    setUser({});
    setFavs([]);
  };

  const toAdminPage = () => {
    navigate(routes.admin);
    setShowDrawer(!showDrawer);
  };

  return (
    <HeaderStyled>
      <LogoContainer onClick={navigateHome}>
        <Logo />
        <span>Sentite como en tu hogar</span>
      </LogoContainer>
      <BtnMenu onClick={handleBtnDrawer} />
      <Drawer
        showDrawer={showDrawer}
        handleBtnDrawer={handleBtnDrawer}
        navigateSingin={navigateSingin}
        navigateLogin={navigateLogin}
        urlPath={urlPath}
        user={user}
        setUser={setUser}
        handleCerrarSesion={handleCerrarSesion}
        isAdmin={user.rol === "ADMIN"}
        toAdminPage={toAdminPage}
      />
      <HeaderOptionsDesk
        navigateSingin={navigateSingin}
        navigateLogin={navigateLogin}
        user={user}
        urlPath={urlPath}
        handleCerrarSesion={handleCerrarSesion}
        isAdmin={user.rol === "ADMIN"}
        toAdminPage={toAdminPage}
        handleBtnDrawer={handleBtnDrawer}
      />
      <DropDown showDrawer={showDrawer} handleBtnDrawer={handleBtnDrawer} />
    </HeaderStyled>
  );
}
