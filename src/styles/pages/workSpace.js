import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 655px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.span`
  font-size: 1rem;

  ${({ Tittle }) =>
    Tittle &&
    css`
      font-size: 1.6rem;
    `}
`;
