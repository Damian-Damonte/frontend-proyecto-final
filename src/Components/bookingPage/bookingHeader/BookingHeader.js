import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductNameHeader,
} from "./styledBookingHeader";
import { ReactComponent as Back } from "../../../img/icon-product-back.svg";

export default function BookingHeader({ product }) {
  const { categoria, titulo } = product;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <ProductNameHeader>
        <div>
          <p>{categoria?.titulo.toUpperCase()}</p>
          <h3>{titulo}</h3>
        </div>
        <Back onClick={goBack} />
      </ProductNameHeader>
    </div>
  );
}
