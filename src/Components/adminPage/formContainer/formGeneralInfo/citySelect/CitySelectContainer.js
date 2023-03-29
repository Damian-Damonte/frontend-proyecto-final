import React, { useState, useEffect } from "react";
import {
  CityOption,
  CityOptionContainer,
  CitySelectContainerStyled,
} from "./styledCitySelect";
import useFetch from "../../../../../hooks/useFetch";

export default function CitySelectContainer({ productForm, setProductForm }) {
  const [showSelect, setShowSelect] = useState(false);
  const [citySearchText, setCitySearchText] = useState("");
  const [citysFilter, setCitysFilter] = useState([]);
  const { data: citys, loading, error } = useFetch("/ciudades");

  const matchCity = (city) => {
    const cityAndContry =
      city.nombre.toLocaleLowerCase() +
      ", " +
      city.pais.nombre.toLocaleLowerCase();
    return cityAndContry.includes(citySearchText.toLocaleLowerCase());
  };


  useEffect(() => {
    let citysToShow = [];
    if (citys !== null) {
      for (let i = 0; i < citys?.length && citysToShow.length < 4; i++) {
        matchCity(citys[i]) && citysToShow.push(citys[i]);
      }
      setCitysFilter(citysToShow);
    }
  }, [citySearchText, citys]);

  const handleChangeCityText = (e) => {
    e.target.value === "" && setProductForm({ ...productForm, ciudad: null });
    setCitySearchText(e.target.value);
  };

  const handleSelectCity = (city) => {
    setProductForm({ ...productForm, ciudad: city });
    setCitySearchText(`${city.nombre}, ${city.pais.nombre}`);
  };

  const handleShowSelect = () => {
    setShowSelect(!showSelect);
  };

  const closeSelectOnBlur = () => {
    setTimeout(() => {
      handleShowSelect()
    }, 100)
  }

  const cleanCity = () => {
    setCitySearchText("");
    setProductForm({...productForm, ciudad: null})
  };

  return (
    <CitySelectContainerStyled>
      <input
        value={citySearchText}
        onChange={handleChangeCityText}
        onBlur={closeSelectOnBlur}
        onFocus={handleShowSelect}
        placeholder="Ciudad"
      />

      <CityOptionContainer
        $show={showSelect}
        $coutCitys={citysFilter.length || 1}
      >
        {loading && (
          <CityOption>
            <p>Cargando ciudades...</p>
          </CityOption>
        )}

        {citys &&
          (citysFilter.length > 0 ? (
            citysFilter.map((city) => (
              <CityOption key={city.id} onClick={() => handleSelectCity(city)}>
                <p>{`${city.nombre}, ${city.pais.nombre}`}</p>
              </CityOption>
            ))
          ) : (
            <CityOption onClick={cleanCity}>
              <p>
                No se encontró la ciudad indicada
              </p>
            </CityOption>
          ))}

        {error && (
          <CityOption onClick={cleanCity}>
            <p>Ha ocurrido un error al cargar las ciudades</p>
          </CityOption>
        )}
      </CityOptionContainer>
    </CitySelectContainerStyled>
  );
}
