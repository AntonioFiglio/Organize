import { Container } from "../styles/pages/NotFoundPage";
import { Wrapper } from "../styles/Global";
import { NotFoundImage } from "../components/svg/NotFound";

import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <Container>
        <NotFoundImage Size={"15rem"} />
        <span>
          Page not found,
          <Link to="/">
            <b> Back to home</b>
          </Link>
        </span>
      </Container>
      <Wrapper Height={"10vh"} />
    </>
  );
};
