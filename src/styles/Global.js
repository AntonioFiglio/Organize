import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    html,body{
        font-size: 97.8%;

            background:${(props) => props.theme.colors.Primary};
            height:100%;
            width:100%;
            overflow-x: hidden;

        color:${(props) => props.theme.colors.TextColorPrimary};
        font-family:${(props) => props.theme.fonts.Primary};
    }

    a{
        color:inherit;
        text-decoration: none;
    }



    @media(min-width:1100px){
        html,body{
            font-size: 120%;
        }
    }
 
    @media(max-width:575px){
        html,body{
            font-size: 87.5%;
        }
    }

`;

export default GlobalStyle;

export const Wrapper = styled.div`
  height: ${({ Height }) => Height};
`;

export const Text = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.TextColorPrimary};
  transition: 300ms;

  ${({ Hover }) =>
    Hover &&
    css`
      :hover {
        color: ${({ theme }) => theme.colors.TextColorPrimary};
        transition: 300ms;
      }
    `}

  ${({ Pointer }) =>
    Pointer &&
    css`
      cursor: pointer;
    `}

  ${({ Bold }) =>
    Bold &&
    css`
      font-weight: 800;
    `};

  ${({ Error }) =>
    Error &&
    css`
      color: ${({ theme }) => theme.colors.Error} !important;
    `};

  ${({ Sucess }) =>
    Sucess &&
    css`
      color: ${({ theme }) => theme.colors.Sucess} !important;
    `};

  ${({ Tittle }) =>
    Tittle &&
    css`
      font-size: 2rem};
    `}

  ${({ subTittle }) =>
    subTittle &&
    css`
      font-size: 1.4rem;
    `}

    ${({ NormalSize }) =>
    NormalSize &&
    css`
      font-size: 1rem;
    `}

    ${({ Tittle }) =>
    Tittle &&
    css`
      font-size: 1.8rem;
    `}

  @media( max-width: 690px) {
    ${({ Tittle }) =>
      Tittle &&
      css`
        font-size: 1.5rem;
      `}
  }

  @media (max-width: 590px) {
    ${({ Tittle }) =>
      Tittle &&
      css`
        font-size: 1.3rem;
      `}
  }

  @media (max-width: 490px) {
    ${({ Tittle }) =>
      Tittle &&
      css`
        font-size: 1.2rem;
      `}
  }
`;
