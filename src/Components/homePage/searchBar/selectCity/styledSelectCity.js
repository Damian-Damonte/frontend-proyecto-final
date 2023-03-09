import styled, { css } from "styled-components";
import { ReactComponent as Icon_Location } from "../../../../img/icon-location.svg";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const SelectCityContainerStyled = styled.div`
  position: relative;

  > svg {
    position: absolute;
    fill: ${({ $empty }) => ($empty ? PURPLE3 : "#7f7f7f")};
    top: 8px;
    left: 14px;
  }

  @media (min-width: 768px) {
    width: 40%;
    max-width: 420px;
  }
`;

export const SelectCity = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: ${PURPLE3};
  height: 38px;
  padding-left: 38px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

export const IconLocation = styled(Icon_Location)`
  margin-right: 6px;
`;

export const SelectCityOptionContainer = styled.div`
  z-index: 10;
  width: 100%;
  height: 0px;
  overflow: hidden;
  padding: 0;
  opacity: 0;
  transition: all 0.4s ease;
  position: absolute;
  background-color: #f5f5f5;
  left: 0;
  top: 48px;
  border-radius: 0px 0px 5px 5px;
  > div:last-child {
    border-bottom: none;
  }

  ${({ $show }) => {
    if ($show) {
      return css`
        height: ${({ $citysCount }) => 65 * $citysCount + "px"};
        min-height: 65px;
        padding: 0px 15px;
        opacity: 1;
      `;
    }
  }};
`;

export const SelectCityOptionStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: solid 1px ${PRIMARY_COLOR};
  width: 100%;
  height: 65px;
  padding: 10px 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const SelectCityOptionNames = styled.div`
  color: #000;
  p {
    font-weight: 700;
  }
  p:nth-child(2) {
    color: ${PURPLE3};
  }
`;
