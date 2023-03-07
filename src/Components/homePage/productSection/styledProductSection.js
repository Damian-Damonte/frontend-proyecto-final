import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductContainerStyled = styled.div`
  padding: 10px;

  background-color: ${PURPLE2};

  h4 {
    font-size: 22px;
    color: #fff;
    font-weight: 500;
    margin-left: 15px;
  }
`;

export const ProductCardContainer = styled.div`
  margin-top: 10px;
`;

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    
  }
`;

export const ProductImgContainer = styled.div`
  position: relative;
  height: 190px;

  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    fill: #fff;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductCardDescriptionContainer = styled.div`
  padding: 10px;
  background-color: #fff;
`;

export const ProductCardTitleRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitleStars = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  h3 {
    color: ${PURPLE2};
    font-size: 24px;
  }
`;

export const CategoryStarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  p {
    font-weight: 500;
    color: rgba(56, 59, 88, 0.6);
    font-size: 14px;
  }
`;

export const StarsContainer = styled.div``;

export const CardRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 40%;

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
  }
`;


