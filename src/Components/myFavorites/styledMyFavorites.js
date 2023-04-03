import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const MyFavoritesStyled = styled.div`
  padding: 20px 10px;

  > h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${PURPLE2};
  }

  @media (min-width: 768px) {
    padding: 20px 20px;
  }
  @media (min-width: 1024px) {
    padding: 20px 30px 40px;
  }
`;

export const NoFavorites = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 50px;
  }
`;

export const NoFavoritesContainer = styled.div`
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
    /* height: 78px; */
    font-size: 60px;
    fill: ${PRIMARY_COLOR};
  }

  h4 {
    color: ${PRIMARY_COLOR};
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    text-align: center;
  }

  p {
    color: ${PURPLE2};
    font-weight: 500;
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
    margin-top: 20px;

    &:hover {
      background-color: #15a39a;
    }
  }

  @media (min-width: 768px) {
  }
`;
