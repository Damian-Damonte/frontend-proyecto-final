import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductCaracteristicsStyled = styled.div`
background-color: #fff;
  /* padding: 10px; */
  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    border-bottom: 1px solid ${PRIMARY_COLOR};
    padding: 0 0 10px 10px
  }
`

export const HrCaracteristics = styled.div`
  height: 1px;
  width: 100vw;
  background-color: ${PRIMARY_COLOR};
`