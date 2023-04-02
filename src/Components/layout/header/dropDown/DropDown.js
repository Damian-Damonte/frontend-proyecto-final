import React from "react";
import {
  DropDownContainer,
  DropDownOption,
  DropDownStyled,
} from "./styledDropDown";
import { BsCheckCircle as Check } from "react-icons/bs";
import { MdFavoriteBorder as Favs } from "react-icons/md";
import { MdLogout as Logout } from "react-icons/md";

export default function DropDown({ showDropDown, handleShowDropDown, handleCerrarSesion }) {
  return (
    <DropDownStyled $showDropDown={showDropDown} onClick={handleShowDropDown}>
      <DropDownContainer onClick={handleShowDropDown} $showDropDown={showDropDown}>
        <DropDownOption>
          <Favs />
          <p>Mis favoritos</p>
        </DropDownOption>
        <DropDownOption>
          <Check />
          <p>Mis reservas</p>
        </DropDownOption>
        <DropDownOption onClick={handleCerrarSesion}>
          <Logout />
          <p>Cerrar sesión</p>
        </DropDownOption>
      </DropDownContainer>
    </DropDownStyled>
  );
}
