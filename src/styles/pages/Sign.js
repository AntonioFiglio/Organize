import styled, { css } from "styled-components";

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
  padding: 10px;

  background-color: ${(props) => props.theme.colors.PrimaryLight};
  border-radius: 8px;
`;
export const ContainerSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: auto;
  width: 300px;
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

export const Text = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.TextColorPrimaryDark};
  transition: 300ms;

  :hover {
    color: ${({ theme }) => theme.colors.TextColorPrimary};
    transition: 300ms;
  }

  ${({ Pointer }) =>
    Pointer &&
    css`
      cursor: pointer;
    `}
`;

export const Extra = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  transform: translateY(-10px);

  *{
    margin: 10px 6px;
  }
`;
export const Term = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0px 5px;
  * {
    color: ${(props) => props.theme.colors.TextColorPrimary};
    margin: 5px;
  }
`;
