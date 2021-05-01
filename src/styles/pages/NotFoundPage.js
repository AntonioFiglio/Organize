import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.Primary},
    ${(props) => props.theme.colors.PrimaryLight}
  );
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.2rem;
    margin: 30px;
  }

  b{
      cursor: pointer;
  }

`;
