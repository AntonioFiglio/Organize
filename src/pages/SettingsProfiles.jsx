import { useState } from "react";
import { Text } from "../styles/Global";
import Button from "../components/button";
import { Container, Header, Body } from "../styles/pages/SettingsProfiles";

import { DeleteAccount } from "../components/DeleteAccount";
import { ChangePassword } from "../components/ChangePassword";

export const SettingsProfiles = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  const options = [
    { name: "Change Password", component: <ChangePassword /> },
    { name: "Delete Account", component: <DeleteAccount /> },
  ];

  const handleClick = (index) => {
    return setCurrentComponent(options[index]);
  };

  const handleClickBack = () => {
    return setCurrentComponent(null);
  };

  return (
    <Container>
      <Header>
        <Text subTittle>
          Settings
          {currentComponent ? <> - {currentComponent.name}</> : null}
        </Text>
        {currentComponent ? (
          <div onClick={handleClickBack}>
            <Button
              info={{
                type: "button",
                content: "Back",
                fontSize: "1.0rem",
                paddingX: "10px",
                paddingY: "7px",
                borderRadius: "4px",
                Full: true,
                width: "90px",
              }}
            />
          </div>
        ) : null}
      </Header>

      <Body>
        {currentComponent ? (
          <>{currentComponent.component}</>
        ) : (
          <>
            {options.map((option, index) => {
              return (
                <div key={index} onClick={() => handleClick(index)}>
                  <Button
                    info={{
                      type: "button",
                      content: option.name,
                      fontSize: "1.0rem",
                      paddingX: "10px",
                      paddingY: "7px",
                      borderRadius: "4px",
                      Full: true,
                      width: "200px",
                    }}
                  />
                </div>
              );
            })}
          </>
        )}
      </Body>

      {/* <Body method="post" onSubmit={handleSubmit}>
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
      </Body> */}
    </Container>
  );
};
