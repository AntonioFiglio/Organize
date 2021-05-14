// import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth";
import { Card } from "../components/cardAbout";

import { IcoNotes } from "../components/svg/icoNotes";
import { IcoToDo } from "../components/svg/icoToDo";

import { Container, Header, Body, Text } from "../styles/pages/workSpace";

export const WorkSpace = () => {
  const options = [
    {
      name: "To Do",
      image: <IcoToDo Size={"12rem"} />,
    },
    {
      name: "Notes",
      image: <IcoNotes Size={"12rem"} />,
    },
  ];
  const { auth } = useAuth();
  const { name } = auth.user;

  return (
    <Container>
      <Header>
        <Text Tittle>Welcome {name}!</Text>
      </Header>
      <Body>
        {options.map((option, index) => {
          return (
            <Card
              key={index}
              image={option.image}
              name={option.name}
              state={false}
            />
          );
        })}
      </Body>
    </Container>
  );
};
