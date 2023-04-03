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
