import { ReactComponent as BtnCloseMenu } from "../../../../img/cross-white.svg";
import { ReactComponent as Facebook } from "../../../../img/icon-facebook.svg";
import { ReactComponent as Linkedin } from "../../../../img/icon-linkedin.svg";
import { ReactComponent as Twitter } from "../../../../img/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../../../img/icon-instagram.svg";
import UserProfile from "../UserProfile";
import {
  BottomSectionDrawer,
  BottomSectionDrawerOptions,
  CloseSessionContainer,
  CloseSissionAndSocial,
  DrawerContainer,
  DrawerStyled,
  PMenu,
  SocialContainer,
  TopSectionDrawer,
} from "./styledDrawer";

export default function Drawer({
  showDrawer,
  handleBtnDrawer,
  navigateSingin,
  navigateLogin,
  urlPath,
  user,
  handleCerrarSesion,
  isAdmin,
  toAdminPage
}) {
  const handleActions = (urlPath) => {
    const login = <p onClick={navigateLogin}>Iniciar sesión</p>;
    const singin = <p onClick={navigateSingin}>Crear cuenta</p>;

    if (urlPath === "/registro" || urlPath === "/iniciar-sesion")
      return urlPath === "/registro" ? login : singin;

    if (!user.token) {
      return (
        <>
          {singin}
          <div></div>
          {login}
        </>
      );
    }
  };

  return (
    <DrawerContainer $showDrawer={showDrawer}>
      <div onClick={handleBtnDrawer}></div>
      <DrawerStyled $showDrawer={showDrawer}>
        <TopSectionDrawer>
          <BtnCloseMenu onClick={handleBtnDrawer} />
          {!user.token ? (
            <PMenu>MENÚ</PMenu>
          ) : (
            <UserProfile user={user} handleCerrarSesion={handleCerrarSesion} />
          )}
        </TopSectionDrawer>

        <BottomSectionDrawer>
          <BottomSectionDrawerOptions>
            {handleActions(urlPath)}
            {isAdmin && <p onClick={toAdminPage}>Administracion</p>}
          </BottomSectionDrawerOptions>
          <CloseSissionAndSocial>
            {user.token && (
              <CloseSessionContainer>
                ¿Deseas <span onClick={handleCerrarSesion}>cerrar sesión</span>?
              </CloseSessionContainer>
            )}
            <SocialContainer>
              <Facebook />
              <Linkedin />
              <Twitter />
              <Instagram />
            </SocialContainer>
          </CloseSissionAndSocial>
        </BottomSectionDrawer>
      </DrawerStyled>
    </DrawerContainer>
  );
}
