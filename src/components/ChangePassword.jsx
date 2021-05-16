import { useState } from "react";
import { useAuth } from "../context/Auth";
import { Loading } from "../components/loading";
import api from "../services/api";
import Button from "../components/button";
import { Input } from "../components/input";
import { Container } from "../styles/components/ChangePassword";
import { Text } from "../styles/Global";

export const ChangePassword = () => {
  const { auth } = useAuth();
  const { user, token } = auth;
  const [currentPassword, setCurrentPassword] = useState(undefined);
  const [newPassword, setNewPassword] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(!loading);
    setSucess(false);
    setError(false);

    try {
      if (!currentPassword || !newPassword) {
        throw new Error("Missing arguments");
      }

      if (currentPassword == newPassword) {
        throw new Error("Same password");
      }

      await api
        .post(
          "api/profile/settings",
          {
            email: user.email,
            currentPassword,
            newPassword,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then(() => {
          setLoading(false);
          setSucess("Sucess");
          return;
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
              type: "Password",
              password: true,
              required: true,
              placeholder: "Current Password",
              fontSize: "1rem",
              outline: false,
              minWidth: "200px",
              maxWidth: "450px",
              padding: "10px",
              borderRadius: "4px",
              state: setCurrentPassword,
            }}
          />
          <Input
            info={{
              type: "Password",
              password: true,
              required: true,
              placeholder: "New Password",
              fontSize: "1rem",
              outline: false,
              minWidth: "200px",
              maxWidth: "450px",
              padding: "10px",
              borderRadius: "4px",
              state: setNewPassword,
            }}
          />

          <Button
            info={{
              type: "submit",
              content: "Save",
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
