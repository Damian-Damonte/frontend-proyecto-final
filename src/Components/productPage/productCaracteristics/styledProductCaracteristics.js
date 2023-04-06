import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";

export const ProductCaracteristicsStyled = styled.div`
  background-color: #fff;
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    padding: 10px 0 10px 10px;
    max-width: 1800px;
    width: 100%;
  }

  @media (min-width: 768px) {
    h3 {
      padding: 10px 20px 10px 20px;
    }
  }
  @media (min-width: 1024px) {
    h3 {
      padding: 30px 30px 10px 30px;
    }
  }
`;

export const LineaDivisoria = styled.div`
  width: 100%;
  background-color: ${PRIMARY_COLOR};
  height: 1px;
`;

export const CaracteristicsContainer = styled.div`
  padding: 10px;
  margin-top: 5px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  column-gap: 10px;
  max-width: 1800px;
  width: 100%;

  svg {
    fill: ${PRIMARY_COLOR};
    font-size: 20px;
  }

  @media (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px 30px 30px;
    margin-top: 20px;
    row-gap: 40px;
  }
`;

export const Caracteristic = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-size: 13px;
  font-weight: 500;
`;
