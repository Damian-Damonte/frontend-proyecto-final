import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE3 = "#545776";

export const ProductNameHeader = styled.div`
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${PURPLE3};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 1800px;

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
    padding: 15px 40px;
  }
`;
