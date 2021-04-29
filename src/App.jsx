import { ThemeProvider } from "styled-components";
import { useHookTheme } from "./context/Theme";

import OptionsTheme from "./components/optionsTheme";

import GlobalStyle from "./styles/Global";

import Header from "./components/header";
import { Home } from "./pages/home";

const App = () => {
  const { currentTheme } = useHookTheme();

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Header />
        <Home />
        <OptionsTheme />
      </ThemeProvider>
    </>
  );
};

export default App;
