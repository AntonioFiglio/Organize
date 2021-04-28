import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    html,body{
        font-size: 97.8%;

        background-image: linear-gradient(to bottom right,${(props) =>
          props.theme.colors.Primary}, ${(props) =>
  props.theme.colors.PrimaryLight});

            height:100%;
            width:100%;

        color:${(props) => props.theme.colors.TextColorPrimary};
        font-family:${(props) => props.theme.fonts.Primary};
    }
`;

export default GlobalStyle;
