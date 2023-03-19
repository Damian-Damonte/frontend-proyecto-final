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
  gap: 10px;
  margin-top: 10px;
  padding: 10px 10px 25px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
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
  background-color: #f2f4f7;
  font-size: 14px;
  font-weight: 500;
  padding-left: 10px;
  color: ${PURPLE3};
`;
