import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const CoordinatesStyled = styled.div`
  margin-top: 20px;

`

export const CoordinatesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 5px;
    column-gap: 20px;
  }
`;

export const CoordinatesInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  position: relative;

  label {
    font-weight: 500;
    font-size: 14px;
    color: ${PURPLE2};
  }

  input,
  select {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border: none;
    padding-left: 10px;
    height: 40px;
    font-size: 14px;

    &:focus {
      outline: 1px solid ${PRIMARY_COLOR};
    }
  }

  > p:last-child {
    color: #ff0000;
    font-weight: 500;
    font-size: 12px;
    text-align: right;
    min-width: 10px;
    min-height: 16px;
    align-self: flex-end;
  }
`;