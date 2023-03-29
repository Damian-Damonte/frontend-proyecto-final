import styled from "styled-components";

const PURPLE2 = "#383B58";

export const FormContainerStyled = styled.div`
  background-color: #fff;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 25px;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: ${PURPLE2};
  }

  @media (min-width: 768px) {
    border-radius: 8px;
  }
`;
