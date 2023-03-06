import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductLocationStyled = styled.div`
  background-color: #fff;
  margin-top: 30px;
  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    border-bottom: 1px solid ${PRIMARY_COLOR};
    padding: 20px 0 10px 10px;
  }
`;

export const MapContainer = styled.div`
  padding: 10px;
`;
