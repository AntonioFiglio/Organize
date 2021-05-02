import {
  Container,
  ContainerInput,
  ShowPassword,
  Line,
} from "../styles/components/input";
import { useState } from "react";

export const Input = ({ info }) => {
  // type: string
  // password: boolean
  // placeholder: string
  // fontSize: string
  // outline: boolean
  // minWidth: string
  // maxWidth: string
  // padding: string
  // borderRadius: string

  const [line, setLine] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    show === true ? (info.type = "Password") : (info.type = "Text");
  };

  return (
    <Container info={info} htmlFor="input">
      <Line line={line} />
      <ContainerInput
        onMouseEnter={() => {
          setLine(!line);
        }}
        onMouseLeave={() => {
          setLine(!line);
        }}
        type={info.type}
        placeholder={info.placeholder}
        info={info}
        required={info.required}
      />
      {info.password === true ? (
        <>
          <ShowPassword>
            <input
              type="checkbox"
              name="show"
              id="show"
              onClick={handleClick}
            />
            <span>Show password</span>
          </ShowPassword>
        </>
      ) : null}
    </Container>
  );
};