import styled from "styled-components";

const skeletonGray = "#ECECEC";

export const ProductCardSkeletonStyled = styled.div`
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

export const H4Skeleton = styled.div`
  height: 30px;
  background-color: #ddd;
  width: 280px;
  align-self: flex-start;

  @media (max-width: 325px) {
    width: 100%;
  }
`;

export const ProductImgContainerSke = styled.div`
  position: relative;
  height: 200px;
  background-image: linear-gradient(to right, #ccc 0%, #e1e1e1 50%, #ccc 100%);
  background-size: 200% 100%;
  animation: skeleton-animation 1.5s linear infinite;

  @keyframes skeleton-animation {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

export const ProductCardDescriptionContainerSke = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const CategoryRatingContainerSke = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategorySkeleton = styled.div`
  background-color: ${skeletonGray};
  width: 90px;
  height: 20px;
`;
export const RatingContainerSke = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const RatingTextSke = styled.div`
  width: 50px;
  height: 18px;
  background-color: ${skeletonGray};
`;

export const RatingValueSke = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${skeletonGray};
  border-radius: 8px;
`;

export const TitleContainerSke = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;

  div {
    height: 26px;
    width: 150px;
    background-color: ${skeletonGray};
  }

  @media (min-width: 1200px) {
    height: 45px;
  }
`;

export const ProductCardLocationContainerSke = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 7px;
  height: 40px;

  div {
    height: 14px;
    width: 200px;
    background-color: ${skeletonGray};
  }
`;

export const ProductCardCaracteristicsSke = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 15px;

  div {
    height: 18px;
    width: 18px;
    background-color: ${skeletonGray};
    border-radius: 5px;
  }
`;

export const ProductCardDescriptionSke = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 7px;

  div {
    width: 100%;
    height: 12px;
    background-color: ${skeletonGray};
  }

  @media (min-width: 768px) {
    div:nth-of-type(4) {
      display: none;
    }
    div:nth-of-type(5) {
      display: none;
    }
  }
`;

export const BtnSubmitSke = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 41px;
  background-color: ${skeletonGray};
  margin-top: 20px;
`;

export const PriceContainerSke = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  margin-top: 15px;

  div:nth-last-of-type(1) {
    height: 24px;
    width: 80px;
    background-color: ${skeletonGray};
  }

  div:nth-last-of-type(2) {
    height: 14px;
    width: 140px;
    background-color: ${skeletonGray};
  }
`;
