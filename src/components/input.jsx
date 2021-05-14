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
  // value: string
  // fontSize: string
  // outline: boolean
  // minWidth: string
  // maxWidth: string
  // padding: string
  // borderRadius: string
  // disabled: boolean
  // state: function

  const [line, setLine] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    show === true ? (info.type = "Password") : (info.type = "Text");
  };

  return (
    <Container info={info}>
      <Line line={line} />
      {info.password ? (
        <Container subContainer info={info}>
          <ContainerInput
            onFocus={() => setLine(!line)}
            onBlur={() => setLine(!line)}
            type={info.type}
            placeholder={info.placeholder}
            info={info}
            required={info.required}
            onChange={(e) => info.state(e.target.value)}
            value={info.value ? info.value : undefined}
            disabled={info.disabled === true ? true : false}
          />
          <ShowPassword onClick={handleClick} show={show}>
            <span />
          </ShowPassword>
        </Container>
      ) : (
        <>
          <ContainerInput
            onFocus={() => setLine(!line)}
            onBlur={() => setLine(!line)}
            type={info.type}
            placeholder={info.placeholder}
            info={info}
            required={info.required}
            onChange={(e) => info.state(e.target.value)}
            value={info.value ? info.value : undefined}
            disabled={info.disabled === true ? true : false}
          />
        </>
      )}
    </Container>
  );
};
