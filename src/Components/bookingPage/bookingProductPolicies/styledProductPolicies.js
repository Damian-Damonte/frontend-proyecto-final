import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductPoliciesStyled = styled.div`
  background-color: #fff;
  padding-bottom: 30px;
  margin-top: 45px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    padding: 25px 10px 10px 10px;
    width: 100%;
    max-width: 1200px;
  }

  @media (min-width: 768px) {
    padding-bottom: 50px;
    h3 {
      padding: 25px 20px 10px 20px;
    }
  }
  @media (min-width: 1024px) {
    h3 {
      padding: 25px 30px 10px 30px;
    }
  }
`;

export const LineaDivisoria = styled.div`
  width: 100%;
  background-color: ${PRIMARY_COLOR};
  height: 1px;
`;

export const PoliciesContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  h4 {
    color: ${PURPLE3};
    font-size: 20px;
  }

  div {
    div {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;
      max-width: 80%;

      p {
        font-weight: 500;
        font-size: 14px;
        color: #4f4f50;
      }
    }
  }

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
    column-gap: 70px;

    div {
      div {
        max-width: 90%;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 20px 20px;
  }

  @media (min-width: 1024px) {
    padding: 20px 30px;
    column-gap: 50px;

    grid-template-columns: repeat(3, 280px);
    div {
      div {
        max-width: none;
      }
    }
  }
`;
