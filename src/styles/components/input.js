import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  transition: 300ms;
  margin: 2px;

  ${({ subContainer }) =>
    subContainer &&
    css`
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      background-color: ${(props) => props.theme.colors.PrimaryLightPlus};
      border-radius: ${({ info }) => info.borderRadius};
    `}
`;

export const ContainerInput = styled.input`
  color: ${({ theme }) => theme.colors.TextColorPrimary};
  background-color: ${(props) => props.theme.colors.PrimaryLightPlus};
  font-size: ${({ info }) => info.fontSize};
  padding: ${({ info }) => info.padding};

  outline: ${({ info }) => (info.outline ? "hidden" : "initial")};
  border: none;
  border-radius: ${({ info }) => info.borderRadius};
`;

export const Line = styled.div`
  margin: 3px;
  width: 40%;
  height: 2px;

  background: ${({ theme }) => theme.colors.Secundary};

  animation: 1s forwards
    ${({ line }) => (line === false ? "closeLine" : "openLine")} ease-in-out;
  transition: 300ms;

  @keyframes openLine {
    from {
      width: 0%;
      height: 2px;
    }
    to {
      width: 40%;
      height: 2px;
    }
  }

  @keyframes closeLine {
    from {
      width: 40%;
      height: 2px;
    }
    to {
      width: 0%;
      height: 2px;
    }
  }
`;

export const ShowPassword = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 100%;
  right: 5px;

  cursor: pointer;
  transform: translateY(${({ show }) => (show ? "0px" : "3px")});

  span {
    position: relative;
    width: 18px;
    height: 18px;
    border: 2px solid ${({ theme }) => theme.colors.TextColorPrimaryDark};
    border-radius: 9px;
  }
`;
