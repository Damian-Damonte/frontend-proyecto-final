import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE3 = "#545776";

export const ImgContainerStyled = styled.div`
  margin-top: 10px;
  padding: 0 10px;

  @media (min-width: 768px) {
    margin-top: 30px;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    margin-top: 40px;
    padding: 0 25px;
  }
`;

export const AddImgContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  padding: 25px 20px 9px;
  border-radius: 5px;
  margin-top: 15px;

  > p {
    color: #ff0000;
    font-weight: 500;
    font-size: 12px;
    min-width: 10px;
    min-height: 17px;
  }

  @media (max-width: 312px) {
    > p {
      min-height: 32px;
    }
  }

  @media (min-width: 768px) {
    padding: 30px 25px 16px;
  }
`;

export const InputBtnContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;

  input {
    border-radius: 5px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    border: none;
    background-color: #fff;
    padding: 10px;
    height: 40px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    color: ${PURPLE3};
    width: calc(100% - 40px);
    cursor: pointer;

    &::placeholder {
      color: #bebebe;
    }

    &:focus {
      outline: 1px solid ${PRIMARY_COLOR};
    }
  }
`;

export const AddImage = styled.div`
  height: 40px;
  width: 40px;
  cursor: ${({ $loading }) => ($loading ? "default" : "pointer")};
  align-self: center;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${PRIMARY_COLOR};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ $loading }) => ($loading ? PRIMARY_COLOR : "#15a39a")};
  }

  svg {
    font-size: 35px;
    fill: #fff;
  }
`;

export const AddedImgContainer = styled.div`
  margin-top: 20px;
  height: 180px;
  padding: 5px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  overflow-x: scroll;
  border-radius: 5px;

  justify-content: ${({$empty}) => $empty ? "center" : "flex-start"};
  align-items: ${({$empty}) => $empty ? "center" : "flex-start"};
`;

export const ImgItemStyled = styled.div`
  height: 133px;
  width: 133px;
  margin: 10px;
  flex-shrink: 0;
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  &:hover div:nth-of-type(1) {
    display: flex;
  }
`;

export const BtnContainer = styled.div`
  display: none;
  height: 43px;
  width: 43px;
  position: absolute;
  top: 46px;
  left: 46px;
  background-color: red;
  background-color: ${PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;

  svg {
    font-size: 20px;
    fill: ${PRIMARY_COLOR};
    fill: #fff;
  }
`;

export const PrincipalImg = styled.div`
  height: 20px;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: ${PRIMARY_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 500;
    color: #fff;
    line-height: 12px;
  }
`;

export const EmptyImages = styled.div`
  p {
    font-size: 20px;
    color: #ccc;
    font-weight: 500;
    text-align: center;
  }
`