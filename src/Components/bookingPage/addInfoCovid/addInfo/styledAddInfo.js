import styled from "styled-components";

const PURPLE2 = "#383B58";

export const AddInfoStyled = styled.div`
  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
  }
  @media (min-width: 1024px) {
    width: 66%;
  }
`;

export const AddInfoContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
  padding: 20px 10px;

  p {
    width: calc(100% - 25px);
    font-weight: 500;
    color: ${PURPLE2};
  }

  textarea {
    width: 100%;
    resize: none;
    height: 100px;
    border: none;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    padding: 10px;
    outline: none;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    padding: 20px;
  }

  @media (min-width: 1024px) {
 
  }
`;
