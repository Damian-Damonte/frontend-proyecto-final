import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE3 = "#545776";

export const ProductNameHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${PURPLE3};
  font-weight: 700;
  color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 1200px;

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

