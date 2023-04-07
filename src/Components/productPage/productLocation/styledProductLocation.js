import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";

export const ProductLocationStyled = styled.div`
  background-color: #fff;
  margin-top: 30px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    padding: 20px 10px 10px;
    max-width: 1200px;
    width: 100%;
  }

  @media (min-width: 768px) {
    h3 {
      padding: 20px 20px 10px;
    }
  }

  @media (min-width: 1024px) {
    h3 {
      padding: 20px 30px 10px;
    }
  }
`;

export const LineaDivisoria = styled.div`
  width: 100%;
  background-color: ${PRIMARY_COLOR};
  height: 1px;
`;

export const MapSection = styled.div`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;

  p {
    font-weight: 500;
  }

  > div {
    margin-top: 15px;
  }

  > button {
    margin: 20px auto 0 auto;
    width: 100%;
    border: none;
    background-color: ${PRIMARY_COLOR};
    color: #fff;
    font-weight: 700;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: all 0.3s ease;
    max-width: 300px;

    &:hover {
      background-color: #15a39a;
    }
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
  }

  @media (min-width: 1024px) {
    padding: 10px 30px;

    img {
      height: 400px;
    }
  }
`;
