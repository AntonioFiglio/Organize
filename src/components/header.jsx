import { useState } from "react";
import Button from "../components/button.jsx";
import { Container, Account, Logo } from "../styles/components/Header";

const Header = () => {
  const [user, setUser] = useState(false);

  return (
    <Container>
      <Logo>
        <span>Organize</span>
        {/* <button onClick={() => setUser(!user)}> cambiarra</button> */}
      </Logo>
      <Account>
        {user === true ? (
          <Button
            info={{
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
                content: "SignIn",
                fontSize: "1.0rem",
                paddingX: "10px",
                paddingY: "7px",
                borderRadius: "16px",
                Ghost: true,
                width: "90px",
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
              }}
            />
          </>
        )}
      </Account>

    </Container>
  );
};

export default Header;
