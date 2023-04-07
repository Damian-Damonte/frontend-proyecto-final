import styled from "styled-components";

const PURPLE2 = "#383B58";

export const AdminMainContainerStyled = styled.div`
  padding: 0 0 50px;
  width: 100%;
  max-width: 1200px;
  > h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${PURPLE2};
    margin: 20px 0 15px 10px;
  }

  @media (min-width: 768px) {
    padding: 0 20px 40px;
    > h3 {
      margin: 30px 0 15px 0px;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 40px 60px;
  }
`;
