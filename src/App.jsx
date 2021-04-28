import { ThemeProvider } from "styled-components";
import { useHookTheme } from "./context/Theme";

import OptionsTheme from "./components/optionsTheme";

import GlobalStyle from "./styles/Global";

import PageLanding from "./pages/PageLanding.jsx";
import Header from "./components/header";

const App = () => {
  const { currentTheme } = useHookTheme();

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Header />
        <PageLanding />

        <OptionsTheme />
      </ThemeProvider>
    </>
  );
};

export default App;
