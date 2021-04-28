import { useState } from "react";
import { useHookTheme } from "../context/Theme";
import {
  Container,
  Hamburger,
  Menu,
  Options,
  Option,
  OptionText,
  Current,
} from "../styles/components/OptionsTheme";

const OptionsTheme = () => {
  const [open, setOpen] = useState(false);

  const { list, setCurrentTheme, currentTheme } = useHookTheme();

  const handleClick = ({ index: I }) => {
    localStorage.setItem("theme", JSON.stringify(list[I]));
    const getTheme = localStorage.getItem("theme");
    setCurrentTheme(JSON.parse(getTheme));
  };


  return (
    <Container open={open} onClick={() => setOpen(!open)}>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <div>
          <span />
        </div>
      </Hamburger>

      <Menu open={open}>
        <OptionText Tittle>Choise your favorite Theme</OptionText>
        <Options>
          {list.map((list, index) => {
            const name = list.Name;

            return (
              <Option key={index} onClick={() => handleClick({ index })}>
                <OptionText>{name}</OptionText>
                {name === currentTheme.Name ? <Current /> : null}
              </Option>
            );
          })}
        </Options>
      </Menu>
    </Container>
  );
};

export default OptionsTheme;
