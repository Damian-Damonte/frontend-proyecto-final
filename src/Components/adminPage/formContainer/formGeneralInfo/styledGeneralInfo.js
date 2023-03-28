import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const GeneralInfoStyled = styled.div`
  padding: 25px;
`;

export const GeneralInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  label {
    font-weight: 500;
    font-size: 14px;
    color: ${PURPLE2};
  }

  textarea {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    resize: none;
    width: 100% !important;
    height: 300px !important;
    margin-top: 5px;

    &:focus {
      outline: 1px solid ${PRIMARY_COLOR};
    }
  }

  @media (min-width: 768px) {
    textarea {
      height: 150px !important;
      
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;

  label {
    font-weight: 500;
    font-size: 14px;
    color: ${PURPLE2};
  }

  input, select {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border: none;
    padding-left: 10px;
    height: 40px;
    font-size: 16px;

    &:focus {
      outline: 1px solid ${PRIMARY_COLOR};
    }
  }
`;
