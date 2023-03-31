import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";

const PURPLE2 = "#383B58";

export const FormContainerStyled = styled.div`
  background-color: #fff;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 0 45px; 

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

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  > p {
    color: ${({ $error }) => $error ? "#ff0000" : "transparent"};
    font-weight: 500;
    font-size: 12px;
    min-width: 10px;
    min-height: 16px;
  }
`

export const BtnSubmit = styled.div`
  border: none;
  background-color: ${PRIMARY_COLOR};
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 0.3s ease;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
  max-width: 450px;

  &:hover {
    background-color: #15a39a;
  }

  @media (min-width: 768px) {
    max-width: 350px
  }
`;
