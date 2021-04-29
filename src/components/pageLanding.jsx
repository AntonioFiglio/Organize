import Button from "./button.jsx";
import { HomeImage } from "./svg/Home_to_do.jsx";
import {
  Container,
  ContainerMenssage,
  Menssage,
  Image,
} from "../styles/components/PageLanding";

const PageLanding = () => {
  return (
    <Container>
      <ContainerMenssage>
        <Menssage Tittle>Why do we use it?</Menssage>
        <div>
          <Menssage>
            Time goes very fast! We can not stop the clock. This application is
            a salvation for you!
          </Menssage>
        </div>

        <Button
          info={{
            content: "Learn More",
            fontSize: "1.2rem",
            paddingX: "10px",
            paddingY: "7px",
            borderRadius: "20px",
            Ghost: true,
          }}
        />
      </ContainerMenssage>
      <Image>
        <HomeImage Size={"450px"} />
      </Image>
    </Container>
  );
};

export default PageLanding;
