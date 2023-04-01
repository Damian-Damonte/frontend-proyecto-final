import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const PoliciesStyled = styled.div`
  margin-top: 30px;
  padding: 0 10px;

  @media (min-width: 768px) {
    padding: 0 20px;
  }

  @media (min-width: 1024px) {
    padding: 0 25px;
  }
`;

export const AllPoliciesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 10px;
  padding: 10px;
  row-gap: 20px;

  @media (min-width: 768px) {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 30px;
    row-gap: 25px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
  }

  @media (min-width: 1200px) {
    column-gap: 35px;
  }
`;

export const PolicyContainer = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-weight: 700;
    font-size: 18px;
    color: ${PURPLE3};
  }

  label {
    font-weight: 500;
    font-size: 14px;
    color: ${PURPLE2};
    margin-top: 7px;
  }

  textarea {
    border: none;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    resize: none;
    height: 120px;
    font-size: 14px;
    padding: 10px;
    margin-top: 7px;

    &:focus {
      outline: 1px solid ${PRIMARY_COLOR};
    }
  }

  p {
    color: #ff0000;
    font-weight: 500;
    font-size: 12px;
    min-width: 10px;
    min-height: 17px;
    margin-top: 5px;
    align-self: flex-end;
  }

  @media (min-width: 1024px) {
    label {
      margin-top: 15px;
    }

    textarea {
      height: 200px;
      margin-top: 10px;
    }
  }
`;
