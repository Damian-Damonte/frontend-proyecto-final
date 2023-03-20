import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const FormArribalTimeStyled = styled.div`
  margin-top: 25px;
  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
  }
  @media (min-width: 768px) {
    margin-top: 35px;
  }
`;

export const FormArribalTimeContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 10px;
  margin-top: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    font-size: 25px;
    color: ${PURPLE3};
  }

  p {
    width: calc(100% - 25px);
    font-weight: 500;
    color: ${PURPLE2};
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;

  label {
    font-weight: 500;
    color: ${PURPLE2};
    font-size: 14px;
  }

  select {
    border: none;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    outline: ${({ $error }) => $error ? "solid 1px #ff0000" : "none"};
  }

  select option {
    font-weight: 500;
    color: ${PURPLE2};
    font-size: 14px;
    padding: 85px 0;
  }

  select option:first-child {
    color: rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    select {
      max-width: 320px;
    }
  }

  @media (min-width: 1024px) {
    select {
      max-width: 390px;
    }
  }
`;
