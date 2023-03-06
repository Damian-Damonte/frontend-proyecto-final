import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductBookingContainer = styled.div`
  padding: 25px 10px 10px 10px;
  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    padding: 15px 20px 10px 20px;
  }
  @media (min-width: 1024px) {
    padding: 15px 30px 10px 30px;
  }
`;

export const BookingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
`;

export const BtnBookingContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 500;
  }

  button {
    margin-top: 10px;
    width: 100%;
    border: none;
    background-color: ${PRIMARY_COLOR};
    color: #fff;
    font-weight: 700;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #15a39a;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    gap: 30px;

    button {
      max-width: 350px;
    }

    @media (min-width: 1200px) {
      gap: 10px;
      flex-direction: column;
      max-width: 30%;
      background-color: #fff;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
