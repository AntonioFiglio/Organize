import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 90vh;
  display: grid;
  grid-template-columns: 40vw 60vw;
  gap: 20px;

  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.Primary},
    ${(props) => props.theme.colors.PrimaryLight}
  );

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const ContainerMenssage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  margin: 0px;


  div {
    text-indent: 1rem;
  }
`;

export const Menssage = styled.span`
  text-indent: 5px;
  font-size: 1rem;

  ${(props) =>
    props.Tittle &&
    css`
      font-size: 2.2rem;
    `}
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 576px) {
    display: none;
  }
`;
