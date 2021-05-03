import { useState } from "react";
import { Container, Text } from "../styles/components/cardAbout";

export const Card = ({ name, image, imageUrl, description: Inform, state }) => {
  const [description, setDescription] = useState(false);

  return (
    <>
      {state === true ? (
        <Container
          description={description}
          onClick={() => {
            setDescription(!description);
          }}
        >
          {description === false ? (
            <>
              {imageUrl !== undefined ? (
                <img src={imageUrl} alt={"Ops..."} />
              ) : (
                <> {image}</>
              )}
              <Text Tittle>{name}</Text>
            </>
          ) : (
            <>
              {imageUrl !== undefined ? (
                <img src={imageUrl} alt={"Ops..."} />
              ) : (
                <> {image}</>
              )}
              <Text Tittle>{name}</Text>
              <Text>{Inform}</Text>
            </>
          )}
        </Container>
      ) : (
        <Container>
          {imageUrl !== undefined ? (
            <img src={imageUrl} alt={"Ops..."} />
          ) : (
            <> {image}</>
          )}
          <Text Tittle>{name}</Text>
        </Container>
      )}
    </>
  );
};
