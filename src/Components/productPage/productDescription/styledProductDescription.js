import styled from "styled-components";

const PURPLE2 = "#383B58";

export const ProductDescriptionContainer = styled.div`
  padding: 30px 10px 10px 10px;
  background-color: #fff;
  max-width:1200px;
  width: 100%;

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
  }

  @media (min-width: 768px) {
    padding: 30px 20px 10px 20px;
  }
  @media (min-width: 1024px) {
    padding: 30px 30px 10px 30px;
  }
`;

export const ParagraphsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-weight: 500;
  font-size: 14px;
  color: #4F4F50;
  max-width: 1000px;

  @media (min-width: 1024px) {
    gap: 5px;
  }
`