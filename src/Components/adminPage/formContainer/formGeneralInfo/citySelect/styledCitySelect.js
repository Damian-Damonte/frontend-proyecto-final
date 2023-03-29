import styled, { css } from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";

export const CitySelectContainerStyled = styled.div`
  width: 100%;
  background-color: #eee;
  height: 40px;
  position: relative;

  input {
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border: none;
    padding: 10px;
    cursor: pointer;
    line-height: 18px;
    font-size: 16px;
    position: relative;
  }

  svg {
    fill: ${PRIMARY_COLOR};
    position: absolute;
    right: 10px;
    top: 18px;
  }
`;

export const CityOptionContainer = styled.div`
  background-color: #fff;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 8px;
  height: 0px;
  position: absolute;
  top: 46px;
  left: 0;
  width: 100%;
  overflow: hidden;
  transition: all 0.4s ease;
  opacity: 0;
  > div:last-child {
    border-bottom: none;
  }

  ${({ $show, $coutCitys }) => {
    if ($show) {
      return css`
        height: ${45 * $coutCitys + 10 + "px"};
        padding: 5px 10px;
        opacity: 1;
        z-index: 1;
      `;
    }
  }};
`;

export const CityOption = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${PURPLE2};
  height: 45px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px ${PRIMARY_COLOR};
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;
