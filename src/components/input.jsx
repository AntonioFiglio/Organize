import { Container, ContainerInput, Line } from "../styles/components/input";
import { useState } from "react";

export const Input = ({ info }) => {
  // type:
  // placeholder:
  // fontSize:
  // outline:
  // minWidth:
  // maxWidth:
  // padding:
  // borderRadius:

  const [line, setLine] = useState(false);
  return (
    <Container info={info} htmlFor="input">
      <Line line={line} />
      <ContainerInput
        onMouseEnter={() => {
          setLine(!line);
        }}
        onMouseLeave={(e) => {
          setLine(!line);
        }}
        id="input"
        type={info.type}
        placeholder={info.placeholder}
        info={info}
      />
    </Container>
  );
};
