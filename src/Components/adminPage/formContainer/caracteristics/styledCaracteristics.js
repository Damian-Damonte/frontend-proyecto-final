import styled, { css } from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const CaracteristicsContainerStyled = styled.div`
  margin-top: 20px;
  padding: 0 10px;

  @media (min-width: 768px) {
    padding: 0 25px;
  }
`;

export const CaracteristicStyledContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (min-width: 1024px) {
    gap: 15px;
  }
`;

export const CaracteristicStyled = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10px 20px 20px;
  border-radius: 5px;

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 1024px) {
    padding: 25px 30px;
  }
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: calc(100% - 40px);
  row-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 5fr 1fr;
    row-gap: 5px;
    column-gap: 20px;
  }
`;

export const CaracteristicSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    font-weight: 500;
    font-size: 14px;
    color: ${PURPLE2};
  }
`;

export const CaracteristicSelect = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border: none;
  background-color: #fff;
  padding: 10px;
  height: 40px;
  line-height: 18px;
  font-size: 16px;
  position: relative;
  cursor: pointer;

  svg {
    fill: ${PRIMARY_COLOR};
    position: absolute;
    right: 10px;
    top: 18px;
  }
`;

export const CaracteristicOptionContainer = styled.div`
  background-color: #fff;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 8px;
  height: 0px;
  position: absolute;
  z-index: 1;
  top: 46px;
  left: 0;
  width: 100%;
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: 0;
  > div:last-child {
    border-bottom: none;
  }

  ${({ $show, $coutCaracteristics }) => {
    if ($show) {
      return css`
        height: ${30 * $coutCaracteristics + 10 + "px"};
        padding: 5px 10px;
        opacity: 1;
      `;
    }
  }};
`;

export const CaracteristicOption = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${PURPLE2};
  height: 30px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px ${PRIMARY_COLOR};
  padding: 5px;

  &:hover {
    background-color: #eee;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    font-weight: 500;
    font-size: 14px;
    color: ${PURPLE2};
  }
`;

export const IconContainerChild = styled.div`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border: none;
  padding: 10px;
  height: 40px;
  background-color: #fff;
`;

export const AddCaracteristic = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 74px;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
    fill: ${PRIMARY_COLOR};
    transition: all 0.3s ease;

    &:hover {
      fill: #15a39a;
    }
  }

  @media (min-width: 768px) {
    align-self: flex-end;
    margin-top: 0px;
  }
`;
