import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const HeaderStyled = styled.header`
  height: 70px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  z-index: 100;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 1px 10px rgba(0, 0, 0, 0.2);

  > svg {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 0 20px;
    box-shadow: none;
    > svg {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 30px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  cursor: pointer;

  svg {
    height: 45px;
    box-sizing: content-box;
  }

  span {
    display: none;
    margin: 0 0 5px 8px;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    color: var(--secondo-color);
  }

  @media (min-width: 1024px) {
    span {
      display: inline-block;
    }
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  svg {
    display: none;
    position: absolute;
    height: 15px;
    top: 0;
    right: 0;
    cursor: pointer;
    fill: #000;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    position: relative;

    svg {
      display: block;
    }
  }
`;

export const ProfileIcon = styled.p`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 20px;
  color: ${PURPLE3};
  font-weight: 700;
  line-height: 10px;

  @media (min-width: 768px) {
    background: #383b58;
    color: #fff;
  }
`;

export const ProfileNameContainer = styled.div`
  text-align: right;
  color: #fff;
  font-weight: 700;
  font-size: 16px;

  & p:last-child {
    color: ${PURPLE2};
  }

  @media (min-width: 768px) {
    text-align: left;
    font-weight: 700;
    font-size: 16px;
    margin-left: 10px;

    & > p:first-child {
      color: rgba(0, 0, 0, 0.5);
      line-height: 16px;
    }

    & > p:last-child {
      color: ${PRIMARY_COLOR};
    }
  }
`;

export const HeaderOptionsDesktop = styled.div`
  display: none;
  justify-content: space-between;
  gap: 5px;
  position: relative;

  button {
    border: solid 1px ${PRIMARY_COLOR};
    border-radius: 5px;
    height: 40px;
    width: 160px;
    background-color: #fff;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const UserProfileContainerDesktop = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.2s ease;


  &:hover {
    background-color: #f2f2f2;
  }
`;

export const AdminContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.2s ease;

  p {
    font-weight: 700;
    font-size: 16px;
    color: ${PURPLE3};
    line-height: 8px;
  }

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const LineaDivisoria = styled.div`
  width: 2px;
  height: 50px;
  background-color: ${PRIMARY_COLOR};
`;
