import styled, { css } from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";

export const WidthLimitContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
`;

export const ProductContainerStyled = styled.div`
  padding: 10px 10px 30px;
  background-color: ${PURPLE2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  width: 100%;
  max-width: 1200px;

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
  gap: 30px;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
    row-gap: 30px;
    justify-items: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
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

  div {
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.3);
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0 0 5px;
  }

  svg {
    fill: ${({ $isFav }) => ($isFav ? "#fff" : "#fff")};
    cursor: ${({ $loadingContext }) =>
      $loadingContext ? "not-allowed" : "pointer"};
    transition: all 0.3s ease;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }

  @media (min-width: 1200px) {
    div {
      width: 30px;
      height: 30px;
    }
  }
`;

export const ProductCardDescriptionContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const CategoryRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryStarsContainer = styled.div`
  display: flex;
  width: calc(100% - 105px);
  flex-direction: column;
  flex-wrap: wrap;

  p {
    font-weight: 500;
    color: rgba(56, 59, 88, 0.6);
    font-size: 14px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* width: 70px; */

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

export const TitleContainer = styled.div`
  margin-top: 5px;
  /* height: 44px; */
  display: flex;
  align-items: center;

  h3 {
    color: ${PURPLE2};
    font-size: 20px;
    line-height: 22px;
    padding-bottom: 2px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 1200px) {
    height: 44px;
  }
`;

export const ProductCardLocationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: 500;
  margin-top: 10px;
  gap: 7px;

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

export const DirectionContainer = styled.div`
  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > a {
    color: ${PRIMARY_COLOR};
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      color: #15a39a;
    }
  }
`;

export const IconContainer = styled.div`
  width: 8px;
  svg {
    fill: ${PURPLE2};
    width: 10px;
    height: 20px;
  }
`;

export const ProductCardCaracteristics = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 15px;

  svg {
    fill: ${PURPLE2};
    font-size: 18px;
  }
`;

export const ProductCardDescription = styled.div`
  margin-top: 10px;

  p {
    color: ${PURPLE2};
    font-weight: 500;
    font-size: 14px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) {
    p {
      -webkit-line-clamp: 3;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 15px;

  h3 {
    color: ${PURPLE2};
    font-size: 20px;
    line-height: 22px;
    padding-bottom: 2px;
  }

  p {
    color: ${PURPLE2};
    font-weight: 500;
    font-size: 14px;
  }
`;

export const BtnDetails = styled.button`
  margin-top: 20px;
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
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 450px;
  gap: 40px;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
  @media (min-width: 768px) {
    max-width: 650px;
    margin: 40px 0px 5px;
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
  border-radius: 50px;
  cursor: ${({ $selected }) => ($selected ? "auto" : "pointer")};
  background-color: ${({ $selected }) => ($selected ? "#fff" : "transparent")};
  font-weight: 700;
  color: ${({ $selected }) => ($selected ? "#000" : "#fff" )};

  @media (min-width: 768px) {
    height: 35px;
    width: 35px;
    font-size: 16px;
    background-color: ${({ $selected }) =>
      $selected ? PURPLE2 : "transparent"};
    color: ${({ $selected }) => ($selected ? "#fff" : "#000" )};

    &:hover {
      background-color: ${({ $selected }) =>
        $selected ? PRIMARY_COLOR : "#f7f7f7"};
    }
  }
`;

export const BtnNextPrev = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  height: 30px;
  padding: 0 5px;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    cursor: auto;
  }

  svg {
    font-size: 28px;
    fill: #fff;
  }

  p {
    font-weight: 500;
    line-height: 8px;
    color: #fff;
  }

  ${({ $disabled }) => {
    if ($disabled) {
      return css`
        p {
          color: #888;
        }

        svg {
          fill: #888;
        }
      `;
    }
  }};

  @media (max-width: 500px) {
    display: none;
  }
  @media (min-width: 768px) {
    height: 40px;
    padding: 0 20px;
    font-size: 16px;

    &:hover {
      background-color: #e7e7e7;
      background-color: #f7f7f7;
    }

    p {
      color: #000;
    }

    svg {
      fill: #000;
    }

    ${({ $disabled }) => {
    if ($disabled) {
      return css`
        cursor: auto;
        p {
          color: #aaa;
        }
        svg {
          fill: #aaa;
        }
        &:hover {
          background-color: transparent;
        }
      `;
    }
  }};
  }
`;

export const BtnPrevNextMobile = styled.div`
  display: none;

  button {
    display: inline-block;
    color: #fff;
  }

  @media (max-width: 500px) {
    display: flex;
    gap: 20px;
  }
`;

export const BtnRefreshRandom = styled.button`
  background-color: transparent;
  border: none;
  height: 43px;
  padding: 0 20px;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 16px;
  outline: 1px solid #fff;
  color: #fff;

  @media (min-width: 768px) {
    outline: 1px solid ${PURPLE2};
    color: ${PURPLE2};

    &:hover {
      background-color: #efeff7;
    }
  }
`;
