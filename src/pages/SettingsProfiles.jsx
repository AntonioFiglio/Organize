import { useState } from "react";
import { useAuth } from "../context/Auth";
import { Text } from "../styles/Global";
import { Input } from "../components/input";
import Button from "../components/button";
import { Loading } from "../components/loading";
import { Container, Body, Panel } from "../styles/pages/SettingsProfiles";

import api from "../services/api";

export const SettingsProfiles = () => {
  const { auth } = useAuth();

  const [currentPassword, setCurrentPassword] = useState(undefined);
  const [newPassword, setNewPassword] = useState(undefined);

  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const { user } = auth;
  const { name, email } = user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(!loading);
    setSucess(false);
    setError(false);

    try {
      if (!currentPassword || !newPassword) {
        setLoading(false);
        throw new Error({ error: "Missing arguments" });
      }
      await api
        .post(
          "/api/profile/settings",
          {
            email,
            currentPassword,
            newPassword,
          },
          {
            headers: {
              Authorization: `${auth.token}`,
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
    <Container>
      <div className="center">
        <Text Tittle>Settings</Text>
      </div>
      <Body method="post" onSubmit={handleSubmit}>
        {loading ? (
          <Loading info={{ size: "8rem", radius: "4rem" }} />
        ) : (
          <Panel>
            <Panel>
              <Text NormalSize>Email:</Text>
              <Input
                info={{
                  type: "Text",
                  placeholder: "Billy@exemple.com",
                  value: email,
                  fontSize: "1rem",
                  outline: false,
                  minWidth: "200px",
                  maxWidth: "450px",
                  padding: "10px",
                  borderRadius: "4px",
                  disabled: true,
                }}
              />
            </Panel>
            <Panel>
              <Text NormalSize>Nickname:</Text>
              <Input
                info={{
                  type: "Text",
                  placeholder: "Billy",
                  value: name,
                  fontSize: "1rem",
                  outline: false,
                  minWidth: "200px",
                  maxWidth: "450px",
                  padding: "10px",
                  borderRadius: "4px",
                  disabled: true,
                }}
              />
            </Panel>
            <Panel>
              <Text NormalSize>Current Password:</Text>
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
            </Panel>

            <Panel>
              <Text NormalSize>New Password:</Text>
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
            </Panel>

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
          </Panel>
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
      </Body>
    </Container>
  );
};
