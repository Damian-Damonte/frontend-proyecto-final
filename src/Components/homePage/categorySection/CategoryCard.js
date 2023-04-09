import { useState } from "react";
import { CategoryCardStyled } from "./styledCategory";

export default function CategoryCard({
  categoria,
  searchParams,
  selectCategory,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { id, titulo, urlImagen, cantProductos } = categoria;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <CategoryCardStyled
      $selected={searchParams.category?.id === id}
      onClick={() => selectCategory(categoria)}
      $imgLoad={imageLoaded}
    >
      <div></div>
      <img src={urlImagen} alt={titulo} onLoad={handleImageLoad} />
      <div></div>
      <h3>{titulo}</h3>
      <p>
        {cantProductos} {titulo}
      </p>
    </CategoryCardStyled>
  );
}
