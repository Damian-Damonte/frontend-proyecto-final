import styled, { css } from "styled-components";

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
  min-height: 400px;

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
`;

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 450px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 850px;
  }
`;

export const ProductImgContainer = styled.div`
  position: relative;
  height: 200px;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

export const ProductCardDescriptionContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media (min-width: 768px) {
    width: 50%;
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
  font-weight: 500;
  margin-top: 15px;
  gap: 5px;

  p {
    color: ${PURPLE2};
    font-size: 14px;

    a {
      color: ${PRIMARY_COLOR};
      font-size: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;

      &:hover {
        color: #15a39a;
      }
    }
  }
`;

export const IconContainer = styled.div`
  width: 10px;
  svg {
    width: 100%;
    fill: ${PURPLE2};
    width: 10px;
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

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 500px;
`;

// pager

export const Pager = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ $random }) => ($random ? "center" : "space-between")};
  max-width: 450px;
  @media (max-width: 370px) {
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 768px) {
    max-width: 650px;
  }
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const PageNumberContainer = styled.div`
  display: flex;
  gap: 5px;
  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export const BtnPageNumber = styled.button`
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  cursor: ${({ $selected }) => ($selected ? "auto" : "pointer")};
  background-color: ${({ $selected }) => ($selected ? PRIMARY_COLOR : "#fff")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 700;

  &:hover {
    background-color: ${({ $selected }) =>
      $selected ? PRIMARY_COLOR : "#e7e7e7"};
  }

  @media (min-width: 768px) {
    height: 50px;
    width: 50px;
    font-size: 16px;
  }
`;

export const BtnNextPrev = styled.button`
  background-color: #fff;
  border: none;
  height: 30px;
  padding: 0 5px;
  border-radius: 5px;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }
  &:disabled {
    cursor: auto;
  }

  ${({ $disabled }) => {
    if ($disabled) {
      return css`
        color: #ccc;
        cursor: auto;
        &:hover {
          background-color: #fff;
        }
      `;
    }
  }};

  @media (max-width: 370px) {
    display: none;
  }
  @media (min-width: 768px) {
    height: 50px;
    padding: 0 20px;
    font-size: 16px;
  }
`;

export const BtnPrevNextMobile = styled.div`
  display: none;

  button {
    display: inline-block;
  }
  @media (max-width: 370px) {
    display: flex;
    gap: 10px;
  }
`;

export const BtnRefreshRandom = styled.button`
  background-color: #fff;
  border: none;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e7e7e7;
  }
`;
