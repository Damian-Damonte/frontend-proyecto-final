import styled from "styled-components";

export const FormBookingContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* background-color: cadetblue; */
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 10px;

  @media (min-width: 768px) {
    padding: 10px 20px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: stretch;
    padding: 10px 30px;
  }
`;
