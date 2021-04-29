import PageLanding from "../components/pageLanding";
import { About } from "../components/about";
import { Container } from "../styles/pages/Home";
import { Wrapper } from "../styles/Global";

export const Home = () => {
  return (
    <Container>
      <PageLanding />
      <Wrapper Height={"10vh"} />
      <About id="LearnMore" />
      <Wrapper Height={"10vh"} />
    </Container>
  );
};
