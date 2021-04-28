import { Container } from "../styles/components/Button";

const Button = ({info}) => {
  return (
    <Container info={info}>
        {info.content}
    </Container>
  );
};

export default Button;
