import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/button.jsx";
import { Container, Account, Logo } from "../styles/components/Header";

const Header = () => {
  const [user, setUser] = useState(false);

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
        {user === true ? (
          <Button
            info={{
              type: "button",
              content: "Workspace",
              fontSize: "1.0rem",
              paddingX: "10px",
              paddingY: "7px",
              borderRadius: "16px",
              Ghost: true,
            }}
          />
        ) : (
          <>
            <Button
              info={{
                type: "button",
                content: "SignIn",
                fontSize: "0.9rem",
                paddingX: "10px",
                paddingY: "7px",
                borderRadius: "16px",
                Ghost: true,
                width: "90px",
                url: "/sign-in"
              }}
            />

            <Button
              info={{
                content: "SignUp",
                fontSize: "0.9rem",
                paddingX: "10px",
                paddingY: "7px",
                borderRadius: "16px",
                Full: true,
                width: "90px",
                url: "/sign-up"
              }}
            />
          </>
        )}
      </Account>
    </Container>
  );
};

export default Header;
