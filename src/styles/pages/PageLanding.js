import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: 40vw 60vw;

  background: transparent;

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const ContainerMenssage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
`;

export const Menssage = styled.span`
  text-indent: 5px;
  font-size: 1rem;
  text-indent: 10px;

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

  @media (max-width: 576px) {
    display: none;
  }
`;
