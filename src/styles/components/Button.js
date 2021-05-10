import styled, { css } from "styled-components";

export const Container = styled.button`
  padding: ${({ info }) => info.paddingX} ${({ info }) => info.paddingY};
  font-size: ${({ info }) => info.fontSize};
  outline: none;
  border: none;
  border-radius: ${({ info }) => info.borderRadius};

  width: ${({ info }) => info.width};
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: ${(props) => props.theme.colors.Primary};
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.Secundary};
  color: ${(props) => props.theme.colors.TextColorPrimary};
  transition: 300ms;
  margin: 7px;
  ${({ info }) =>
    info.Ghost === true &&
    css`
      background: transparent;
      border: 2px solid ${(props) => props.theme.colors.Secundary};
    `};

  ${({ info }) =>
    info.Full === true &&
    css`
      background: ${(props) => props.theme.colors.Secundary};
      color: ${(props) => props.theme.colors.white};
    `};

  :hover {
    filter: brightness(60%);
    transition: 300ms;
  }
`;
