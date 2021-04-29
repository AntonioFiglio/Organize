import { Container } from "../styles/components/footer";
import { Wrapper } from "../styles/Global";

const Footer = () => {
  return (
    <Container>
      <Wrapper Height={"5vh"} />
      <span>Organize - all rights reserved {new Date().getFullYear()}</span>
      <Wrapper Height={"5vh"} />
    </Container>
  );
};

export default Footer;
