import { About } from "../components/about";
import PageLanding from "../components/pageLanding";

import {Container, Wrapper} from "../styles/pages/Home"

export const Home = () => {
  return (
    <Container>
      <PageLanding />
      <Wrapper /> 
      <About />
      <Wrapper /> 
    </Container>
  );
};
