import React, { useState, useEffect } from "react";
import {
  BtnPage,
  CaracteristicsContainer,
  CaracteristicsContainerStyled,
  ErrorMessage,
  PageBtnContainer,
} from "./styledCaracteristics";
import Caracteristic from "./Caracteristic";
import useFetch from "../../../../hooks/useFetch";
import CaracteristicsPage from "./CaracteristicsPage";
import { MdNavigateBefore as Prev } from "react-icons/md";
import { MdNavigateNext as Next } from "react-icons/md";

export default function CaracteristicContainer({
  productForm,
  setProductForm,
  errors,
}) {
  const {
    data: allCaracteristics,
    loading,
    error,
  } = useFetch("/caracteristicas");

  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const { caracteristicas: currentCaracteristics } = productForm;

  const isChecked = (caracteristic) => {
    return currentCaracteristics.some(
      (caract) => caract.id === caracteristic.id
    );
  };

  const handleCheck = (caracteristic) => {
    if (isChecked(caracteristic)) {
      setProductForm({
        ...productForm,
        caracteristicas: currentCaracteristics.filter(
          (caract) => caract.id !== caracteristic.id
        ),
      });
    } else {
      setProductForm({
        ...productForm,
        caracteristicas: [...currentCaracteristics, caracteristic],
      });
    }
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (allCaracteristics) {
      const itemsPerPage = 5;
      const pageCount = Math.ceil(allCaracteristics.length / itemsPerPage);
      const paginatedArray = [];

      for (let i = 0; i < pageCount; i++) {
        const startIndex = i * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        paginatedArray.push(allCaracteristics.slice(startIndex, endIndex));
      }

      setPages(paginatedArray);
    }
  }, [allCaracteristics]);

  return (
    <CaracteristicsContainerStyled>
      <h3>Agregar atributos</h3>

      {allCaracteristics && pages.length !== 0 && (
        <>
          <CaracteristicsContainer>
            {allCaracteristics.map((caract) => (
              <Caracteristic
                key={caract.id}
                caracteristica={caract}
                isChecked={isChecked(caract)}
                handleCheck={() => handleCheck(caract)}
              />
            ))}
          </CaracteristicsContainer>

          <CaracteristicsPage
            isChecked={isChecked}
            handleCheck={handleCheck}
            page={pages[currentPage]}
          />

          <PageBtnContainer>
            <BtnPage onClick={prevPage} $disable={currentPage === 0}>
              <Prev />
            </BtnPage>
            <BtnPage
              onClick={nextPage}
              $disable={currentPage === pages.length - 1}
            >
              <Next />
            </BtnPage>
          </PageBtnContainer>
        </>
      )}

      {error && (
        <ErrorMessage>
          <img src="/assets/icon-warning.svg" alt="question icon" />
          Ha ocurrido un error al cargar los atributos. Por favor, vuelva a
          intetar más tarde
        </ErrorMessage>
      )}

    </CaracteristicsContainerStyled>
  );
}
