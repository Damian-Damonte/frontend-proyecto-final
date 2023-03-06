import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductPoliciesStyled = styled.div`
  background-color: #fff;
  padding-bottom: 30px;

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    border-bottom: 1px solid ${PRIMARY_COLOR};
    padding: 10px;
  }

  @media (min-width: 768px) {
  padding-bottom: 50px;
    h3 {
      padding: 10px 20px 10px 20px;
    }
  }
  @media (min-width: 1024px) {
    h3 {
      padding: 10px 30px 10px 30px;
    }
  }
`;

export const PoliciesContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;

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
    gap: 50px;

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
    column-gap: 30px;

    grid-template-columns: repeat(3, 300px);
    div {
      div {
        max-width: none;
      }
    }
  }
`;
