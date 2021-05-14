import Button from "../components/button";
import { Input } from "../components/input";
import { RecoverImage } from "../components/svg/RecoverPage";
import { Container, ContainerHelp } from "../styles/pages/Recover";
import { Text } from "../styles/Global";

export const Recover = () => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
  };

  return (
    <>
      <Container>
        <ContainerHelp method="post" onSubmit={HandleSubmit}>
          <Text Tittle>Support</Text>
          <Text>If you forgot your password, please send your email</Text>
          <Input
            info={{
              type: "Email",
              required: true,
              placeholder: "Email",
              fontSize: "1rem",
              outline: false,
              minWidth: "200px",
              maxWidth: "450px",
              padding: "10px",
              borderRadius: "4px",
            }}
          />
          <Button
            info={{
              type: "submit",
              content: "Send email",
              fontSize: "1rem",
              paddingX: "10px",
              paddingY: "10px",
              borderRadius: "8px",
              Full: true,
              width: "auto",
            }}
          />
        </ContainerHelp>
        <div className="Image">
          <RecoverImage Size={"15rem"} />
        </div>
      </Container>
    </>
  );
};
