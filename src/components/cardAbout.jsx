import { useState } from "react";
import { Container, Text } from "../styles/components/cardAbout";

export const Card = ({ name, image, description: Inform }) => {
  const [description, setDescription] = useState(false);

  return (
    <Container
      description={description}
      onClick={() => {
        setDescription(!description);
      }}
    >
      {description === false ? (
        <>
          {image}
          <Text Tittle>{name}</Text>
        </>
      ) : (
        <>
          {image}
          <Text Tittle>{name}</Text>
          <Text>{Inform}</Text>
        </>
      )}
    </Container>
  );
};
