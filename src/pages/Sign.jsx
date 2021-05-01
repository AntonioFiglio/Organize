import { useEffect, useState } from "react";
import Button from "../components/button";
import { Input } from "../components/input";
import { Wrapper } from "../styles/Global";

import {
  Container,
  ContainerSignIn,
  ContainerSignUp,
} from "../styles/pages/Sign";

export const Sign = ({ singUp }) => {
  const [currentLayout, setCurrentLayout] = useState(false);

  const HandleSignIn = (e) => {
    e.preventDefault();
    console.log("logged");
  };

  useEffect(() => {
    singUp === true ? setCurrentLayout(true) : setCurrentLayout(false);
  }, []);

  return (
    <>
      <Container>
        {currentLayout === false ? (
          <ContainerSignIn method="post" onSubmit={HandleSignIn}>
            <h1>WorkSpace</h1>

            <Input
              info={{
                type: "text",
                placeholder: "Email",
                fontSize: "1rem",
                outline: false,
                minWidth: "200px",
                maxWidth: "450px",
                padding: "10px",
                borderRadius: "4px",
              }}
            />

            <Input
              info={{
                type: "Password",
                placeholder: "Password",
                fontSize: "1rem",
                outline: false,
                minWidth: "200px",
                maxWidth: "450px",
                padding: "10px",
                borderRadius: "4px",
              }}
            />

            <Button
              info={{
                type: "submit",
                content: "SignIn",
                fontSize: "1.0rem",
                paddingX: "10px",
                paddingY: "7px",
                borderRadius: "16px",
                Full: true,
                width: "90px",
              }}
            />
          </ContainerSignIn>
        ) : (
          <ContainerSignUp>Register</ContainerSignUp>
        )}
      </Container>
      <Wrapper Height={"15vh"} />
    </>
  );
};
