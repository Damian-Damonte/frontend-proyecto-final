import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";

export const CreatedSuccessfullyStyled = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreatedSuccessContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 30px 50px;
  width: 90%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-width: 640px;
  gap: 25px;


  svg {
    height: 78px;
  }

  p {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 16px;
    text-align: center;
  }

  button {
    width: 100%;
    max-width: 205px;
    border: none;
    background-color: ${PRIMARY_COLOR};
    color: #fff;
    font-weight: 700;
    border-radius: 5px;
    font-size: 18px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: all 0.3s ease;
    height: 40px;

    &:hover {
      background-color: #15a39a;
    }
  }
`;