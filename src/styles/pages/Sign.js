import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;

  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.Primary},
    ${(props) => props.theme.colors.PrimaryLight}
  );
`;

export const ContainerSignIn = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: auto;
  width: auto;
  min-width: 300px;
  padding: 10px;

  background-color: ${(props) => props.theme.colors.PrimaryLight};
  border-radius: 8px;
`;
export const ContainerSignUp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: auto;
  width: auto;
  min-width: 300px;
  padding: 10px;

  background-color: ${(props) => props.theme.colors.PrimaryLight};
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 20%;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Extra = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 5px;
`;
export const Term = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0px 5px;
  span {
    color: ${(props) => props.theme.colors.TextColorPrimary};
    cursor: pointer;
    margin: 0px 5px;
  }
  input {
    margin: 5px;
    cursor: pointer;
  }
`;
