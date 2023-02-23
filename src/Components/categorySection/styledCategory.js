import styled, { css } from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const CategoryContainerStyled = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${PURPLE2};
    margin-bottom: 10px;
  }
  @media (min-width: 1320px) {
    padding: 25px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  div {
    align-self: center;
    justify-self: center;
  }

  @media (min-width: 768px) and (max-width: 1320px) {
    grid-template-columns: 1fr 1fr;
    div:nth-child(odd) {
      justify-self: end;
    }
    div:nth-child(even) {
      justify-self: start;
    }
  }

  @media (min-width: 1320px) {
    grid-template-columns: repeat(4, minmax(310px, 1fr));
  }
`;

export const CategoryCardStyled = styled.div`

  padding-bottom: 15px;
  max-width: 390px;

  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 700;
  color: ${PURPLE2};

  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }

  h3 {
    margin-top: 5px;
    font-size: 20px;
    margin-left: 15px;
  }

  p {
    font-size: 14px;
    margin-left: 15px;
    margin-top: 5px;
    color: rgba(56, 59, 88, 0.6);
  }

  @media (min-width: 768px) {
    max-width: 340px;
  }
  @media (min-width: 1320px) {
    max-width: 310px;
    p{
      margin-top: 0;
    }
  }
`;
