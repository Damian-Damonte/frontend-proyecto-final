import styled from "styled-components";

const PURPLE2 = "#383B58";

export const CaracteristicsContainerStyled = styled.div`
  padding: 0 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    padding: 0 25px;
  }
`;

export const CaracteristicsContainer = styled.div`
  margin-top: 25px;
  display: none;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: center;
  row-gap: 15px;
  justify-content: space-between;

  @media (min-width: 400px) {
    display: grid;
  }
`;

export const CaracteristicsPageContainer = styled.div`
  margin-top: 25px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  align-items: center;
  row-gap: 15px;
  justify-content: space-between;

  @media (min-width: 400px) {
    display: none;
  }
`;

export const CaracteristicStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  cursor: pointer;
  width: fit-content;

  svg {
    font-size: 23px;
    fill: ${PURPLE2};
  }

  p {
    font-weight: 500;
    color: ${({ $check }) => ($check ? PURPLE2 : "#aaa")};
  }
`;

export const IconContainer = styled.div`
  width: 23px;
  height: 23px;
  border: 2px solid #aaa;
  border-radius: 3px;
`;

export const PageBtnContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: 15px;
`;

export const BtnPage = styled.button`
  border: none;
  background-color: ${({ $disable }) => ($disable ? "#aaa" : PURPLE2)};
  height: 30px;
  width: 50px;
  border-radius: 5px;
  cursor: pointer;

  svg {
    font-size: 30px;
    fill: #fff;
    color: red;
  }

  @media (min-width: 400px) {
    display: none;
  }
`;

export const ErrorMessage = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(155, 161, 235, 0.3);
  padding: 10px 10px;
  border-radius: 5px;
  max-width: 479px;
  align-self: center;
  
  img {
    height: 50px;
    width: 50px;
    margin-right: 5px;
  }
`