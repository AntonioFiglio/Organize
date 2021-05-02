import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import { Input } from "../components/input";
import { Wrapper } from "../styles/Global";

import {
  Container,
  ContainerSignIn,
  ContainerSignUp,
  Header,
  Body,
  Footer,
  Extra,
  Term,
  Text,
} from "../styles/pages/Sign";

export const SignIn = () => {
  const HandleSignIn = (e) => {
    e.preventDefault();
    console.log("logged");
  };

  return (
    <>
      <Container>
        <ContainerSignIn method="post" onSubmit={HandleSignIn}>
          <Header>
            <h1>WorkSpace</h1>
          </Header>
          <Body>
            <Input
              info={{
                type: "Email",
                required: true,
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
                required: true,
                password: true,
                placeholder: "Password",
                fontSize: "1rem",
                outline: false,
                minWidth: "200px",
                maxWidth: "450px",
                padding: "10px",
                borderRadius: "4px",
              }}
            />
          </Body>
          <Footer>
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
            <Extra>
              <Link to="/recover">
                <Text Pointer={true}>Forgot password</Text>
              </Link>

              <Link to="/sign-up">
                <Text Pointer={true}>Create new account</Text>
              </Link>
            </Extra>
          </Footer>
        </ContainerSignIn>
      </Container>
      <Wrapper Height={"15vh"} />
    </>
  );
};
