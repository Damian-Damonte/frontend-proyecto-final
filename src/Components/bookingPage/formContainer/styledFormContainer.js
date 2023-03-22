import styled from "styled-components";

export const FormBookingContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
    gap: 25px;
    margin-top: 20px;
  }
`;

export const ErrorMessageContainer = styled.div`
  margin: 200px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(155, 161, 235, 0.3);
  padding: 10px 10px;
  border-radius: 5px;
  width: 90%;
  max-width: 700px;
  align-self: center;

  img {
    height: 50px;
    width: 50px;
    margin-right: 5px;
  }
`;
