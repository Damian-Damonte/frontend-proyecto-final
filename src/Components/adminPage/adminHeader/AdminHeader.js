import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductNameHeader } from "./styledAdminHeader";
import { ReactComponent as Back } from "../../../img/icon-product-back.svg";
import { MaxWidthContainer } from "../../common/maxWidthContainer/styledMaxWidthContainer";

export default function AdminHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <MaxWidthContainer $bgcolor="#545776">
        <ProductNameHeader>
          <div>
            <h3>Administración</h3>
          </div>
          <Back onClick={goBack} />
        </ProductNameHeader>
      </MaxWidthContainer>
    </div>
  );
}
