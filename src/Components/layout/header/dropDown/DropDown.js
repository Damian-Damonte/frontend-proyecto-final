import React from "react";
import {
  DropDownContainer,
  DropDownOption,
  DropDownStyled,
} from "./styledDropDown";
import { BsCheckCircle as Check } from "react-icons/bs";
import { MdFavoriteBorder as Favs } from "react-icons/md";
import { MdLogout as Logout } from "react-icons/md";
// import { ReactComponent as Favs } from "../../../../img/icon-fav-empty.svg";

export default function DropDown({ showDrawer, handleBtnDrawer }) {
  return (
    <DropDownStyled $showDrawer={showDrawer} onClick={handleBtnDrawer}>
      <DropDownContainer onClick={handleBtnDrawer} $showDrawer={showDrawer}>
        <DropDownOption>
          <Favs />
          <p>Mis favoritos</p>
        </DropDownOption>
        <DropDownOption>
          <Check />
          <p>Mis reservas</p>
        </DropDownOption>
        <DropDownOption>
          <Logout />
          <p>Cerrar sesión</p>
        </DropDownOption>
      </DropDownContainer>
    </DropDownStyled>
  );
}
