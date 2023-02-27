import styled from "styled-components";

const PRIMARY_COLOR = "#1DBEB4";

export const FormContainer = styled.div`
  min-height: calc(100vh - 120px);
  padding: 0 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const FormUser = styled.form`
  margin-top: ${({ singin }) => (singin ? "10px" : "20px")};
  height: 100%;
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: ${({ singin }) => (singin ? "5px" : "60px")};
    font-size: 24px;
    color: ${PRIMARY_COLOR};
  }

  @media (min-width: 768px) {
    margin-top: 0px;
    max-width: 346px;

    h1 {
      margin-bottom: ${({ singin }) => (singin ? "10px" : "40px")};
      margin-top: ${({ singin }) => (singin ? "5px" : "auto")};
    }
  }

  @media (min-width: 1024px) {
    margin-top: ${({ singin }) => (singin ? "0px" : "20px")};
    max-width: 448px;
  }
`;

export const FormFieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-weight: 500;
  }

  input {
    margin-top: 5px;
    height: 40px;
    width: 100%;
    font-weight: 500;
    font-size: 12px;
    padding-left: 15px;
    border-radius: 5px;
    border: ${({ $error }) => ($error ? "solid 1px #ff0000" : "none")};
    background-color: ${({ $error }) => ($error ? "#ffe1e1" : "none")};
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  }

  p {
    color: #ff0000;
    font-weight: 500;
    font-size: 12px;
    text-align: right;
    min-width: 10px;
    min-height: 16px;
  }
`;

export const InputPasswordContainer = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    svg {
      fill: ${({ $showPassword }) =>
        $showPassword ? PRIMARY_COLOR : "#607D8B"};
    }
  }
`;

export const SubmitSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  p:first-child {
    color: #ff0000;
    font-weight: 500;
    font-size: 12px;
    text-align: right;
    min-width: 10px;
    min-height: 16px;
    text-align: center;
  }

  button[type="submit"] {
    margin-top: ${({ singin }) => (singin ? "10px" : "20px")};
    width: 100%;
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

    &:hover {
      background-color: #1ca79d;
    }
  }

  p:last-child {
    margin-top: 10px;
    font-weight: 500;
    size: 12px;
    text-align: center;

    span {
      color: #4285f4;
      cursor: pointer;
      transition: all ease 0.3s;

      &:hover {
        color: #072cfc;
      }
    }
  }

  @media (min-width: 1024px) {
    button[type="submit"] {
      width: 206px;
      margin-top: 10px;
    }
  }
`;

export const FormSinginNamesFileds = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 346px;
  }

  @media (min-width: 1024px) {
    max-width: 448px;
    flex-direction: row;
    gap: 15px;
  }
`;
