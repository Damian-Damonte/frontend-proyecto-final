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
  DrawerLink,
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
  toAdminPage,
  toFavoritos,
  toReservas,
}) {
  const handleActions = (urlPath) => {
    const login = <DrawerLink onClick={navigateLogin}>Iniciar sesión</DrawerLink>;
    const singin = <DrawerLink onClick={navigateSingin}>Crear cuenta</DrawerLink>;

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

  const toSocialMedia = (url) => {
    window.open(url, "_blank");
  };

  return (
    <DrawerContainer $showDrawer={showDrawer}>
      <div onClick={handleBtnDrawer}></div>
      <DrawerStyled $showDrawer={showDrawer}>
        <TopSectionDrawer>
          <BtnCloseMenu onClick={handleBtnDrawer} />
          {!user.token ? <PMenu>MENÚ</PMenu> : <UserProfile user={user} />}
        </TopSectionDrawer>

        <BottomSectionDrawer>
          <BottomSectionDrawerOptions>
            {handleActions(urlPath)}
            {isAdmin && (
              <DrawerLink
                $isCurrentPage={urlPath === "/administracion"}
                onClick={toAdminPage}
              >
                Administracion
              </DrawerLink>
            )}
            {user.token && (
              <>
                <DrawerLink
                  $isCurrentPage={urlPath === "/mis-favoritos"}
                  onClick={toFavoritos}
                >
                  Mis favoritos
                </DrawerLink>
                <DrawerLink
                  $isCurrentPage={urlPath === "/mis-reservas"}
                  onClick={toReservas}
                >
                  Mis reservas
                </DrawerLink>
              </>
            )}
          </BottomSectionDrawerOptions>
          <CloseSissionAndSocial>
            {user.token && (
              <CloseSessionContainer>
                ¿Deseas <span onClick={handleCerrarSesion}>cerrar sesión</span>?
              </CloseSessionContainer>
            )}
            <SocialContainer>
              <Facebook onClick={() => toSocialMedia("https://www.facebook.com/")} />
              <Linkedin onClick={() => toSocialMedia("https://www.linkedin.com/")} />
              <Twitter onClick={() => toSocialMedia("https://twitter.com/")} />
              <Instagram onClick={() => toSocialMedia("https://www.instagram.com/")} />
            </SocialContainer>
          </CloseSissionAndSocial>
        </BottomSectionDrawer>
      </DrawerStyled>
    </DrawerContainer>
  );
}
