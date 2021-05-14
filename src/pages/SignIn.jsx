import { Link, useHistory } from "react-router-dom";
import Button from "../components/button";
import { Input } from "../components/input";
import api from "../services/api";
import { useState, useEffect } from "react";
import { Wrapper, Text } from "../styles/Global";
import { Loading } from "../components/loading";

import {
  Container,
  ContainerSignIn,
  Header,
  Body,
  Footer,
  Extra,
} from "../styles/pages/Sign";
import { useAuth } from "../context/Auth";

export const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [error, setError] = useState(false);

  const history = useHistory();
  const { setAuth, auth } = useAuth();

  const HandleSignIn = async (e) => {
    e.preventDefault();
    setLoading(!loading);

    try {
      if (!email || !password) {
        throw new Error("Missing arguments");
      }

      await api
        .post("api/signIn", {
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
        <ContainerSignIn method="post" onSubmit={HandleSignIn}>
          <Header>
            <h1>WorkSpace</h1>
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
              </>
            )}
          </Body>
          <Footer>
            {error ? <Text Error>Try again</Text> : null}
            <Button
              info={{
                type: "submit",
                content: "SignIn",
                fontSize: "1.0rem",
                paddingX: "10px",
                paddingY: "12px",
                borderRadius: "16px",
                Full: true,
                width: "120px",
                disable: loading,
              }}
            />

            <Wrapper Height={"15px"} />

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
    </>
  );
};
