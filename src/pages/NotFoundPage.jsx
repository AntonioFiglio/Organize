import { useAuth } from "../context/Auth";
import { Container } from "../styles/pages/NotFoundPage";
import { NotFoundImage } from "../components/svg/NotFound";

import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  const { auth } = useAuth();

  return (
    <>
      <Container>
        <NotFoundImage Size={"15rem"} />
        <span>
          Page not found,
          <Link to={auth ? "/workspace" : "/"}>
            <b> Back to home</b>
          </Link>
        </span>
      </Container>
    </>
  );
};
