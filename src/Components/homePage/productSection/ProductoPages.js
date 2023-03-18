import React from "react";
import {
  BtnNextPrev,
  BtnPageNumber,
  BtnPrevNextMobile,
  BtnRefreshRandom,
  PageNumberContainer,
  Pager,
} from "./styledProductSection";

export default function ProductoPages({
  pageData,
  setPageData,
  searchProducts,
  lastSearchParams,
  loading
}) {
  const { totalPages, currentPage } = pageData;

  const pageBtnSearch = (page) => {
    if (!loading && page !== currentPage) {
      setPageData({ ...pageData, currentPage: page });
      searchProducts(lastSearchParams, page);
    }
  };

  const nextPage = () => {
    if (!loading && currentPage < totalPages - 1) {
      setPageData({ ...pageData, currentPage: currentPage + 1 });
      searchProducts(lastSearchParams, currentPage + 1);
    }
  };

  const prevPage = () => {
    if (!loading && currentPage > 0) {
      setPageData({ ...pageData, currentPage: currentPage - 1 });
      searchProducts(lastSearchParams, currentPage - 1);
    }
  };

  const refreshRandoms = () => {
    if (!loading){
      searchProducts(lastSearchParams)
    };
  };

  function getPageNumbers() {
    const pageNumbers = [];
    let lowerLimit = Math.max(0, currentPage - 2);
    let upperLimit = Math.min(totalPages - 1, currentPage + 2);

    if (totalPages <= 5) {
      lowerLimit = 0;
      upperLimit = totalPages - 1;
    } else {
      if (currentPage <= 2) {
        upperLimit = 4;
      } else if (currentPage >= totalPages - 3) {
        lowerLimit = totalPages - 5;
      }
    }

    for (let i = lowerLimit; i <= upperLimit; i++) {
      pageNumbers.push(
        <BtnPageNumber
          key={i}
          $selected={i === currentPage}
          onClick={() => pageBtnSearch(i)}
        >
          {i + 1}
        </BtnPageNumber>
      );
    }
    return pageNumbers;
  }

  const renderPageBtns = () => {
    const allSearchParamsNull = Object.values(lastSearchParams).every(
      (e) => e === null
    );

    return (
      <Pager $random={allSearchParamsNull}>
        {allSearchParamsNull ? (
          <BtnRefreshRandom onClick={refreshRandoms}>Actualizar recomendaciones</BtnRefreshRandom>
        ) : (
          <>
            <BtnNextPrev onClick={prevPage} $disabled={currentPage <= 0}>Anterior</BtnNextPrev>
            <PageNumberContainer>{getPageNumbers()}</PageNumberContainer>
            <BtnNextPrev onClick={nextPage} $disabled={currentPage >= totalPages - 1}>Siguiente</BtnNextPrev>
            <BtnPrevNextMobile>
              <BtnNextPrev onClick={prevPage} $disabled={currentPage <= 0}>Anterior</BtnNextPrev>
              <BtnNextPrev onClick={nextPage} $disabled={currentPage >= totalPages - 1}>Siguiente</BtnNextPrev>
            </BtnPrevNextMobile>
          </>
        )}
      </Pager>
    );
  };

  return <Pager>{renderPageBtns()}</Pager>;
}
