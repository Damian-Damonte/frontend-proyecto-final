import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE2 = "#383B58";
const PURPLE3 = "#545776";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
`;

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-bottom: 15px;
  width: 638px;
  height: 302px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: white;
  padding: 24px;

  @media only screen and (min-width: 414px) and (max-width: 767px) {
    width: 357px;
    height: 300px;
  }
`;

export const SuccessBookingContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  text-align: center;

  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${PRIMARY_COLOR};
    margin-top: 24px;
    margin-bottom: -10px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    margin-top: 16px;
  }

  spam {
    margin-top: 32px;
    width: 78px;
    height: 74px;
  }

  svg {
    /* 
    Damo le puse el spam para evitar q se achique
    despuś si queres lo refactorizas
    margin-top:32px;
    width: 78px;
    height: 74px; */
  }

  button[type="submit"] {
    margin-top: ${({ singin }) => (singin ? "10px" : "20px")};
    width: 206px;
    height: 40px;
    background-color: ${PRIMARY_COLOR};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    transition: all ease 0.3s;
    margin-bottom: 47px;

    &:hover {
      background-color: #1ca79d;
    }
  }

  @media only screen and (min-width: 414px) and (max-width: 767px) {
    spam {
      margin-top: 49px;
      width: 78px;
      height: 74px;
    }

    h3 {
      font-size: 20px;
      line-height: 23.44px;
      margin-top: 28px;
    }
    p {
      font-size: 16px;
      line-height: 18px;
    }
  }
`;
