import React from "react";
import {
  DropDownContainer,
  DropDownOption,
  DropDownStyled,
  MaxWidthContainer,
} from "./styledDropDown";
// import { BsCalendarCheck as Calendar } from "react-icons/bs";
import { RiCalendarCheckFill as Calendar } from "react-icons/ri";

import { MdFavoriteBorder as Favs } from "react-icons/md";
import { MdLogout as Logout } from "react-icons/md";

export default function DropDown({
  showDropDown,
  handleShowDropDown,
  handleCerrarSesion,
  toFavoritos,
  toReservas,
}) {
  return (
    <MaxWidthContainer $showDropDown={showDropDown} onClick={handleShowDropDown}>
      <DropDownStyled $showDropDown={showDropDown} onClick={handleShowDropDown}>
        <DropDownContainer
          onClick={handleShowDropDown}
          $showDropDown={showDropDown}
        >
          <DropDownOption onClick={toFavoritos}>
            <Favs />
            <p>Mis favoritos</p>
          </DropDownOption>
          <DropDownOption onClick={toReservas}>
            <Calendar />
            <p>Mis reservas</p>
          </DropDownOption>
          <DropDownOption onClick={handleCerrarSesion}>
            <Logout />
            <p>Cerrar sesión</p>
          </DropDownOption>
        </DropDownContainer>
      </DropDownStyled>
    </MaxWidthContainer>
  );
}
