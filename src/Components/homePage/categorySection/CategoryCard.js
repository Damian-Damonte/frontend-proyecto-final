import { useState } from "react";
import { CategoryCardStyled } from "./styledCategory";

export default function CategoryCard({
  categoria,
  searchParams,
  selectCategory,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const { id, name, imageUrl, productsCount } = categoria;

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
      <img src={imageUrl} alt={name} onLoad={handleImageLoad} />
      <div></div>
      <h3>{name}</h3>
      <p>
        {productsCount} {name}
      </p>
    </CategoryCardStyled>
  );
}
