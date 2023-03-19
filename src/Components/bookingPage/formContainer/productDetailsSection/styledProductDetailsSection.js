import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductDetailsSectionStyled = styled.div`
  /* background-color: blue; */
  width: 100%;

  @media (min-width: 1024px) {
    width: 33%;
    /* height: 100%; */
  }
`;

export const DetailSectionTitleCardContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  /* background-color: orange; */

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    margin-left: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 20px;
  }

  @media (min-width: 1024px) {
    margin-top: 42px;
    height: calc(100% - 42px);

    h3 {
      margin-left: 20px;
    }
  }
`;

export const DetailsImgContainer = styled.div`
  /* background-color: purple; */
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    height: calc(100% - 10px);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({$imgUrl}) => $imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
    height: auto;
    border-radius: 8px;
  }
`;

export const DetailsContainer = styled.div`
  /* background-color: #ccc; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: ${PURPLE2};
    opacity: 0.5;
  }

  h4 {
    font-weight: 700;
    font-size: 24px;
    color: ${PURPLE2};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
    padding: 0;
  }

  @media (min-width: 1024px) {
    margin-top: 20px;
    height: calc(100% - 200px);
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  font-weight: 700;
  color: ${PURPLE2};
  font-size: 14px;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
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

export const CheckInCheckOutContainer = styled.div`
  margin-top: 20px;
  padding: 0 10px;

  div:last-child {
    border-bottom: 1px solid rgba(56, 59, 88, 0.3);
  }
`;

export const CheckInCheckOut = styled.div`
  border-top: 1px solid rgba(56, 59, 88, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  p:first-child {
    font-weight: 700;
    color: ${PURPLE3};
    font-size: 16px;
  }

  p:last-child {
    color: ${PURPLE3};
    font-size: 14px;
    font-weight: 500;
  }
`;

export const BtnSubmit = styled.button`
  margin-top: 40px;
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

  &:hover {
    background-color: #15a39a;
  }
`;
