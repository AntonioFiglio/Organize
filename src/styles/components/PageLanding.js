import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 90vh;
  display: grid;
  grid-template-columns: 40vw 60vw;

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

export const ScrollDown = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 5px;

  bottom: 30px;
  left: 47%;

  border: 2px solid ${({ theme }) => theme.colors.Secundary};
  border-radius: 20px;
  /* animation: 1s infinite ScrollDown ease-in-out; */
  animation-delay: 3s;

  @keyframes ScrollDown {
    0% {
      bottom: 30px;
    }
    50% {
      bottom: 40px;
    }
    100% {
      bottom: 30px;
    }
  }


`;
