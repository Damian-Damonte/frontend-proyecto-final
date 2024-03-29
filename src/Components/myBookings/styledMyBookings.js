import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const MyBookingsStyled = styled.div`
  padding: 20px 10px;
  width: 100%;
  max-width: 1200px;

  > h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${PURPLE2};
  }

  @media (min-width: 768px) {
    padding: 20px 20px;
  }
  @media (min-width: 1024px) {
    padding: 20px 30px 40px;
  }
`;

export const MyBookingsHeader = styled.div`
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${PURPLE3};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 1200px;

  h3 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: #fff;
  }

  svg {
    fill: #fff;
    height: 25px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      fill: ${PRIMARY_COLOR};
    }
  }

  @media (min-width: 768px) {
    padding: 15px 20px;
    box-shadow: none;
  }
  @media (min-width: 1024px) {
    padding: 15px 30px;
  }
`;

export const NoBookings = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const NoBookingsContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px 30px 40px;
  width: 90%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  max-width: 640px;
  gap: 25px;

  svg {
    font-size: 60px;
    fill: ${PRIMARY_COLOR};
  }

  h4 {
    color: ${PRIMARY_COLOR};
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  p {
    color: ${PURPLE2};
    font-weight: 500;
    font-size: 16px;
    text-align: center;
  }

  button {
    width: 100%;
    max-width: 205px;
    border: none;
    background-color: ${PRIMARY_COLOR};
    color: #fff;
    font-weight: 700;
    border-radius: 5px;
    font-size: 18px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    transition: all 0.3s ease;
    height: 40px;
    margin-top: 20px;

    &:hover {
      background-color: #15a39a;
    }
  }

  @media (min-width: 768px) {
  }
`;

export const BookingCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 450px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  > div:last-child {
    border-radius: 0px 0px 10px 10px;
    height: calc(100% - 40px);
    box-shadow: none;
  }

  @media (max-width: 415px) {
    > div:last-child {
      height: calc(100% - 80px);
    }
  }

  @media (min-width: 768px) {
    max-width: 850px;
  }
`;

export const DatesContainer = styled.div`
  display: flex;
  padding: 8px;
  gap: 30px;

  background-color: #fff;
  border-radius: 10px 10px 0 0;
  height: 40px;

  > p {
    font-weight: 500;
    font-size: 16px;
  }

  @media (max-width: 415px) {
    flex-direction: column;
    gap: 5px;
    height: 65px;
  }
`;

export const ErrorMessageContainer = styled.div`
  margin: 200px auto;
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

export const BookingCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
    column-gap: 25px;
    row-gap: 30px;
    justify-content: center;
    justify-items: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(266px, 266px));
    justify-content: start;
    justify-items: center;
  }
`;

export const BookingCardStyled = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 350px;
`;

export const ImgContainer = styled.div`
  height: 200px;
  width: 100%;
  height: 150px;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const BookingInfoContainer = styled.div`
  width: 100%;
  padding: 10px;

  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: ${PURPLE2};
    opacity: 0.5;
  }

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 20px;
  }
`;

export const TitleContainer = styled.div`
  height: 54px;
  display: flex;
  align-items: center;

  h3 {
    color: ${PURPLE2};
    font-weight: 700;
    font-size: 20px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
  height: 34px;

  p {
    font-weight: 500;
    color: ${PURPLE2};
    font-size: 13px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const IconContainer = styled.div`
  width: 10px;
  display: flex;
  align-items: center;

  svg {
    fill: ${PURPLE2};
    width: 10px;
  }
`;

export const BookingDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  /* gap: 5px; */

  > div:nth-of-type(2) {

    border-top: 1px solid rgba(56, 59, 88, 0.3);
  }

  > div:nth-of-type(3) {
    /* border-top: 1px solid rgba(56, 59, 88, 0.3); */
    /* padding: 0 5px; */

    p:first-child {
      font-weight: 700;
      color: ${PURPLE3};
      font-size: 20px;
    }

    p:last-child {
      color: ${PURPLE3};
      font-size: 18px;
      font-weight: 500;
      white-space: nowrap;
    }
  }
`;

export const BookingDetail = styled.div`
  /* border-top: 1px solid rgba(56, 59, 88, 0.3); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  gap: 5px;

  p:first-child {
    font-weight: 700;
    color: ${PURPLE3};
    font-size: 16px;
  }

  p:last-child {
    color: ${PURPLE3};
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    /* padding: 5px 10px; */
  }

  @media (min-width: 1024px) {
    /* padding: 5px 5px; */
  }
`;

export const BtnDetails = styled.button`
  margin-top: 15px;
  width: 100%;
  border: none;
  background-color: ${PRIMARY_COLOR};
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 0.3s ease;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #15a39a;
  }
`;
