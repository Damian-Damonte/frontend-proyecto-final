import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const LoaderClassicStyled = styled.span`
  width: 25px;
  height: 25px;
  border: 3px solid ${PURPLE3};
  border-bottom-color: #fff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 0.8s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
