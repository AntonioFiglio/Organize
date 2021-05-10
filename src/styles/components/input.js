import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin: 5px;
  transition: 300ms;
`;

export const ContainerInput = styled.input`
  color: ${({ theme }) => theme.colors.TextColorPrimaryDark};
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

export const ShowPassword = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px 0px 0px;

  cursor: pointer;
  font-size: 0.8rem;
  * {
    margin: 5px;
    cursor: pointer;
  }
`;
