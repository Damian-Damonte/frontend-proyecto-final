import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductContainerStyled = styled.div`
  padding: 10px 10px 30px;
  background-color: ${PURPLE2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 22px;
    color: #fff;
    font-weight: 500;
    align-self: flex-start;
  }

  @media (min-width: 768px) {
    background-color: #eeeeee;
    padding: 20px;

    h4 {
      color: ${PURPLE2};
      margin-left: 0;
    }
  }

  @media (min-width: 1200px) {
    padding: 20px 30px 30px;
  }
`;

export const ProductCardContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
    row-gap: 30px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const EmptyProductsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10px 10px;
  border-radius: 5px;
  
  img {
    height: 50px;
    width: 50px;
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    background-color: rgba(155, 161, 235, 0.3);
  }
`

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 450px;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: none;
    align-items: center;
    justify-content: space-between;
    max-width: 850px;
  }
`;

export const ProductImgContainer = styled.div`
  position: relative;
  height: 200px;

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    fill: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  svg:hover {
    fill: ${PURPLE2};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    width: 45%;
    height: 100%;
  }
`;

export const ProductCardDescriptionContainer = styled.div`
  padding: 15px;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

export const ProductCardTitleRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitleStars = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 70px);
  margin-right: 5px;
  h3 {
    color: ${PURPLE2};
    font-size: 24px;
  }
`;

export const CategoryStarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap-reverse;

  p {
    font-weight: 500;
    color: rgba(56, 59, 88, 0.6);
    font-size: 14px;
    margin-right: 10px;
  }
`;

export const StarsContainer = styled.div``;

export const CardRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 70px;

  p:first-child {
    background-color: ${PURPLE2};
    height: 30px;
    width: 30px;
    border-radius: 8px;
    font-weight: 700;
    color: #fff;
    line-height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p:last-child {
    color: ${PURPLE2};
    font-weight: 700;
    text-align: right;
    font-size: 12px;
  }
`;

export const ProductCardLocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 15px;
  font-weight: 500;

  p:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    color: ${PURPLE2};
    font-size: 14px;

    svg {
      fill: ${PURPLE2};
      width: 10px;
      height: 15px;
    }
  }

  p:last-child {
    color: ${PRIMARY_COLOR};
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #15a39a;
    }
  }
`;

export const ProductCardCaracteristics = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;

  svg {
    fill: ${PURPLE2};
    font-size: 18px;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ProductCardDescription = styled.div`
  margin-top: 15px;

  p {
    color: ${PURPLE2};
    font-weight: 500;
    font-size: 14px;

    span {
      color: ${PRIMARY_COLOR};
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        color: #15a39a;
      }
    }
  }
`;

export const BtnDetails = styled.button`
  margin-top: 15px;
  background-color: ${PRIMARY_COLOR};
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #15a39a;
  }
`;
