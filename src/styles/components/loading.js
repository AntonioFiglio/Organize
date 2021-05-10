import styled from "styled-components";

export const Container = styled.div`
  height: ${({ info }) => info.size};
  width: ${({ info }) => info.size};
  border-radius: ${({ info }) => info.radius};
  border: 3px solid ${({ theme }) => theme.colors.TextColorPrimary};
  border-top: 2px solid ${({ theme }) => theme.colors.TextColorPrimaryLight};
  animation: 0.3s infinite rotate;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
