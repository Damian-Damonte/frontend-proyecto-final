import styled, { css } from "styled-components";

export const GalleryDesktopContainer = styled.div`
  display: none;
  padding: 10px 30px;
  background-color: #fff;
  gap: 10px;
  position: relative;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 180px 180px;
  grid-template-areas:
    "area1 area1 area2 area3"
    "area1 area1 area4 area5";


  ${({ $countImg }) => {
    switch ($countImg) {
      case 5:
        return css`
          img:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/3;
          }

          img:nth-child(2) {
            grid-row: 1/2;
            grid-column: 3/4;
          }

          img:nth-child(3) {
            grid-row: 1/2;
            grid-column: 4/5;
          }

          img:nth-child(4) {
            grid-row: 2/3;
            grid-column: 3/4;
          }
          img:nth-child(5) {
            grid-row: 2/3;
            grid-column: 4/5;
          }
        `;
      case 4:
        return css`
          img:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/3;
          }

          img:nth-child(2) {
            grid-row: 1/2;
            grid-column: 3/4;
          }

          img:nth-child(3) {
            grid-row: 1/2;
            grid-column: 4/5;
          }

          img:nth-child(4) {
            grid-row: 2/3;
            grid-column: 3/5;
          }
        `;
      case 3:
        return css`
          img:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/3;
          }

          img:nth-child(2) {
            grid-row: 1/2;
            grid-column: 3/5;
          }

          img:nth-child(3) {
            grid-row: 2/3;
            grid-column: 3/5;
          }
        `;

      case 2:
        return css`
          img:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/3;
          }

          img:nth-child(2) {
            grid-row: 1/3;
            grid-column: 3/5;
          }
        `;
      case 1:
        return css`
          img:nth-child(1) {
            grid-row: 1/3;
            grid-column: 1/5;
          }
        `;

      default:
        return null;
    }
  }}

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }

  p {
    position: absolute;
    bottom: 20px;
    right: 40px;
    font-weight:700;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    padding: 5px 10px;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 1000px) {
    display:grid;
  }
`;
