import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 90vh;
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.Primary},
    ${(props) => props.theme.colors.PrimaryLight}
  );
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 20px;
`;

export const Body = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.span`
  font-size: 1rem;

  ${({ Tittle }) =>
    Tittle &&
    css`
      font-size: 1.6rem;
    `}
`;
