import styled from "styled-components";

export const GalleryMobileContainer = styled.div`
  position: relative;

  && .image-gallery-slide img {
    height: 280px;
    width: 100% ;
    object-fit: cover ;
  }

  && .image-gallery-index {
    bottom: 0 ;
    top: auto ;
  }

  @media (min-width: 999px) {
    display: none;
  }
`;

export const BtnsContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: none;
  gap: 15px;
  background-color: rgba(0,0,0,0.2);
  padding: 5px;

  svg {
    cursor: pointer;
    fill: #fff;
    transition: all 0.3s ease;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
