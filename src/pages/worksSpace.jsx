import { useState } from "react";
import { Card } from "../components/cardAbout";
import { Container, Header, Body, Text } from "../styles/pages/workSpace";

export const WorkSpace = () => {
  const [optionsWorks, setOptionsWorks] = useState(null);

  return (
    <Container>
      <Header>
        <Text Tittle>Welcome! {optionsWorks.username}</Text>
      </Header>
      <Body>
        {optionsWorks === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {optionsWorks.map((option, index) => {
              return (
                <Card
                  key={index}
                  imageUrl={
                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DdotwQC9bqJVBhK6e-YUMQHaJ4%26pid%3DApi%26h%3D160&f=1"
                  }
                  name={option.name}
                  state={false}
                />
              );
            })}
          </>
        )}
      </Body>
    </Container>
  );
};
