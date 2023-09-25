import React from "react";
import {
  FromConteiner,
  StyledLabel,
  StyledInput,
  Filter
} from "./FiltersStyle";


const Filters = (
  {
  minFilter,
  maxFilter,
  setMinFilter,
  setMaxFilter,
  searchFilter,
  setSearchFilter
  }) => {
  const handleMin = (value) => {
    if (value < 0) {
      setMinFilter("");
    } else {
      setMinFilter(value);
    }
  };
  const handleMax = (value) => {
    if (value < 0) {
      setMaxFilter("");
    } else {
      setMaxFilter(value);
    }
  };

  return (
    <>
      <FromConteiner>
        <Filter>
          <h1> Filters </h1>

          <StyledLabel htmlFor="valorMinimo">Valor Mínimo:</StyledLabel>
          <StyledInput
            id="valorMinimo"
            type="Number"
            value={minFilter}
            onChange={(e) => handleMin(e.target.value)}
          />
          <StyledLabel htmlFor="valorMaximo">Valor Máximo:</StyledLabel>
          <StyledInput
            type="Number"
            value={maxFilter}
            onChange={(e) => {
              handleMax(e.target.value);
            }}
          />
          <StyledLabel htmlFor="buscarPorNome">Buscar por nome:</StyledLabel>
          <StyledInput
            type="text"
            value={searchFilter}
            onChange={(e) => {
              setSearchFilter(e.target.value);
            }}
          />
        </Filter>
      </FromConteiner>
    </>
  );
};

export default Filters;
