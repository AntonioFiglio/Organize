import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;

  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.Primary},
    ${(props) => props.theme.colors.PrimaryLight}
  );

  display: grid;
  grid-template-columns: 65vw 30vw;
  gap: 30px;

  @media (max-width: 655px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;
