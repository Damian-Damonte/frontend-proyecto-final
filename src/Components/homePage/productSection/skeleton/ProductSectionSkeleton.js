import React from "react";
import { ProductCardContainer } from "../styledProductSection";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { H4Skeleton } from "./styledProductSkeleton";

export default function ProductSectionSkeleton() {
  return (
    <>
      <H4Skeleton />
      <ProductCardContainer>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </ProductCardContainer>
    </>
  );
}
