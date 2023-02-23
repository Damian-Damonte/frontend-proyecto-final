import { ReactComponent as BtnCloseMenu } from "../../../img/cross-white.svg";
import { ReactComponent as Facebook } from "../../../img/icon-facebook.svg";
import { ReactComponent as Linkedin } from "../../../img/icon-linkedin.svg";
import { ReactComponent as Twitter } from "../../../img/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../../img/icon-instagram.svg";
import UserProfile from "./UserProfile";

export default function Drawer({
  showDrawer,
  handleBtnDrawer,
  navigateSingin,
  navigateLogin,
  urlPath,
  user,
  handleCerrarSesion,
}) {
  const handleActions = (urlPath) => {
    if (urlPath === "/registro")
      return (
        <p className="drawer-option" onClick={navigateLogin}>
          Iniciar sesión
        </p>
      );

    if (urlPath === "/iniciar-sesion")
      return (
        <p className="drawer-option" onClick={navigateSingin}>
          Crear cuenta
        </p>
      );

    if (user === null) {
      return (
        <>
          <p className="drawer-option" onClick={navigateSingin}>
            Crear cuenta
          </p>
          <div className="drawer-options-hr"></div>
          <p className="drawer-option" onClick={navigateLogin}>
            Iniciar sesión
          </p>
        </>
      );
    }
  };

  const handleClicOut = () => {
    handleBtnDrawer();
  }

  return (
    <div className={showDrawer ? "drawer-container show-drawer-container" : "drawer-container"}>
      <div className="out-of-drawer" onClick={handleClicOut}></div>
      <div className={showDrawer ? "drawer show-drawer" : "drawer"}>
        <div className="topSectionDrawer">
          <BtnCloseMenu className="btn-close-menu" onClick={handleBtnDrawer} />
          {user === null ? (
            <div className="drawer-menu">MENÚ</div>
          ) : (
            <UserProfile user={user} handleCerrarSesion={handleCerrarSesion}/>
          )}
        </div>
        <div className="bottomSectionDrawer">
          <div className="drawer-options-container">
            {handleActions(urlPath)}
          </div>
          <div className="drawer-redes">
            {user !== null && (
              <div className="container-cerrar-sesion">
                ¿Deseas{" "}
                <span className="cerrar-sesion" onClick={handleCerrarSesion}>
                  cerrar sesión
                </span>
                ?
              </div>
            )}
            <div className="redes-continer">
              <Facebook className="redes-icon" />
              <Linkedin className="redes-icon" />
              <Twitter className="redes-icon" />
              <Instagram className="redes-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
