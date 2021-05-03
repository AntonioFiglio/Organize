import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./context/Auth";
import { useHookTheme } from "./context/Theme";

import OptionsTheme from "./components/optionsTheme";

import GlobalStyle, { Wrapper } from "./styles/Global";

import Header from "./components/header";
import Routes from "./Routes";
import Footer from "./components/footer";

const App = () => {
  const { currentTheme } = useHookTheme();

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Header />
            <Routes />
            <Wrapper Height={"10vh"} />
            <Footer />
            <OptionsTheme />
          </ThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
