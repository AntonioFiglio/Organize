import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import Button from "../components/button";
import { Wrapper, Text } from "../styles/Global";
import { Loading } from "../components/loading";
import { Input } from "../components/input";
import {
  Container,
  ContainerSignUp,
  Header,
  Body,
  Footer,
  Extra,
  Term,
} from "../styles/pages/Sign";

export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [error, setError] = useState(false);

  const { setAuth, auth } = useAuth();
  const history = useHistory();

  const checkTerm = useRef();

  const HandleSignUp = async (e) => {
    e.preventDefault();
    setLoading(!loading);

    try {
      if (!(name || email || password)) {
        throw new Error("Missing arguments!");
      }

      if (!checkTerm.current.checked) {
        throw new Error("Not checked!");
      }

      await api
        .post("api/signUp", {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          const { user, token } = res.data;
          localStorage.setItem("user", JSON.stringify({ user, token }));
          setAuth({
            user,
            token,
          });
          setLoading(false);
          return history.replace("./workSpace");
        });
    } catch (err) {
      setLoading(false);
      setError(true);
      return;
    }
  };

  useEffect(() => {
    if (!auth) {
      return null;
    }
    return history.replace("./workSpace");
  });

  return (
    <>
      <Container>
        <ContainerSignUp method="post" onSubmit={HandleSignUp}>
          <Header>
            <h1>Create Account</h1>
          </Header>
          <Body>
            {loading ? (
              <>
                <Wrapper Height={"5vh"} />
                <Loading info={{ size: "32px", radius: "16px" }} />
                <Wrapper Height={"5vh"} />
              </>
            ) : (
              <>
                <Input
                  info={{
                    type: "Text",
                    required: true,
                    placeholder: "Billy",
                    fontSize: "1rem",
                    outline: false,
                    minWidth: "200px",
                    maxWidth: "450px",
                    padding: "10px",
                    borderRadius: "4px",
                    state: setName,
                  }}
                />

                <Input
                  info={{
                    type: "Email",
                    required: true,
                    placeholder: "Billy@exemple.com",
                    fontSize: "1rem",
                    outline: false,
                    minWidth: "200px",
                    maxWidth: "450px",
                    padding: "10px",
                    borderRadius: "4px",
                    state: setEmail,
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
                    state: setPassword,
                  }}
                />
                <Extra>
                  <Term htmlFor="term">
                    <input
                      type="checkbox"
                      name="term"
                      id="term"
                      ref={checkTerm}
                    />
                    <Text>
                      I accept all
                      <Link to="/terms" target={"_black"}>
                        <Text Bold>terms.</Text>
                      </Link>
                    </Text>
                  </Term>
                </Extra>
              </>
            )}
          </Body>
          <Footer>
            {error ? <Text Error>Try again</Text> : null}

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
                disable: loading,
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
