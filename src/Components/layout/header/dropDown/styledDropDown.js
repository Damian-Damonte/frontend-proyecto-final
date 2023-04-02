import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const DropDownStyled = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: 0.3s all ease;
  /* background-color: ${({ $showDrawer }) =>
    $showDrawer ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.0)"}; */
  pointer-events: ${({ $showDropDown }) => ($showDropDown ? "auto" : "none")};

  @media (min-width: 768px) {
    display: block;
  }
`;

export const DropDownContainer = styled.div`
  background-color: #fff;
  width: 250px;
  position: absolute;
  top: 80px;
  right: 30px;
  transition: 0.3s all ease-out;
  height: ${({ $showDropDown }) => ($showDropDown ? "190px" : "0px")};
  padding: ${({ $showDropDown }) => ($showDropDown ? "10px" : "0px")};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  

  div:nth-of-type(3) {
    border-bottom:none;
  }
`;

export const DropDownOption = styled.div`
  padding: 15px 10px;
  border-bottom: 1px solid ${PRIMARY_COLOR};

  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;

  svg {
    fill: ${PRIMARY_COLOR};
    font-size:25px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: ${PURPLE3};
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;
