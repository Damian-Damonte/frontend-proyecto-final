import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const ProductDetailsSectionStyled = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 33%;
  }
`;

export const DetailSectionTitleCardContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 24px;
    margin-left: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 20px;
    h3 {
      margin-left: 0;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 42px;
    height: calc(100% - 42px);

    h3 {
      margin-left: 20px;
      margin-bottom: 5px;
    }
  }
`;

export const DetailsImgContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    gap: 15px;
  }

  @media (min-width: 1024px) {
    height: calc(100% - 10px);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 260px;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
    height: auto;
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    height: 300px;
  }
`;

export const DetailsContainer = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 15px;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
    padding: 0;
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    margin-top: 25px;
    height: calc(100% - 325px);
  }
`;

export const ProductDetailsContainer = styled.div`
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
`;

export const StarsContainer = styled.div`
  @media (min-width: 1024px) {
    margin-top: 5px;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  font-weight: 700;
  color: ${PURPLE2};
  font-size: 14px;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
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
  padding: 13px 0;

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

  @media (min-width: 1024px) {
    padding: 22px 10px;
  }
`;

export const BtnValidationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ $error }) => $error ? "#ff0000" : "transparent"};
    text-align: center;
    cursor: default;
    font-size: 14px;
    font-weight: 500;
    height: 38px;
    min-width: 10px;
    display: flex;
    align-items: center;
  }
`

export const BtnSubmit = styled.button`
  margin-top: 10px;
  width: 100%;
  border: none;
  background-color: ${PRIMARY_COLOR};
  color: #fff;
  font-weight: 700;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 0.3s ease;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #15a39a;
  }
`;
