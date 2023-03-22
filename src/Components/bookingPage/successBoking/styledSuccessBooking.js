import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";

export const SuccessBookingStyled = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SuccessBookingContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px 30px;
  width: 90%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-width: 640px;

  svg {
    height: 78px;
  }

  h4 {
    color: ${PRIMARY_COLOR};
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
    text-align: center;
  }

  p {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    margin-top: 5px;
  }

  button {
    margin-top: 30px;
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
