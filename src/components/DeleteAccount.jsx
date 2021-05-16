import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { Loading } from "./loading";
import api from "../services/api";
import Button from "./button";
import { Input } from "./input";
import { Container } from "../styles/components/DeleteAccount";
import { Text } from "../styles/Global";

export const DeleteAccount = () => {
  const { auth, setAuth } = useAuth();
  const { user, token } = auth;
  const [currentEmail, setCurrentEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(!loading);
    setSucess(false);
    setError(false);

    try {
      if (!(password || currentEmail)) {
        throw new Error("Missing arguments");
      }

      if (currentEmail !== user.email) {
        throw new Error("Failed");
      }

      await api
        .delete(`api/profile/delete/id=${user._id}`, {
          headers: {
            Authorization: token,
          },
          data: {
            email: user.email,
            password,
          },
        })
        .then(() => {
          setLoading(false);
          setSucess("Sucess");
          setAuth(null);
          localStorage.removeItem("user");
          return history.replace("/profile/logout");
        });
    } catch (err) {
      console.log(`=> ${err}`);
      setLoading(false);
      return setError(`=> ${err}`);
    }
  };

  return (
    <Container method="post" onSubmit={handleSubmit}>
      {loading ? (
        <Loading info={{ size: "8rem", radius: "4rem" }} />
      ) : (
        <>
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
              state: setCurrentEmail,
            }}
          />
          <Input
            info={{
              type: "Password",
              password: true,
              required: true,
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

          <Button
            info={{
              type: "submit",
              content: "Confirm",
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

      {!error ? null : (
        <Text Error NormalSize>
          {error}
        </Text>
      )}
      {!sucess ? null : (
        <Text Sucess NormalSize>
          {sucess}
        </Text>
      )}
    </Container>
  );
};
