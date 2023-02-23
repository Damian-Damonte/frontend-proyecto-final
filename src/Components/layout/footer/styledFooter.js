import styled, { css } from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1dbeb4;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  size: 14px;
  color: white;
`;
export const FooterTextContainer = styled.div`
  display: flex;
  justify-content: left;
`;
export const FooterIconContainer = styled.div`
  display: flex;
  justify-content:right;
  gap: 30px;
  margin-right: 1rem;
  font-weight: 300;
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 700;
  text-align: left;
  margin-left: 19px;

  svg {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
