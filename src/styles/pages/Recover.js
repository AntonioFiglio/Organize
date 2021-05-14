import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  height: 90vh;

  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.Primary},
    ${(props) => props.theme.colors.PrimaryLight}
  );

  @media (max-width: 650px) {
    .Image {
      display: none;
    }
  }
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
