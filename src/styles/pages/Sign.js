import styled from "styled-components";

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

export const ContainerSignIn = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 60vh;
  width: 50vh;
  background-color: ${(props) => props.theme.colors.PrimaryLight};
  border-radius: 8px;
`;
export const ContainerSignUp = styled.div`
  height: 100%;
`;
