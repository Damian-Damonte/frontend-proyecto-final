import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const FormUserDataContainer = styled.div`
  width: 100%;

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
  }
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-top: 10px;
  padding: 15px 10px 20px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px 20px;
    gap: 20px;
  }
`;

export const InputLabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const UserDataLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: ${PURPLE2};
`;

export const UserDataInput = styled.input`
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
  color: ${PURPLE3};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  :disabled {
    background-color: #f2f4f7;
    cursor: not-allowed;
  }

  :focus {
    outline: 1px solid ${PRIMARY_COLOR};
  }
`;
