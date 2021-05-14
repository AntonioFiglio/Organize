import styled from "styled-components";

export const Container = styled.div``;
export const Hamburger = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  padding: 5px;
  z-index: 999;

  background: ${(props) => props.theme.colors.PrimaryLightPlus};

  border-radius: 30px;
  transition: 300ms;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: 300ms;
  }

  div {
    position: relative;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      position: relative;
      background: ${(props) => props.theme.colors.TextColorPrimary};
      width: 30px;
      height: 3px;
      top: 0px;
      transition: ease-in-out 300ms;
    }

    span:before,
    span:after {
      position: absolute;
      width: 30px;
      height: 3px;
      background: ${(props) => props.theme.colors.TextColorPrimary};
      content: "";
      transition: ease-in-out 300ms;
    }

    span {
      transform: rotate(${({ open }) => (open === false ? "0deg" : "-45deg")});
    }

    span:before {
      top: ${({ open }) => (open === false ? "-10px" : "0px")};
      transform: rotate(${({ open }) => (open === false ? "0deg" : "0deg")});
    }

    span:after {
      bottom: ${({ open }) => (open === false ? "-10px" : "0px")};
      transform: rotate(${({ open }) => (open === false ? "0deg" : "-90deg")});
    }
  }

  @media (max-width: 450px) {
    background: ${(props) =>
      props.open === false
        ? props.theme.colors.Primary
        : props.theme.colors.PrimaryLight};
  }
`;
export const Menu = styled.div`
  position: absolute;
  animation: 2s forwards ${({ open }) => (open === false ? "close" : "open")};
  flex-direction: column;
  background: ${(props) => props.theme.colors.Primary};

  height: 100%;
  width: auto;
  bottom: 0px;

  @media (max-width: 690px) {
    width: 50vw;
  }

  @media (max-width: 450px) {
    width: 100vw;
  }

  @keyframes open {
    from {
      left: -110%;
    }
    to {
      left: 0px;
    }
  }

  @keyframes close {
    from {
      left: 0px;
    }
    to {
      left: -110%;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Option = styled.div`
  background: ${(props) => props.theme.colors.PrimaryLight};
  width: 90%;
  margin: 5px;
  padding: 5px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    filter: brightness(90%);
    transform: scale(1.05);
    transition: 300ms;
  }
`;

export const Current = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.Secundary};
`;
