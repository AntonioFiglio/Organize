import { Container, Cards } from "../styles/components/About";
import { Card } from "./cardAbout";
import { IcoNotes } from "./svg/icoNotes";
import { IcoToDo } from "./svg/icoToDo";

export const About = () => {
  const CardObject = [
    {
      name: "To Do",
      image: <IcoToDo Size={"15rem"} />,
      description:
        "If you want to write what you need to do, in this day or that time, this application is for you because you will go to write a  simple and organized list.",
    },
    {
      name: "Notes",
      image: <IcoNotes Size={"15rem"} />,
      description:
        "If your question is how you can write your notes and look at it anytime this is for you",
    },
  ];

  return (
    <Container>
      <Cards>
        {CardObject.map((Content, index) => {
          return (
            <Card
              key={index}
              name={Content.name}
              image={Content.image}
              description={Content.description}
              state={true}
            />
          );
        })}
      </Cards>
    </Container>
  );
};
