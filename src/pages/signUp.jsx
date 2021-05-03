import { Link } from "react-router-dom";
import Button from "../components/button";
import { Input } from "../components/input";

import {
  Container,
  ContainerSignUp,
  Header,
  Body,
  Footer,
  Extra,
  Term,
  Text,
} from "../styles/pages/Sign";

export const SignUp = () => {
  const HandleSignUp = (e) => {
    e.preventDefault();
    console.log("Created new account");
  };

  return (
    <>
      <Container>
        <ContainerSignUp onSubmit={HandleSignUp}>
          <Header>
            <h1>Create Account</h1>
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
            <Extra>
              <Term htmlFor="term">
                <input type="checkbox" name="term" id="term" />
                <Text>I accept all terms</Text>
              </Term>
            </Extra>
          </Body>
          <Footer>
            <Button
              info={{
                type: "submit",
                content: "SignUp",
                fontSize: "1.0rem",
                paddingX: "10px",
                paddingY: "7px",
                borderRadius: "16px",
                Full: true,
                width: "90px",
              }}
            />
            <Link to="/sign-in">
              <Text Pointer={true}>Already have account?</Text>
            </Link>
          </Footer>
        </ContainerSignUp>
      </Container>
    </>
  );
};
