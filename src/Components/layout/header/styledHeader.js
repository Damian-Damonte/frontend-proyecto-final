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
  padding: 0 20px;
  z-index: 100;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12),
    0px 1px 10px rgba(0, 0, 0, 0.2);

  > svg {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    padding: 0 30px;
    box-shadow: none;
    > svg {
      display: none;
    }
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

export const DrawerContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  transition: 0.6s all ease;
  background-color: ${({ $showDrawer }) =>
    $showDrawer ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.0)"};
  pointer-events: ${({ $showDrawer }) => ($showDrawer ? "auto" : "none")};

  & > div:first-child {
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DrawerStyled = styled.div`
  position: absolute;
  top: 0;
  right: ${({ $showDrawer }) => ($showDrawer ? "0" : "-75%")};
  height: 100vh;
  width: 70%;
  max-width: 300px;
  background-color: #bdbdbd;
  transition: 0.6s all ease;
  z-index: 1000;
`;

export const TopSectionDrawer = styled.div`
  height: 25%;
  background-color: #1dbeb4;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  & > svg:first-child {
    height: 20px;
    cursor: pointer;
    align-self: flex-start;
    fill: #fff;
  }
`;

export const PMenu = styled.p`
  align-self: flex-end;
  color: white;
  font-weight: 700;
  font-size: 20px;
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

  @media (min-width: 768px) {
    background: #383b58;
    color: #fff;
  }
`;

export const ProfileNameContainer = styled.div`
  margin-top: 5px;
  text-align: right;
  color: #fff;
  font-weight: 700;
  font-size: 16px;

  & p:last-child {
    color: ${PURPLE2};
  }

  @media (min-width: 768px) {
    text-align: left;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 700;
    font-size: 16px;
    margin-left: 10px;

    & > p:last-child {
      color: ${PRIMARY_COLOR};
    }
  }
`;

export const BottomSectionDrawer = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 10px 10px;
  background-color: rgb(255, 255, 255);
`;

export const BottomSectionDrawerOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;

  p {
    cursor: pointer;
    color: #383b58;
    transition: all 0.2s ease;

    &:hover {
      color: #383b58aa;
    }
  }

  div {
    width: 100%;
    height: 1px;
    background-color: #545776;
  }
`;

export const CloseSissionAndSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  gap: 30px;
`;

export const CloseSessionContainer = styled.div`
  width: 100%;
  text-align: right;
  padding-bottom: 5px;
  border-bottom: solid 1px #545776;
  font-size: 12px;
  font-weight: 500;

  span {
    color: ${PRIMARY_COLOR};
    cursor: pointer;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 10px;

  svg {
    cursor: pointer;
  }
`;

export const HeaderOptionsDesktop = styled.div`
  display: none;
  justify-content: space-between;
  gap: 10px;
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
