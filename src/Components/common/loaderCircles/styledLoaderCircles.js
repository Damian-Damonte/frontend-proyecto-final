import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE3 = "#545776";

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ $containerheight }) =>  $containerheight };
`

export const LoaderStyled = styled.span`
  width: 48px;
  height: 48px;
  display: block;
  margin: 15px auto;
  position: relative;
  color: ${PRIMARY_COLOR};
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  ::after,
  ::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 50%;
    transform: scale(0.5) translate(0, 0);
    background-color: ${PRIMARY_COLOR};
    border-radius: 50%;
    animation: animloader 1s infinite ease-in-out;
  }

  ::before {
    background-color: ${PURPLE3};
    transform: scale(0.5) translate(-48px, -48px);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animloader {
    50% {
      transform: scale(1) translate(-50%, -50%);
    }
  }
`;
