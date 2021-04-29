import {
  Container,
  Card,
  Cards,
  SectionAbout,
  LearnMore,
  Text,
} from "../styles/components/About";
import { IcoNotes } from "./svg/icoNotes";
import { IcoToDo } from "./svg/icoToDo";

export const About = () => {
  const CardObject = [
    {
      name: "To Do",
      image: <IcoToDo Size={"300px"} />,
    },
    {
      name: "Notes",
      image: <IcoNotes Size={"300px"} />,
    },
  ];

  return (
    <Container>
      <Cards>
        {CardObject.map((card, index) => {
          return (
            <Card key={index}>
              {card.image}
              <Text Tittle>{card.name}</Text>
            </Card>
          );
        })}
      </Cards>
    </Container>
  );
};
