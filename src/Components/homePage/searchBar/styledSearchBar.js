import styled, { css } from "styled-components";
import { ReactComponent as Icon_Location } from "../../../img/icon-location.svg";
import { ReactComponent as Icon_Calendar } from "../../../img/icon-calendar.svg";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const SearchBarContainer = styled.div`
  background-color: ${PURPLE3};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;

  @media (min-width: 768px) {
    padding: 15px 30px 25px;
  }
`;

export const SearchBarTitle = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  max-width: 400px;

  @media (min-width: 768px) {
    max-width: none;
    margin-bottom: 20px;
  }
`;

export const FormSearch = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  max-width: 400px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: none;
  }
`;

export const SelectCityContainer = styled.div`
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

export const SearchDateInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 38px;
  padding-left: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  text-align: left;
  color: #7f7f7f;
  font-size: 14px;
  font-weight: 500;
  background-color: #fff;
  cursor: pointer;
  fill: ${({ $empty }) => $empty ? PURPLE3 : "#7f7f7f"};
  color: ${({ $empty }) => $empty ? PURPLE3 : "#7f7f7f"};

  @media (min-width: 768px) {
    width: 40%;
    max-width: 420px;
  }
`;

export const BtnSearch = styled.button`
  background-color: ${PRIMARY_COLOR};
  border: none;
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #15a39a;
  }

  @media (min-width: 768px) {
    width: 20%;
    max-width: 206px;
  }
`;

export const IconLocation = styled(Icon_Location)`
  margin-right: 6px;
`;

export const IconCalendar = styled(Icon_Calendar)`
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
