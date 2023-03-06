import React from "react";
import {
  Caracteristic,
  CaracteristicsContainer,
  ProductCaracteristicsStyled,
} from "./styledProductCaracteristics";
import { MdOutlineKitchen as Kitchen } from "react-icons/md";
import { IoCar as Car } from "react-icons/io5";
import { FaTv as Tv } from "react-icons/fa";
import { FaSwimmer as Pool } from "react-icons/fa";
import { IoSnow as AirConditioning } from "react-icons/io5";
import { IoIosWifi as  Wifi} from "react-icons/io";
import { IoPawSharp as  PawPrint} from "react-icons/io5";

const caracteristicsIconMapper = {
  "Cocina": <Kitchen />,
  "Estacionamiento gratuito": <Car />,
  "Televisor": <Tv />,
  "Pileta": <Pool />,
  "Aire acondicionado": <AirConditioning />,
  "Wifi": <Wifi />,
  "Apto mascotas": <PawPrint />
};

export default function ProductCaracteristics({ caracteristics }) {
  return (
    <ProductCaracteristicsStyled>
      <h3>¿Qué ofrece este lugar?</h3>
      <CaracteristicsContainer>
        {caracteristics.map(caract => (
          <Caracteristic key={caract.id}>
            {caracteristicsIconMapper[caract.nombre]}
            <p>{caract.nombre}</p>
          </Caracteristic>
        ))}
      </CaracteristicsContainer>
    </ProductCaracteristicsStyled>
  );
}
