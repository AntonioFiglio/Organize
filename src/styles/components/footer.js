import styled from "styled-components";

export const Container = styled.footer`
  border-top: 2px solid ${({ theme }) => theme.colors.Secundary};
  margin: 0px 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
