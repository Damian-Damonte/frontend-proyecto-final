import styled from "styled-components";
import { ReactComponent as Icon_Calendar } from "../../../img/icon-calendar.svg";

const PRIMARY_COLOR = "#1DBEB4";
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
  color: ${({ $empty }) => ($empty ? PURPLE3 : "#7f7f7f")};

  svg:nth-of-type(1) {
    fill: ${({ $empty }) => ($empty ? PURPLE3 : "#7f7f7f")};
  }

  svg:nth-of-type(2) {
    position: absolute;
    top: 8px;
    right: 10px;
    fill: #b2b2b2;
    font-size: 24px;
    cursor:pointer;
    transition: all 0.2s ease;
    display: ${({ $empty }) => ($empty ? "block" : "none")};

    &:hover {
      fill: #8e8e8e;
    }
  }

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

export const IconCalendar = styled(Icon_Calendar)`
  margin-right: 6px;
`;
