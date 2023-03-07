import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BtnDetails,
  CardRating,
  CardTitleStars,
  CategoryStarsContainer,
  ProductCardCaracteristics,
  ProductCardDescription,
  ProductCardDescriptionContainer,
  ProductCardLocationContainer,
  ProductCardStyled,
  ProductCardTitleRatingContainer,
  ProductImgContainer,
  StarsContainer,
} from "./styledProductSection";
import { ReactComponent as Fav } from "../../../img/icon-fav-empty.svg";
import { ReactComponent as StarFull } from "../../../img/icon-star-full.svg";
import { ReactComponent as Location } from "../../../img/icon-location.svg";
import { MdOutlineKitchen as Kitchen } from "react-icons/md";
import { IoCar as Car } from "react-icons/io5";
import { FaTv as Tv } from "react-icons/fa";
import { FaSwimmer as Pool } from "react-icons/fa";
import { IoSnow as AirConditioning } from "react-icons/io5";
import { IoIosWifi as  Wifi} from "react-icons/io";
import { IoPawSharp as  PawPrint} from "react-icons/io5";

const descriptionHardcoded =
  "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book";

export default function ProductCard({ text }) {
  const [descriptionReduced, setDescriptionReduced] = useState("");

  const navigate = useNavigate();

  const navigateProduct = () => {
    navigate("/producto/1")
  }

  const descriptionReducer = () => {
    if(window.innerWidth < 768) {
      text.length > 200 
        ? setDescriptionReduced(<p> {text.substring(0, 200)}... <span>más...</span> </p>)
        : setDescriptionReduced(<p>{text}</p>);
    } else {
      text.length > 120 
        ? setDescriptionReduced(<p> {text.substring(0, 120)}... <span>más...</span> </p>)
        : setDescriptionReduced(<p>{text}</p>);
    }
  }

  useEffect(() => {
    descriptionReducer();
    window.addEventListener("resize", descriptionReducer);
    return () => {
      window.removeEventListener("resize", descriptionReducer);
    };
  }, [text]);

  return (
    <ProductCardStyled>
      <ProductImgContainer>
        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
        <Fav />
      </ProductImgContainer>

      <ProductCardDescriptionContainer>
        <ProductCardTitleRatingContainer>
          <CardTitleStars>
            <CategoryStarsContainer>
              <p>Bed and breakfast</p>
              <StarsContainer>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
              </StarsContainer>
            </CategoryStarsContainer>
            <h3>Hermitage Hotel Sheraton</h3>
          </CardTitleStars>

          <CardRating>
            <p>8</p>
            <p>Muy bueno</p>
          </CardRating>
        </ProductCardTitleRatingContainer>

        <ProductCardLocationContainer>
          <p>
            {" "}
            <Location /> A 940m del centro -
          </p>
          <p>&nbsp; MOSTRAR EN EL MAPA</p>
        </ProductCardLocationContainer>

        <ProductCardCaracteristics>
          <Kitchen />
          <Pool />
          <Wifi />
          <Tv />
          <Car />
          <PawPrint />
          <AirConditioning />
        </ProductCardCaracteristics>

        <ProductCardDescription>
          {descriptionReduced}
        </ProductCardDescription>

        <BtnDetails onClick={navigateProduct}>Ver detalles</BtnDetails>

      </ProductCardDescriptionContainer>
    </ProductCardStyled>
  );
}
