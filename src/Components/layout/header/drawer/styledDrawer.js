import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";

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
  /* gap: 20px; */
  font-size: 16px;
  font-weight: 700;

  > p {
    cursor: pointer;
    color: #383b58;
    transition: all 0.2s ease;
    border-bottom: 1px solid ${PRIMARY_COLOR};
    width: 100%;
    text-align: right;
    padding: 20px 0px 5px 0;
    &:hover {
      background-color: #f2f2f2;
    }
  }

  /* div {
    width: 100%;
    height: 1px;
    background-color: #545776;
  } */
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
