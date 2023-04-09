import React from "react";
import { CardContainer, CategoryCardSkeleton } from "./styledCategory";

export default function CategorySkeleton() {
  return (
    <CardContainer>
      <CategoryCardSkeleton>
        <div></div>
        <div></div>
        <div></div>
      </CategoryCardSkeleton>
      <CategoryCardSkeleton>
        <div></div>
        <div></div>
        <div></div>
      </CategoryCardSkeleton>
      <CategoryCardSkeleton>
        <div></div>
        <div></div>
        <div></div>
      </CategoryCardSkeleton>
      <CategoryCardSkeleton>
        <div></div>
        <div></div>
        <div></div>
      </CategoryCardSkeleton>
    </CardContainer>
  );
}
