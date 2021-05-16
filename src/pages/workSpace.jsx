import { useHistory } from "react-router-dom";
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
      url: "/WorkSpace/to-do",
    },
    {
      name: "Notes",
      image: <IcoNotes Size={"12rem"} />,
      url: "/WorkSpace/notes",
    },
  ];
  const { auth } = useAuth();
  const history = useHistory();
  const { name } = auth.user;

  const handleClick = (url) => {
    history.push(url);
  };

  return (
    <Container>
      <Header>
        <Text Tittle>Welcome {name}!</Text>
      </Header>
      <Body>
        {options.map((option, index) => {
          return (
            <div key={index} onClick={() => handleClick(option.url)}>
              <Card image={option.image} name={option.name} state={false} />
            </div>
          );
        })}
      </Body>
    </Container>
  );
};
