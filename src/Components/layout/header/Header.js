import React, { useState, useContext } from "react";
import UserContext from "../../../context/user.context";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../img/logo-desk.svg";
import { ReactComponent as BtnMenu } from "../../../img/menu.svg";
import Drawer from "./drawer/Drawer";
import { routes } from "../../../Routes";
import { useLocation } from "react-router-dom";
import HeaderOptionsDesk from "./HeaderOptionsDesk";
import {
  HeaderStyled,
  LogoContainer,
  WidthLimitContainer,
} from "./styledHeader";
import DropDown from "./dropDown/DropDown";

export default function Header() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
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
    const authenticatePath = [
      "/mis-favoritos",
      "/mis-reservas",
      "/administracion",
    ];
    setShowDrawer(!showDrawer);
    localStorage.removeItem("userData");
    setUser({});
    setFavs([]);

    authenticatePath.includes(urlPath) && navigate(routes.home);
  };

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const toFavoritos = () => {
    navigate(routes.myFavorites);
    setShowDrawer(!showDrawer);
  };
  const toReservas = () => {
    navigate(routes.myBookings);
    setShowDrawer(!showDrawer);
  };

  const toAdminPage = () => {
    navigate(routes.admin);
    setShowDrawer(!showDrawer);
  };

  return (
    <WidthLimitContainer>
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
          toFavoritos={toFavoritos}
          toReservas={toReservas}
        />
        <HeaderOptionsDesk
          navigateSingin={navigateSingin}
          navigateLogin={navigateLogin}
          user={user}
          urlPath={urlPath}
          isAdmin={user.rol === "ADMIN"}
          toAdminPage={toAdminPage}
          handleShowDropDown={handleShowDropDown}
        />
        <DropDown
          showDropDown={showDropDown}
          handleShowDropDown={handleShowDropDown}
          handleCerrarSesion={handleCerrarSesion}
          toFavoritos={toFavoritos}
          toReservas={toReservas}
        />
      </HeaderStyled>
    </WidthLimitContainer>
  );
}
