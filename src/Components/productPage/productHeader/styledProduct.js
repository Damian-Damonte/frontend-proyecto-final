import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const WidthLimitContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const ErrorMessageContainer = styled.div`
  margin: 100px auto;
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

export const ProductNameHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${PURPLE3};
  font-weight: 700;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 1200px;
  width: 100%;
  gap: 10px;

  > div {
    width: calc(100% - 25px);
  }

  p {
    font-size: 14px;
  }

  h3 {
    font-size: 24px;
    line-height: 24px;
  }

  svg {
    fill: #fff;
    height: 25px;
    width: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  svg:hover {
    fill: ${PRIMARY_COLOR};
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    box-shadow: none;
  }
  @media (min-width: 1024px) {
    padding: 10px 30px;
  }
`;

export const ProductLocationRatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 320px) {
    /* flex-direction: column;
    align-items: center; */
    gap: 10px;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
  @media (min-width: 1024px) {
    padding: 10px 30px;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  max-width: 57%;
  align-items: center;
  gap: 5px;
  /* width: calc(100% - 121px); */
  width: fit-content;

  /* @media (max-width: 320px) {
    max-width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 100%;
  } */
`;

export const TextLocationContainer = styled.div`
  p {
    font-weight: 700;
    color: ${PURPLE2};
    font-size: 14px;
  }

  p:last-child {
    display: none;
  }

  @media (min-width: 768px) {
    p:last-child {
      display: block;
    }
  }
`;

export const IconContainer = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    height: 20px;
    fill: ${PURPLE3};
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  column-gap: 10px;
  width: fit-content;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: flex-end;


  > p {
    color: #fff;
    background-color: ${PURPLE3};
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    line-height: 0px;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const OpinionStarsContainer = styled.div`
  color: ${PURPLE3};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnsPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 5px 10px 10px;
  max-width: 1200px;
  width: 100%;
  /* background-color: red; */

  @media (min-width: 768px) {
    display: flex;
    padding: 5px 20px 10px;
  }

  @media (min-width: 1024px) {
    padding: 10px 30px 10px;
  }
`;

export const BtnShareFavContainer = styled.div`
  background-color: #fff;
  /* padding: 10px 20px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  /* max-width: 1200px; */
  /* width: 100%; */

  svg {
    fill: ${PURPLE3};
    cursor: pointer;
    transition: all 0.3s ease;
    height: 23px;
    width: 23px;
  }

  @media (min-width: 768px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    /* padding: 15px 30px; */
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    color: #383b58;
    font-weight: 500;
    font-size: 14px;
  }
  h4 {
    color: #383b58;
    font-size: 20px;
    line-height: 22px;
    padding-bottom: 2px;
  }
`;
