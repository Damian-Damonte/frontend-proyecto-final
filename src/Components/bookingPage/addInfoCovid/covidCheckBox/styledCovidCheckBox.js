import styled from "styled-components";

const PURPLE2 = "#383B58";

export const CovidCheckBoxContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 1024px) {
    width: 33%;
    margin-top: 41px;
    justify-content: space-between;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100%;
  gap: 10px;
  align-items: center;

  input {
    width: 20px;
    height: 20px;
    font-size: 16px;
    color: red;
    fill: red;
    background-color: red;
    cursor: pointer;
  }

  p {
    width: calc(100% - 25px);
    font-weight: 500;
    color: ${PURPLE2};
  }

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const CovidDescription = styled.div`
  margin-top: 10px;
  p {
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;
