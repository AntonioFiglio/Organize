import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  min-width: ${({ info }) => info.minWidth};
  max-width: ${({ info }) => info.maxWidth};
  max-height: 50px;
  margin: 5px;
  transition: 300ms;
`;

export const ContainerInput = styled.input`
  color: ${({ theme }) => theme.colors.TextColorPrimaryDark};
  background-color: ${(props) => props.theme.colors.PrimaryLightPlus};
  font-size: ${({ info }) => info.fontSize};
  padding: ${({ info }) => info.padding};

  outline: ${({ info }) => (info.outline ? "none" : "initial")};
  border: none;
  border-radius: ${({ info }) => info.borderRadius};
`;

export const Line = styled.div`
  margin: 3px;
  width: 40%;
  height: 2px;

  background: ${({ theme }) => theme.colors.TextColorPrimaryDark};

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
