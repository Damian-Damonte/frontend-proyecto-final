import styled, { css } from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";

export const GalleryDesktopContainer = styled.div`
  display: none;
  padding: 0px 20px;
  background-color: #fff;
  gap: 10px;
  position: relative;
  max-width: 1200px;
  width: 100%;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 180px 180px;
  grid-template-areas:
    "area1 area1 area2 area3"
    "area1 area1 area4 area5";

  ${({ $countImg }) => {
    switch ($countImg) {
      case 5:
        return css`
          div:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/3;
          }

          div:nth-child(2) {
            grid-row: 1/2;
            grid-column: 3/4;
          }

          div:nth-child(3) {
            grid-row: 1/2;
            grid-column: 4/5;
          }

          div:nth-child(4) {
            grid-row: 2/3;
            grid-column: 3/4;
          }
          div:nth-child(5) {
            grid-row: 2/3;
            grid-column: 4/5;
          }
        `;
      case 4:
        return css`
          div:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/3;
          }

          div:nth-child(2) {
            grid-row: 1/2;
            grid-column: 3/4;
          }

          div:nth-child(3) {
            grid-row: 1/2;
            grid-column: 4/5;
          }

          div:nth-child(4) {
            grid-row: 2/3;
            grid-column: 3/5;
          }
        `;
      case 3:
        return css`
          div:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/3;
          }

          div:nth-child(2) {
            grid-row: 1/2;
            grid-column: 3/5;
          }

          div:nth-child(3) {
            grid-row: 2/3;
            grid-column: 3/5;
          }
        `;

      case 2:
        return css`
          div:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/3;
          }

          div:nth-child(2) {
            grid-row: 1/3;
            grid-column: 3/5;
          }
        `;
      case 1:
        return css`
          div:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/5;
          }
        `;

      default:
        return null;
    }
  }}

  p {
    position: absolute;
    bottom: 10px;
    right: 40px;
    font-weight: 700;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  p:hover {
    color: ${PRIMARY_COLOR};
  }

  @media (min-width: 1000px) {
    display: grid;
  }

  @media (min-width: 1024px) {
    padding: 0px 30px;
  }
`;

export const ImgWithSkeletonStyled = styled.div`
  width: 100%;
  height: 100%;

  div {
    width: 100%;
    height: 100%;
    background-color: #eee;
    border-radius: 10px;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.2s shine linear infinite;
  }

  img {
    display: ${({ $imgLoaded }) => ($imgLoaded ? "block" : "none")};
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export const GalleryDesktopStyled = styled.div`
  position: fixed;
  height: calc(100vh - 70px - 50px);
  width: 100%;
  top: 70px;
  left: 0;
  background-color: rgba(84, 87, 118, 0.95);
  padding: 0 30px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  transform: ${({ $showGallery }) => ($showGallery ? "scale(1)" : "scale(0)")};

  > svg {
    position: absolute;
    height: 35px;
    top: 10px;
    right: 10px;
    cursor: pointer;
    fill: #fff;
    transition: all 0.3s ease;
  }

  > svg:hover {
    fill: ${PRIMARY_COLOR};
  }

  /* borrar */
  && .image-gallery {
    width: 100%;
  }

  && .image-gallery-slide img {
    height: 380px;
    width: 900px;
    object-fit: cover;
  }

  && .image-gallery-thumbnails .image-gallery-thumbnails-container {
    cursor: auto;
  }

  && .image-gallery-thumbnail-image {
    height: 60px;
    object-fit: cover;
    width: 92px;
    cursor: pointer;
  }

  && .image-gallery-icon:hover {
    color: ${PRIMARY_COLOR};
  }

  && .image-gallery-thumbnail.active {
    border: 4px solid ${PRIMARY_COLOR};
  }

  @media (min-width: 1500px) {
    && .image-gallery-slide img {
      height: 380px;
      width: 1000px;
      object-fit: cover;
    }
  }

  @media (min-width: 1700px) {
    && .image-gallery-slide img {
      height: 380px;
      width: 1200px;
      object-fit: cover;
    }

    && .image-gallery-thumbnail-image {
      height: 80px;
      object-fit: cover;
      width: 140px;
      cursor: pointer;
    }

    && .image-gallery-thumbnail {
      width: 150px;
    }
  }
`;
