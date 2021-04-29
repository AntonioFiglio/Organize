import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: auto;

  padding: 20px;
  margin: 15px;
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 250px;
  width: 200px;

  padding: 5px;
  margin: 15px;

  border: none;
  border-radius: 8px;

  text-align: center;

  background-image: linear-gradient(
    to top right,
    ${(props) => props.theme.colors.PrimaryLight},
    ${(props) => props.theme.colors.PrimaryLightPlus}
  );

  *{
    margin: 20px;
  }


`;

export const Text = styled.span`
  font-size: 1rem;

  ${({ Tittle }) =>
    Tittle &&
    css`
      font-size: 1.3rem;
    `}
`;

export const SectionAbout = styled.section``;
export const LearnMore = styled.div``;
