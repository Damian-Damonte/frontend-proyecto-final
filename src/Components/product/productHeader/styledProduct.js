import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

// export const ProductContainer = styled.div``;

// export const HeaderContainer = styled.div``;

export const ProductNameHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 60px; */
  background-color: ${PURPLE3};
  font-weight: 700;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
    cursor: pointer;
  }
`;

export const ProductLocationRatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const LocationContainer = styled.div`
  display: flex;
  max-width: 50%;
  align-items: flex-start;
  gap: 5px;
  font-weight: 700;
  color: ${PURPLE2};
  font-size: 14px;

  svg {
    height: 20px;
    fill: ${PURPLE3};
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

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

`
export const OpinionStarsContainer = styled.div`
  color: ${PURPLE3};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StarsContainer = styled.div`

`
