import styled from "styled-components";

const PURPLE2 = "#383B58";

export const WidthLimitContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content:center;
`

export const CategoryContainerStyled = styled.section`
  padding: 20px 10px 30px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 300px;
  width: 100%;
  max-width: 1200px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: ${PURPLE2};
    margin-bottom: 10px;
  }
  
  @media (min-width: 670px) {
    padding: 20px 20px 30px;
  }

  @media (min-width: 1200px) {
    padding: 10px 30px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: 20px;
  grid-template-columns: 1fr;

  div {
    align-self: center;
    justify-self: center;
  }

  @media (min-width: 670px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    div:nth-child(odd) {
      justify-self: end;
    }
    div:nth-child(even) {
      justify-self: start;
    }
  }

  @media (min-width: 1200px) {
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

export const CategoryCardStyled = styled.div`
  padding-bottom: 15px;
  max-width: 420px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: 700;
  color: ${PURPLE2};
  cursor: pointer;
  position: relative;

  outline: ${({ $selected }) => $selected ? `3px rgb(87, 92, 160) solid` : "none"};

  div {
    position:absolute;
    height:100%;
    width:100%;
    background-color: ${({ $selected }) => $selected ? "rgba(155, 161, 235, 0.3)" : "none"};
  }

  img {
    width: 100%;
    object-fit: cover;
    max-height: 140px;
    object-position: center;
  }

  h3 {
    margin-top: 5px;
    font-size: 20px;
    margin-left: 15px;
  }

  p {
    font-size: 14px;
    margin-left: 15px;
    margin-top: 5px;
    color: rgba(56, 59, 88, 0.6);
  }

  @media (min-width: 1200px) {
    p {
      margin-top: 0;
    }
  }
`;

export const ErrorCategory = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(155, 161, 235, 0.3);
  padding: 10px 10px;
  border-radius: 5px;
  max-width: 479px;
  align-self: center;
  
  img {
    height: 50px;
    width: 50px;
    margin-right: 5px;
  }
`
