import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductLocationStyled = styled.div`
  background-color: #fff;
  margin-top: 30px;
  padding-bottom: 20px;
  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    border-bottom: 1px solid ${PRIMARY_COLOR};
    padding: 20px 10px 10px;
  }

  @media (min-width: 768px) {
    h3 {
      padding: 20px 20px 10px ;
    }
  }

  @media (min-width: 1024px) {
    h3 {
      padding: 20px 30px 10px ;
    }
  }
`;

export const MapSection = styled.div`
  padding: 10px 10px;

  p {
    font-weight: 500;

  }

  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
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

