import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";
const PURPLE3 = "#545776";

export const ProductImagesStyled = styled.div`
  margin-top: 10px;
  padding: 0 10px;

  p:last-child {
    color: #ff0000;
    font-weight: 500;
    font-size: 12px;
    min-width: 10px;
    min-height: 16px;
    text-align: right;
  }

  @media (min-width: 768px) {
    margin-top: 30px;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    margin-top: 40px;
    padding: 0 25px;
  }
`;

export const AllImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
  height: ${({ $countImg }) =>
    $countImg * 80 + ($countImg && $countImg - 1) * 15 + "px"};
  transition: all 0.4s ease;

  @media (min-width: 768px) {
    height: ${({ $countImg }) =>
      $countImg * 100 + ($countImg && $countImg - 1) * 15 + "px"};
  }
`;

export const ImageCardStyled = styled.div`
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 15px;
  border-radius: 5px;
  margin-top: ${({ $marginTop }) => ($marginTop ? "15px" : "0px")};

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
    cursor: ${({ $static }) => ($static ? "default" : "pointer")};

    &::placeholder {
      color: ${({ $static }) => ($static ? "#bebebe" : PURPLE3)};
    }

    &:focus {
      outline: 1px solid ${PRIMARY_COLOR};
    }
  }

  @media (min-width: 768px) {
    padding: 30px 25px;
  }
`;

export const AddImage = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  align-self: flex-start;
  border: none;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
    fill: ${({ $static }) => ($static ? PRIMARY_COLOR : PURPLE3)};
    transition: all 0.3s ease;

    &:hover {
      fill: ${({ $static }) => ($static ? "#15a39a" : "#41435c")};
    }
  }
`;
