import { useState } from "react";
import { Container } from "../styles/components/cardAbout";
import { Text } from "../styles/Global";

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
              <Text subTittle>{name}</Text>
            </>
          ) : (
            <>
              {imageUrl !== undefined ? (
                <img src={imageUrl} alt={"Ops..."} />
              ) : (
                <> {image}</>
              )}
              <Text subTittle>{name}</Text>
              <Text NormalSize>{Inform}</Text>
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
          <Text subTittle>{name}</Text>
        </Container>
      )}
    </>
  );
};
