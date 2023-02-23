import React from "react";
import CategoryCard from "./CategoryCard";
import { CardContainer, CategoryContainerStyled } from "./styledCategory";

const categoriasHardcoded = [
  {
    id: 1,
    title: "Hoteles",
    imgUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    title: "Hostels",
    imgUrl:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  },
  {
    id: 3,
    title: "Departamentos",
    imgUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 4,
    title: "Bed and breakfast",
    imgUrl:
      "https://images.unsplash.com/photo-1463620910506-d0458143143e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

export default function CategoryContainer() {
  return (
    <CategoryContainerStyled>
      <h2>Busca por tipo de alojamiento</h2>
      <CardContainer>
        {categoriasHardcoded.map((cat) => (
          <CategoryCard key={cat.id} categoria={cat} />
        ))}
      </CardContainer>
    </CategoryContainerStyled>
  );
}
