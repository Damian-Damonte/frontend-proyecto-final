import styled from "styled-components";

const PURPLE3 = "#545776";

export const WidthLimitContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background-color: #1dbeb4;
`;

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1dbeb4;
  padding: 1rem;
  z-index: 10;
  height: 50px;
  width: 100%;
  size: 14px;
  color: white;
  width: 100%;
  max-width: 1800px;
`;
export const FooterTextContainer = styled.div`
  display: flex;
  justify-content: left;
`;
export const FooterIconContainer = styled.div`
  display: flex;
  justify-content: right;
  gap: 30px;
  margin-right: 1rem;
  font-weight: 300;
  font-size: 14px;
  color: #ffffff;
  font-weight: 700;
  text-align: left;
  margin-left: 19px;

  svg {
    cursor: pointer;
    fill: #fff;
    transition: all 0.25s ease;
  }

  svg:hover {
    fill: #ccc;
    fill: ${PURPLE3};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
