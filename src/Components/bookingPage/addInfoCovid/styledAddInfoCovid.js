import styled from "styled-components";

export const AddInfoCovidContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 35px;
  margin-top: 25px;

  @media (min-width: 768px) {
    padding: 0px 20px;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0px 30px;
    gap: 25px;
  }
`;
