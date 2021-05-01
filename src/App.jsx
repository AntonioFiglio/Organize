import { ThemeProvider } from "styled-components";
import { useHookTheme } from "./context/Theme";
import { BrowserRouter } from "react-router-dom";

import OptionsTheme from "./components/optionsTheme";

import GlobalStyle from "./styles/Global";

import Header from "./components/header";
import Routes from "./Routes";
import Footer from "./components/footer";

const App = () => {
  const { currentTheme } = useHookTheme();

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={currentTheme}>
          <GlobalStyle />
          <Header />
          <Routes />
          <Footer />
          <OptionsTheme />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
