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

export const ContainerHelp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 300px;
  border-radius: 8px;
  padding: 15px;

  background: ${(props) => props.theme.colors.PrimaryLight};
`;

export const Text = styled.span`
  font-size: 1rem;
  margin: 7px;

  ${({ Tittle }) =>
    Tittle &&
    css`
      font-size: 1.6rem;
    `}
`;
