import { Link } from "react-router-dom";

import Button from "../components/button.jsx";
import { useAuth } from "../context/Auth.js";
import { Container, Account, Logo } from "../styles/components/Header";

const Header = () => {
  const { auth } = useAuth();

  return (
    <Container>
      <>
        <Link to="/">
          <Logo>
            <span>Organize</span>
          </Logo>
        </Link>
      </>

      <Account>
        {!auth ? (
          <>
            <Button
              info={{
                type: "button",
                content: "SignIn",
                fontSize: "1.0rem",
                paddingX: "10px",
                paddingY: "7px",
                borderRadius: "16px",
                Ghost: true,
                width: "90px",
                url: "/sign-in",
              }}
            />

            <Button
              info={{
                content: "SignUp",
                fontSize: "1.0rem",
                paddingX: "10px",
                paddingY: "7px",
                borderRadius: "16px",
                Full: true,
                width: "90px",
                url: "/sign-up",
              }}
            />
          </>
        ) : (
          <Button
            info={{
              type: "button",
              content: "Workspace",
              fontSize: "1.0rem",
              paddingX: "10px",
              paddingY: "7px",
              borderRadius: "16px",
              Ghost: true,
              url: "/workSpace",
            }}
          />
        )}
      </Account>
    </Container>
  );
};

export default Header;
