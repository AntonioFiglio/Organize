import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.colors.Primary},
    ${(props) => props.theme.colors.PrimaryLight}
  );

  padding: 20px 60px;

  h2 {
    padding: 10px;
  }

  h3 {
    padding: 5px;
  }

  ul {
    padding: 0px 15px;
    margin: 5px 10px;
  }

  li {
    text-decoration: none;
    margin: 5px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
