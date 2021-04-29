import reactDom from "react-dom";
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
`;

export default GlobalStyle;

export const Wrapper = styled.div`
  height: ${({ Height }) => Height};
`;
