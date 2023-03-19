import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const FormDatePickerContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  /* background-color: green; */
  h3 {
    margin-bottom: 5px;
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
  }

  @media (min-width: 768px) {
    margin-top: 35px;
  }

  @media (min-width: 1024px) {
    h3 {
      margin-bottom: 10px;
    }
  }
`;
