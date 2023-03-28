import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductNameHeader,
} from "./styledAdminHeader";
import { ReactComponent as Back } from "../../../img/icon-product-back.svg";

export default function AdminHeader() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <ProductNameHeader>
        <div>
          <h3>Administración</h3>
        </div>
        <Back onClick={goBack} />
      </ProductNameHeader>
    </div>
  );
}
