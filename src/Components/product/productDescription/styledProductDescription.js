import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductDescriptionContainer = styled.div`
  padding: 30px 10px 10px 10px;
  background-color: #fff;

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
  }
`;

export const ParagraphsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 500;
  font-size: 14px;
  color: #4F4F50;
`