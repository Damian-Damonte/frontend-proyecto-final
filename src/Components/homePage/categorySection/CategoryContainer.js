import CategoryCard from "./CategoryCard";
import {
  CardContainer,
  CategoryContainerStyled,
  ErrorCategory,
  WidthLimitContainer,
} from "./styledCategory";
import useFetch from "../../../hooks/useFetch";
import CategoryContainerSkeleton from "./CategoryContainerSkeleton";

export default function CategoryContainer({ searchParams, searchProducts }) {
  const { data: categorys, loading, error } = useFetch("/categories");

  const selectCategory = (category) => {
    searchParams.category?.id === category.id
      ? searchProducts({ ...searchParams, category: null })
      : searchProducts({ ...searchParams, category: category });
  };

  return (
    <WidthLimitContainer>
      <CategoryContainerStyled>
        <h2>Busca por tipo de alojamiento</h2>
        {loading && <CategoryContainerSkeleton />}
        {categorys && (
          <CardContainer>
            {categorys?.map((cat) => (
              <CategoryCard
                key={cat.id}
                categoria={cat}
                searchParams={searchParams}
                selectCategory={selectCategory}
              />
            ))}
          </CardContainer>
        )}
      
        {error && (
          <ErrorCategory>
            <img src="/assets/icon-warning.svg" alt="question icon" />
            <p>Ha ocurrido un error. Por favor, vuelva a intetar más tarde</p>
          </ErrorCategory>
        )}
      </CategoryContainerStyled>
    </WidthLimitContainer>
  );
}
