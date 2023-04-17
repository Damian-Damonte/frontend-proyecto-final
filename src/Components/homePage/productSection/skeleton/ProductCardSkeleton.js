import React from "react";
import {
  BtnSubmitSke,
  CategoryRatingContainerSke,
  CategorySkeleton,
  PriceContainerSke,
  ProductCardCaracteristicsSke,
  ProductCardDescriptionContainerSke,
  ProductCardDescriptionSke,
  ProductCardLocationContainerSke,
  ProductCardSkeletonStyled,
  ProductImgContainerSke,
  RatingContainerSke,
  RatingTextSke,
  RatingValueSke,
  TitleContainerSke,
} from "./styledProductSkeleton";

export default function ProductCardSkeleton() {
  return (
    <ProductCardSkeletonStyled>
      <ProductImgContainerSke></ProductImgContainerSke>

      <ProductCardDescriptionContainerSke>
        <CategoryRatingContainerSke>
          <CategorySkeleton />
          <RatingContainerSke>
            <RatingValueSke />
            <RatingTextSke />
          </RatingContainerSke>
        </CategoryRatingContainerSke>

        <TitleContainerSke>
          <div></div>
        </TitleContainerSke>

        <ProductCardLocationContainerSke>
          <div></div>
          <div></div>
        </ProductCardLocationContainerSke>

        <ProductCardCaracteristicsSke>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </ProductCardCaracteristicsSke>

        <ProductCardDescriptionSke>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </ProductCardDescriptionSke>

        <PriceContainerSke>
          <div></div>
          <div></div>
        </PriceContainerSke>

        <BtnSubmitSke />
      </ProductCardDescriptionContainerSke>
    </ProductCardSkeletonStyled>
  );
}
